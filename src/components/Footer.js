'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function Footer() {
  return (
    <footer className={`bg-white border-t border-gray-200 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900">Fortis</h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            We build structures that stand the test of time.  
            Delivering quality, reliability, and innovation in every project.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link href="/" className="hover:text-yellow-500 transition">About Us</Link></li>
            <li><Link href="/" className="hover:text-yellow-500 transition">Projects</Link></li>
            <li><Link href="/" className="hover:text-yellow-500 transition">Services</Link></li>
            <li><Link href="/" className="hover:text-yellow-500 transition">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-500" />
              +234 800 123 4567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-500" />
              info@fortis.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-500" />
              24 Fortis Road, North Carolina, USA
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for updates on our latest projects.</p>
          <form className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 text-white rounded-r-lg hover:bg-yellow-600 transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Fortis. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition"><Facebook size={18} /></Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition"><Twitter size={18} /></Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition"><Linkedin size={18} /></Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500 transition"><Instagram size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
