"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SubNavbar from "@/components/Subnavbar";

export default function CurtainsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[300px]  flex items-center justify-center bg-slate-900 overflow-hidden">
        <img 
          src="/zipscreen/zipscreen-page.jpg"
          alt="Bespoke Curtains"
          className="absolute inset-0 w-full h-full object-cover object-[center_70%] opacity-60"
        />
        <div className="relative z-10 text-center space-y-4">
          <span className="uppercase tracking-[0.3em] text-[12px] text-orange-400 font-bold mb-4 block pt-10">
            Premium Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white tracking-normal">
                Zip Screens
          </h1>
        </div>
      </section>

      <SubNavbar />

      {/* 2. Intro & Split Detail Section (Zip Screens) */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Main Image/Video Gallery Area */}
          <div className="space-y-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-[4/5] overflow-hidden bg-slate-100 rounded-sm shadow-sm group"
                >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/zipscreen/thumbnail.jpg" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                >
                    <source src="/zipscreen/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-square bg-slate-100 rounded-sm overflow-hidden"
              >
                <img src="/zipscreen/zipscreen-page-1.jpg" className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-1000" alt="Weather Resistance" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-square bg-slate-100 rounded-sm overflow-hidden"
              >
                <img src="/zipscreen/zipscreen-page-2.jpg" className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-1000" alt="Side Track Detail" />
              </motion.div>
            </div>
          </div>

          {/* Right: Product Description & Features */}
          <div className="sticky top-32 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-light text-slate-900 leading-tight">
                Seamless Integration for <br />
                <span className="font-serif italic text-slate-500">Alfresco Entertaining</span>
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 1 }}
                className="h-[2px] bg-orange-500"
              />
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-light">
              Transform your outdoor area into a year-round living space. 
              Our premium Zip Screens provide a sleek, secure, and durable barrier against wind, 
              rain, and insects, allowing you to enjoy your balcony or patio in ultimate comfort, 
              regardless of the Melbourne weather.
            </p>

            {/* Feature List (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 border-t border-slate-100 pt-10">
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Weather Shield</h4>
                <p className="text-sm text-slate-500">Advanced track-guided system for superior wind and rain resistance.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Insect Protection</h4>
                <p className="text-sm text-slate-500">Fine-mesh technology that keeps pests out without blocking the view.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Sleek Finish</h4>
                <p className="text-sm text-slate-500">Minimalist side rails and headboxes that blend with any facade.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Total Control</h4>
                <p className="text-sm text-slate-500">Effortless manual or smart-automated operation at your command.</p>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/contact">
                <button className="w-full md:w-auto bg-slate-900 text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-orange-400 transition-all duration-300 shadow-lg active:scale-95">
                  Book a Free Measure & Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Full-width Experience Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-20 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-light text-slate-900 font-serif italic leading-snug">
            "Redefining the boundaries between nature and comfort."
          </h3>
          <p className="text-slate-500 text-[12px] tracking-[0.3em] uppercase font-bold">— Melbourne Blinds Factory Philosophy</p>
        </motion.div>
      </section>

    </div>
  )
}