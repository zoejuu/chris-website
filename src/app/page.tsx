"use client"

import { motion } from "framer-motion"
import Link from 'next/link';

export default function DesignA() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden my-3">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/background.jpg"
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto py-32 px-10 text-center">
        <span className="uppercase tracking-[0.3em] text-sm text-gray-600 mb-4 block font-medium">
          Melbourne Bespoke Interiors
        </span>
        <h1 className="text-6xl font-extralight text-gray-900 mb-8 leading-[1.1]">
          The Art of <br /> <span className="italic font-serif text-gray-800">Light and Shadow</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-700 font-light leading-relaxed mb-12 text-lg">
          Elevating Melbourne homes with premium fabrics and understated elegance. 
          We don't just hang curtains; we design the way light enters your sanctuary.
        </p>
        <div className="flex justify-center">
          <Link href="/products" className="cursor-pointer">
            <button className="cursor-pointer border border-gray-900 px-12 py-4 text-xs uppercase tracking-[0.2em] hover:bg-gray-900 hover:text-white transition-all duration-500 ease-in-out">
              Explore the Collection
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}