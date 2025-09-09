"use client"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "Modern Residential Villa",
    category: "Residential",
    image: "https://modernsteeldoors.com/wp-content/uploads/stock-photo-modern-house-1-scaled.jpg",
  },
  {
    title: "Corporate Office Tower",
    category: "Commercial",
    image: "https://media.istockphoto.com/id/1958541858/photo/office-building-dusk.jpg?s=612x612&w=0&k=20&c=foJIkTuT63ak-Fg76ts-gc3gyz_3PwqrIZf_T2GHiTE=",
  },
  {
    title: "Luxury Interior Design",
    category: "Interior",
    image: "https://cdn.home-designing.com/wp-content/uploads/2019/08/Modern-Moroccan-interior-1024x576.jpg",
  },
  {
    title: "Renovated Industrial Space",
    category: "Renovation",
    image: "https://images.adsttc.com/media/images/6629/4bbb/c734/9401/7e79/3f5b/newsletter/us_1.jpg?1713982418",
  },
]

const stats = [
  { label: "Projects Completed", value: 250 },
  { label: "Happy Clients", value: 180 },
  { label: "Years Experience", value: 12 },
  { label: "Ongoing Projects", value: 15 },
]

export default function Projects() {
  const cardRefs = useRef([])
  const containerRef = useRef(null)
  const [scrollIndex, setScrollIndex] = useState(0)
  const [counts, setCounts] = useState(stats.map(() => 0))

  // Animate project cards
  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
  }, [])

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            stats.forEach((stat, index) => {
              let start = 0
              const end = stat.value
              const increment = end / 60
              const counter = setInterval(() => {
                start += increment
                if (start >= end) {
                  start = end
                  clearInterval(counter)
                }
                setCounts(prev => {
                  const updated = [...prev]
                  updated[index] = Math.floor(start)
                  return updated
                })
              }, 16)
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    const target = document.getElementById("project-stats")
    if (target) observer.observe(target)
    return () => observer.disconnect()
  }, [])

  const scroll = direction => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth
      const newIndex = Math.max(
        0,
        Math.min(scrollIndex + direction, projects.length - 1)
      )
      setScrollIndex(newIndex)
      containerRef.current.scrollTo({
        left: width * newIndex,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
        <span className="relative inline-block">
          Our Projects
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-yellow-500 rounded-full"></span>
        </span>
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {projects.map((p, idx) => (
          <div
            key={idx}
            ref={el => (cardRefs.current[idx] = el)}
            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer relative"
          >
            <div className="w-full h-56 relative">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-yellow-500 font-semibold">{p.category}</p>
              <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="relative md:hidden px-6">
        <div
          ref={containerRef}
          className="flex overflow-x-hidden snap-x snap-mandatory"
        >
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="min-w-full flex-shrink-0 snap-center bg-white rounded-3xl shadow-xl overflow-hidden mr-4"
            >
              <div className="w-full h-56 relative">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-yellow-500 font-semibold">{p.category}</p>
                <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Arrows */}
        <button
          onClick={() => scroll(-1)}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full shadow-lg"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full shadow-lg"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Stats Counter */}
      <div
        id="project-stats"
        className="grid md:grid-cols-4 gap-8 text-center mt-20 px-6 md:px-12"
      >
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-yellow-600">
              {counts[index]}
            </h3>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
