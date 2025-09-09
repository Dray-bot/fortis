"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ShieldCheck, Clock, Award, Users } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function WhyChooseUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        ".why-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      )

      // Animate underline stroke
      gsap.fromTo(
        ".why-underline",
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          transformOrigin: "center",
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      )

      // Animate feature cards
      gsap.fromTo(
        ".why-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-yellow-400" />,
      title: "Trusted Quality",
      desc: "We use top-grade materials and proven methods to ensure every project lasts.",
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-400" />,
      title: "On-Time Delivery",
      desc: "Your deadlines matter to us. We deliver projects without unnecessary delays.",
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-400" />,
      title: "Expert Team",
      desc: "Our experienced professionals bring precision, expertise, and skill to each build.",
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-400" />,
      title: "Client-Centered",
      desc: "We listen, collaborate, and deliver solutions tailored to your vision.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Title with animated underline */}
        <div className="text-center mb-16">
          <h2 className="why-title text-3xl md:text-5xl font-bold text-gray-900 relative inline-block">
            Why Choose Us
            <span className="why-underline absolute left-1/2 -bottom-3 -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 place-items-stretch">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="why-card bg-gray-50 rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-transform"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
