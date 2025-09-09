"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const team = [
  { name: "Alice Johnson", role: "CEO & Founder", img: "https://nkd.co.uk/wp-content/uploads/2023/08/Alice_1-1024x1024.jpg" },
  { name: "David Kim", role: "Lead Architect", img: "https://images.squarespace-cdn.com/content/v1/5f35b52a7eab0f144ba582f7/f0974a9d-9960-4335-af46-2b814f60120e/Idriss_Derm-254.jpg" },
  { name: "Sophia Lee", role: "Project Manager", img: "https://macmillan.yale.edu/sites/default/files/styles/portrait_360/public/2024-09/Sophia%20Lee%20Headshot_1.jpg?h=c66bb102&itok=oCsbvgUR" },
  { name: "James Brown", role: "Engineer", img: "https://media.licdn.com/dms/image/v2/D5622AQEKbGDOQ5bJEw/feedshare-shrink_800/feedshare-shrink_800/0/1729523075671?e=2147483647&v=beta&t=SWtPY2fDgDh3cv5tcicAFxbqNEbuf2sAQYeYdZUmdPE" },
]

export default function Team() {
  const sectionRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % team.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + team.length) % team.length)

  // Swipe detection
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide() // swipe left
    if (touchEndX.current - touchStartX.current > 50) prevSlide() // swipe right
  }

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll(".team-card")

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
          toggleActions: "play reverse play reverse",
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Meet Our Team
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="team-card bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6"
            >
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image src={member.img} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Mobile Slider with Swipe */}
        <div
          className="md:hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="team-card bg-white rounded-2xl shadow-md p-6 text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
              <Image
                src={team[current].img}
                alt={team[current].name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{team[current].name}</h3>
            <p className="text-sm text-gray-500">{team[current].role}</p>
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
            {team.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === current ? "bg-yellow-500" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
