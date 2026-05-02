"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SubNavbar from "@/components/Subnavbar";

const productCategories = [
  {
    title: 'Curtains',
    description: 'Elevate your interior with our bespoke curtain collection. From sheer elegance to total blackout solutions, we tailor every fold to your unique style.',
    img: '/curtain-1.jpg',
    href: '/products/curtains'
  },
  {
    title: 'Shutters',
    description: 'Timeless, durable, and sophisticated. Our premium shutters provide ultimate light control and privacy while adding significant value to your home.',
    img: '/shutter-1.jpg',
    href: '/products/shutters'
  },
  {
    title: 'Blinds',
    description: 'Modern functionality meets minimalist design. Explore our range of roller, venetian, and roman blinds engineered for the contemporary Melbourne home.',
    img: '/rollerblind-1.jpg',
    href: '/products/blinds'
  },
  {
    title: 'Zip Screens',
    description: 'Extend your living space outdoors. Our zip screens offer protection from sun, wind, and insects without compromising your view.',
    img: '/zip-1.jpg',
    href: '/products/zip-screens'
  },
  {
    title: 'Automation',
    description: 'The future of window coverings. Integrate your blinds and curtains with smart home systems for effortless control at your fingertips.',
    img: '/automation-1.jpg',
    href: '/products/automation'
  }
];

export default function CurtainsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[300px]  flex items-center justify-center bg-slate-900 overflow-hidden">
        <img 
          src="/curtain/curtain-page.jpeg"
          alt="Bespoke Curtains"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center space-y-4">
          <span className="uppercase tracking-[0.3em] text-[12px] text-orange-400 font-bold mb-4 block pt-10">
            Premium Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white tracking-tight">
            Curtains
          </h1>
        </div>
      </section>

      <SubNavbar />

      {/* 2. Intro & Split Detail Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Main Image Gallery Area */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/5] overflow-hidden bg-slate-100 rounded-sm shadow-sm"
            >
              <img 
                src="/curtain/curtain-page.jpeg" 
                alt="Curtain Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-square bg-slate-100 rounded-sm overflow-hidden"
              >
                <img src="/curtain/curtain-page-2.jpeg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Blind Texture" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-square bg-slate-100 rounded-sm overflow-hidden"
              >
                <img src="/curtain/fabric.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Motorised System" />
              </motion.div>
            </div>
          </div>

          {/* Right: Product Description & Features */}
          <div className="sticky top-32 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-light text-slate-900 leading-tight">
                Tailored Elegance for <br />
                <span className="font-serif italic text-slate-500">Sophisticated Interiors</span>
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 1 }}
                className="h-[2px] bg-orange-500"
              />
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-light">
              Our bespoke curtains are more than just window coverings—they are a statement of style. 
              From sheer S-Fold curtains that invite soft natural light to heavy velvet blackouts for ultimate privacy, 
              we craft each piece in Melbourne with meticulous attention to detail.
            </p>

            {/* Feature List (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 border-t border-slate-100 pt-10">
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Custom Fabrics</h4>
                <p className="text-sm text-slate-500">Choose from over 500+ premium linen, silk, and cotton blends.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Expert Fit</h4>
                <p className="text-sm text-slate-500">Precision-measured and installed by our master specialists.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Style Options</h4>
                <p className="text-sm text-slate-500">S-Fold, Double Pinch Pleat, Eyelet, and Wave styles available.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Automation</h4>
                <p className="text-sm text-slate-500">Seamless integration with smart home motorisation systems.</p>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/contact">
                <button className="w-full md:w-auto bg-slate-900 text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-orange-400 transition-all duration-300 shadow-lg">
                  Book a Free Measure & Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Full-width Experience Section (Optional) */}
      <section className="bg-slate-50 py-24 px-6 md:px-20 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-light text-slate-900 font-serif italic leading-snug">
            "The final layer of architecture that defines a room's soul."
          </h3>
          <p className="text-slate-500 text-[12px] tracking-[0.3em] uppercase font-bold">— Chris Curtains Philosophy</p>
        </motion.div>
      </section>
    </div>
  )
}