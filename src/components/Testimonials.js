"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, BuildCo",
    message:
      "Working with this team was a seamless experience. The results exceeded our expectations.",
  },
  {
    name: "Jane Smith",
    role: "Project Manager, ConstructIt",
    message:
      "Professional, punctual, and precise. They transformed our vision into reality.",
  },
  {
    name: "Michael Lee",
    role: "Architect, Skyline Designs",
    message:
      "Highly recommend. Their attention to detail and quality is unmatched.",
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll(".testimonial-card")

    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse", // in & out
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    strokeWidth={1.5}
                    className="text-yellow-400 mr-1"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">{t.message}</p>
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="testimonial-card bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  strokeWidth={1.5}
                  className="text-yellow-400 mr-1"
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6">{testimonials[current].message}</p>
            <h3 className="text-lg font-semibold text-gray-900">
              {testimonials[current].name}
            </h3>
            <p className="text-sm text-gray-500">{testimonials[current].role}</p>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === current ? "bg-yellow-400" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
