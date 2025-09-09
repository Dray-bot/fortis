"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Hammer, Building2, Home } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        ".services-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse", // animates in & out
          },
        }
      )

      // Animate cards
      gsap.fromTo(
        ".service-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse", // animates both ways
          },
        }
      )

      // Icon bounce
      gsap.fromTo(
        ".service-icon",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      title: "General Contracting",
      desc: "End-to-end project execution with quality and precision.",
      icon: <Hammer className="w-12 h-12 text-yellow-400 service-icon" />,
    },
    {
      title: "Commercial Construction",
      desc: "Durable and modern spaces built to scale your business.",
      icon: <Building2 className="w-12 h-12 text-yellow-400 service-icon" />,
    },
    {
      title: "Residential Projects",
      desc: "Beautiful and lasting homes designed for comfort.",
      icon: <Home className="w-12 h-12 text-yellow-400 service-icon" />,
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="services-title text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">
          Our Services
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div>
        </h2>

        <div className="grid gap-10 md:grid-cols-3 place-items-stretch">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
