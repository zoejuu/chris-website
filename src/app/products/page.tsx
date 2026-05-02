"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import SubNavbar from "@/components/Subnavbar";

const productCategories = [
  {
    title: 'Curtains',
    description: 'Elevate your interior with our curtain collection. From sheer elegance to total blackout solutions, we tailor every fold to your unique style.',
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

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Header Section: Hero Style */}
      <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/background.jpg"
            alt="Products Header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center">
          <span className="uppercase tracking-[0.3em] text-[12px] text-orange-400 font-bold mb-4 block pt-10">
            Exquisite Craftsmanship
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight italic font-serif">
            Our Products
          </h1>
        </div>
      </section>

      <SubNavbar />

      {/* Comprehensive Introduction Section */}
      <section className="bg-white py-15 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight uppercase">
              Built on <span className="text-orange-500">Trust</span>, Perfected by <br />
              Twenty Years of <span className="italic font-serif text-slate-500 capitalize">Family Mastery</span>
            </h2>
          </div>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light tracking-tight">
            As a dedicated <span className="font-semibold text-slate-900">family-owned and operated business</span>, 
            Melbourne Blinds Factory is built on a foundation of unwavering trust and personal accountability. 
            Every project is overseen by our <span className="font-semibold text-slate-900">Master Installers with over 20 years of industry expertise</span>, 
            ensuring that your window solutions are not only aesthetically stunning but technically flawless. 
            We don't just deliver products. We provide a seamless, end-to-end experience defined by 
            the integrity and meticulous attention to detail that only two decades of mastery can provide.
          </p>

          {/* Small Detail Divider */}
          <div className="flex justify-center items-center gap-4 pt-4">
            <div className="h-[1px] w-12 bg-slate-200"></div>
            <span className="font-serif italic text-slate-400 text-sm">Since 2006</span>
            <div className="h-[1px] w-12 bg-slate-200"></div>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="space-y-32">
          {productCategories.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Part */}
              <div className="w-full md:w-1/2">
                <Link href={product.href} className="block overflow-hidden group rounded-sm shadow-xl">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </Link>
              </div>

              {/* Text Part */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-2">
                  <span className="text-orange-500 font-bold text-xs tracking-widest uppercase">
                    0{index + 1} / Category
                  </span>
                  <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
                    {product.title}
                  </h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  {product.description}
                </p>
                <div className="pt-4">
                  <Link 
                    href={product.href} 
                    className="inline-flex items-center group text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-slate-900 pb-2 hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
                  >
                    Explore Collection
                    <svg 
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}