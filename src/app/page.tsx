"use client"

import { motion } from "framer-motion"
import Link from 'next/link';

export default function Homepage() {
  return (
    <>
    {/* Hero Section */}
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gray-100">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/background.jpg"
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-100/60 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto py-10 px-10 text-center">
        <span className="uppercase tracking-[0.3em] text-sm text-gray-600 mb-4 block font-medium">
          Melbourne Bespoke Interiors
        </span>
        <h1 className="text-6xl font-extralight text-gray-900 mb-8 leading-[1.1]">
          The Art of <br /> <span className="italic font-serif text-gray-800">Light and Shadow</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-700 font-light leading-relaxed mb-8 text-lg">
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

    {/* About Section */}
    <section className="bg-white py-24 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div className="w-full">
          <div className="relative bg-gray-100 overflow-hidden shadow-sm">
            <img 
                src="/interior_in_progress.jpg" 
                alt="Fabric texture" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
            />
          </div>
        </div>

        {/* Right */}
        <div className="space-y-8">
          <span className="uppercase tracking-[0.3em] text-[10px] text-gray-400 font-semibold">
            About Our Business
          </span>
          <h2 className="text-4xl font-extralight text-gray-900 leading-tight">
            Curating comfort for <br /> 
            <span className="italic font-serif">modern Melbourne living.</span>
          </h2>
          <p className="text-gray-600 font-light leading-relaxed text-lg">
            With over a decade of experience in textile selection and window styling, 
            Chris Curtains brings a refined eye to every home. We believe that 
            curtains are more than window coverings—they are the final layer of 
            architecture that defines a room's soul.
          </p>
          <div className="pt-4">
            <Link href="/about" className="text-xs uppercase tracking-[0.2em] border-b border-gray-900 pb-2 hover:text-gray-500 hover:border-gray-500 transition-all">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Collections Section */}
    <section className="bg-white pb-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="uppercase tracking-[0.3em] text-[10px] text-gray-400 font-semibold mb-2 block">
              Our Offerings
            </span>
            <h2 className="text-4xl font-extralight text-gray-900">The Collection</h2>
          </div>
          <Link href="/products" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category Card Item */}
          {[
            { title: 'Curtains', img: '/curtain-category.jpg' },
            { title: 'Shutters', img: '/shutter-category.jpg' },
            { title: 'Roller Blinds', img: '/blind-category.jpg' },
            { title: 'Timber Venetians', img: '/venetian-category.jpg' },
            { title: 'Zip Screens', img: '/zipscreen-category.jpg' },
            { title: 'Automation & Motorisation', img: '/automation-category.jpg' }
          ].map((item, index) => (
            <Link href="/products" key={index} className="relative group overflow-hidden bg-gray-100 aspect-[16/9] cursor-pointer">
              {/* Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay (Tint) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                {/* Text that appears on hover */}
                <span className="text-white uppercase tracking-[0.3em] text-xs opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-light">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="bg-gray-100 py-10 px-10">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-extralight text-gray-900 mb-6">
        Contact us Today for a Personalised Consultation
      </h2>
      <p className="text-gray-500 font-light mb-6 uppercase tracking-widest text-[11px]">
        Available 24/7 for consultations across Greater Melbourne Area
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-5">
        <div className="text-right mx-4">
          <Link href="/contact">
            <button className="bg-gray-900 text-white px-16 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-gray-700 transition-colors duration-300">
              Get Free Quote
            </button>
          </Link>
        </div>
        <div className="text-left mx-4">
          <div>
          <span className="text-[10px] uppercase tracking-widest text-gray-400 block">Email</span>
          <p className="text-[13px] text-gray-900 font-light mb-1">studio@chriscurtains.com.au</p>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-widest text-gray-400 block">Phone</span>
          <p className="text-[13px] text-gray-900 font-light mx-0">(03) 9876 5432</p>
        </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}