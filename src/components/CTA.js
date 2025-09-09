'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Ready to take the next step?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
        >
          Join our community and start building something that matters today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl bg-gray-900 text-white font-medium shadow-lg hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl bg-white text-gray-900 font-medium shadow-lg hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
