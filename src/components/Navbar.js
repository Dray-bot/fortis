"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { Menu, X } from "lucide-react"
import { Disclosure } from "@headlessui/react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Services", href: "/" },
  { name: "Projects", href: "/" },
  { name: "Contact", href: "/" },
]

export default function Navbar() {
  const navRef = useRef(null)
  const logoBlockRef = useRef(null)
  const logoTextRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current

    gsap.fromTo(
      nav,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )

    gsap.fromTo(
      logoBlockRef.current,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: "power3.out" }
    )
    gsap.fromTo(
      logoTextRef.current,
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, delay: 0.5, ease: "power3.out" }
    )

    const handleScroll = () => {
      if (window.scrollY > 10) {
        gsap.to(nav, {
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
          backdropFilter: "blur(12px)",
          duration: 0.3,
        })
      } else {
        gsap.to(nav, {
          boxShadow: "none",
          backdropFilter: "blur(0px)",
          duration: 0.3,
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Disclosure
      as="nav"
      ref={navRef}
      className={`fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 ${poppins.className}`}
    >
      {({ open }) => (
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              ref={logoBlockRef}
              className="w-4 h-8 bg-yellow-400 rounded-md shadow-lg"
            ></div>
            <span
              ref={logoTextRef}
              className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900"
            >
              Fortis
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="relative text-gray-800 font-medium transition group hover:text-yellow-500"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-xl hover:scale-105 hover:shadow-yellow-300 transition-transform"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <Disclosure.Button className="p-2 text-gray-800 rounded-lg hover:bg-gray-100 transition">
              {open ? <X size={28} /> : <Menu size={28} />}
            </Disclosure.Button>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col space-y-4 px-6 py-6 border-t border-gray-200">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-800 font-medium transition hover:text-yellow-500"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/"
              className="bg-yellow-400 text-gray-900 px-5 py-3 rounded-lg font-semibold text-center shadow-lg hover:scale-105 hover:shadow-yellow-300 transition-transform"
            >
              Get a Quote
            </Link>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}
