'use client'

import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Link from 'next/link'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export default function Hero() {
  return (
    <section
      className={`relative w-full min-h-[70vh] md:min-h-screen flex items-center justify-center text-center ${poppins.className}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: "url('https://www.leavitt.com/dA/b23b96683d/featuredImage/blog-construction.jpg/1200w/webp/50q')" }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center max-w-4xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          Building the Future with Fortis
        </h1>

        <p className="mt-4 text-base md:text-xl text-gray-200 max-w-2xl">
          We design and deliver world-class projects that shape tomorrow&apos;s world.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow hover:bg-yellow-500 transition"
          >
            View Projects
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

