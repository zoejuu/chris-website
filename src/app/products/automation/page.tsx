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
      <section className="relative h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <img 
          src="/automation-2.jpg"
          alt="Bespoke Curtains"
          className="absolute inset-0 w-full h-full object-cover object-[center_40%] opacity-60"
        />
        <div className="relative z-10 text-center space-y-4">
          <span className="uppercase tracking-[0.3em] text-[12px] text-orange-400 font-bold mb-4 block">
            Premium Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white tracking-normal">
                Automation
          </h1>
        </div>
      </section>

      <SubNavbar />

      <section className="py-18 px-6 md:px-20 max-w-7xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
            The Future of <br />
            <span className="font-serif italic text-slate-500">Effortless Living</span>
          </h2>
          <div className="h-[2px] w-12 bg-orange-500 mx-auto"></div>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Our automation systems go beyond simple open-and-close functions. 
            We provide an intelligent environment tailored to your lifestyle. 
            Control every layer of light and privacy with a single touch via smartphone, 
            voice commands, or automated scheduling.
          </p>
        </motion.div>
      </section>

      {/* 3. Tech Showcase: Grid Layout with Video/App UI */}
      <section className="pb-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: Mobile App / UI Focus (5/12) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-8"
          >
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-[22px] font-light text-slate-900">Automation adds efficiency to your life</h3>
              <ul className="space-y-6">
                {[
                  { title: "Remote Access", desc: "Adjust your blinds from anywhere in the world, even when you are away." },
                  { title: "Smart Scheduling", desc: "Set scenarios that automatically activate at sunrise and sunset." },
                  { title: "Voice Integration", desc: "Seamlessly compatible with Apple HomeKit, Google Assistant, and Amazon Alexa." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-orange-500 font-serif italic text-xl">0{idx + 1}</span>
                    <div>
                      <h4 className="text-[13px] font-bold uppercase tracking-wider text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Immersive Visual (7/12) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-7 aspect-video md:aspect-square lg:aspect-video overflow-hidden rounded-2xl shadow-2xl relative group"
            >
            <img 
                src="/automation-3.png" 
                alt="Smart Home Automation"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start justify-start p-8">
                <p className="text-white text-3xl tracking-widest uppercase font-semibold">
                Experience <br/> Smart <br/> Innovation
                </p>
            </div>
            </motion.div>
        </div>
        <div className="flex justify-center pt-16">
            <Link href="/contact">
              <button className="group relative overflow-hidden bg-slate-900 text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-orange-200/50">
                <span className="relative z-10">Get a Smart Home Consultation</span>
                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </Link>
        </div>
      </section>

    {/* 4. Connectivity Partners (Logos with Links) */}
    <section className="py-16 border-y border-slate-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[12px] font-extrabold uppercase tracking-[0.4em] text-slate-400 mb-12">
            Seamless Integration With
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {/* 1. Apple HomeKit */}
            <a 
                href="https://www.apple.com/home-app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-bold text-slate-800 tracking-tighter opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            >
                Apple HomeKit
            </a>

            {/* 2. Google Home */}
            <a 
                href="https://home.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-bold text-slate-800 tracking-tighter opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            >
                Google Home
            </a>

            {/* 3. Amazon Alexa */}
            <a 
                href="https://www.amazon.com/alexa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-bold text-slate-800 tracking-tighter opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            >
                Amazon alexa
            </a>

            {/* 4. Somfy */}
            <a 
                href="https://www.somfy.com.au/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-bold text-slate-800 tracking-tighter italic opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            >
                Somfy.
            </a>
            </div>
        </div>
    </section>
    </div>
  )
}