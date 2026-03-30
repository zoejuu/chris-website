"use client"

import { motion } from "framer-motion"
import Link from 'next/link';

export default function Homepage() {
  return (
    <>
    <section className="relative min-h-[60vh] pt-30 pb-15 px-10 text-white flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/background.jpg"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-6xl font-black uppercase tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-white">
          Premium <br />Window <br />Solutions
        </h1>
        <div className="flex justify-center gap-3 mb-5">
          <span className="bg-orange-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
            Melbourne Made
          </span>
          <span className="bg-slate-800 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
            10-Year Warranty
          </span>
        </div>
        <p className="text-slate-200 text-lg font-light italic mb-5">
          With over 15 years of experience, we provide precision-engineered<br></br>blinds and curtains for modern living.
        </p>
        <button className="border-2 border-slate-400 rounded-full text-slate-100 px-8 py-3 font-bold uppercase text-sm hover:bg-slate-400/20 hover:text-white transition-all duration-300">
          Browse our Collection
        </button>
      </div>
    </section>
    
    {/* About Section */}
    <section className="bg-slate-100 py-18 px-20">
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
          <span className="uppercase tracking-[0.2em] text-[12px] text-gray-400 font-semibold">
            About Our Business
          </span>
          <h2 className="text-4xl font-light text-gray-900 leading-tight">
            Curating comfort for <br /> 
            <span className="italic font-serif font-semibold">modern Melbourne living.</span>
          </h2>
          <p className="text-gray-600 font-regular tracking-tighter leading-relaxed text-lg">
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
      <section className="bg-white text-slate-800 pt-12 pb-24 px-24 md:px-40">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
          <div>
            <span className="uppercase tracking-[0.2em] text-[12px] text-gray-400 font-semibold">
              Our Proud Offerings
            </span>
            <h2 className="text-4xl font-extrabold pt-1 tracking-tight">The Collection</h2>
          </div>
          <Link href="/products" className="w-fit">
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-700 border-b border-slate-700 pb-1 hover:text-orange-500 hover:border-orange-500 transition-all duration-300 cursor-pointer">
              View All
            </span>
          </Link>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Curtains', img: '/curtain-1.jpg' },
              { title: 'Shutters', img: '/shutter-1.jpg' },
              { title: 'Roller Blinds', img: '/rollerblind-1.jpg' },
              { title: 'Timber Venetians', img: '/timber-1.jpg' },
              { title: 'Zip Screens', img: '/zip-1.jpg' },
              { title: 'Automation & Motorisation', img: '/automation-1.jpg' }
            ].map((item, index) => (
              <Link href="/products" key={index} className="relative group overflow-hidden rounded-lg aspect-[16/9] cursor-pointer bg-slate-800">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-slate-900/60 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 font-semibold transition-all">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-800 py-12 px-10 relative overflow-hidden shadow-[inset_0_0_100px_rgba(15,23,42,0.9)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 tracking-tighter leading-[1.1]">
            Contact us Today for a <br /> 
            <span className="font-serif italic font-light lowercase tracking-normal text-orange-400">Personalised Consultation</span>
          </h2>

          <p className="text-slate-500 font-bold mb-10 uppercase tracking-[0.2em] text-[12px]">
            Available 24/7 for consultations <span className="text-slate-400">/</span> Greater Melbourne Area
          </p>
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
              
              <div className="shrink-0">
                <Link href="/contact">
                  <button className="rounded-full bg-white text-black px-14 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-orange-400 hover:text-white transition-all duration-500 shadow-2xl shadow-white/5">
                    Contact Us
                  </button>
                </Link>
              </div>

              <div className="flex flex-col space-y-3 text-center md:text-left">
                <div className="group">
                  <span className="bg-orange-400 px-1.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em]">
                    Email
                  </span>
                  <p className="text-sm text-slate-200 font-light tracking-wide group-hover:text-white transition-colors">
                    studio@chriscurtains.com.au
                  </p>
                </div>

                <div className="group">
                  <span className="bg-orange-400 px-1.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em]">
                    Phone
                  </span>
                  <p className="text-sm text-slate-200 font-light tracking-wide group-hover:text-white transition-colors">
                    (03) 9876 5432
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}