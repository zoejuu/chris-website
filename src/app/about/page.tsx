"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <img 
          src="/zipscreen/zipscreen-page.jpg" 
          alt="Bespoke Window Solutions Melbourne"
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
        />
        <div className="relative z-10 text-center space-y-4 px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="uppercase tracking-[0.4em] text-[10px] md:text-[12px] font-bold text-orange-400">
              Our Heritage
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
              A Decade of <br />
              <span className="font-serif italic text-slate-300">Craft & Vision</span>
            </h1>
            <div className="h-[2px] w-12 bg-orange-500 mx-auto mt-10"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. Story Section */}
      <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight">
              Beyond Curtains, <br />
              <span className="font-serif italic text-slate-500">We Build Trust.</span>
            </h2>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
              <p>
                Based in Melbourne, <strong>Chris Curtains</strong> is a family-owned and operated business with over <strong>10 years of professional experience</strong> in the window furnishing industry.
              </p>
              <p>
                Our strength lies in the perfect synergy between technical precision and aesthetic vision. While our <strong>lead installer</strong> brings a decade of mastery in complex installations and structural integrity, our <strong>design consultant</strong> manages client communications to ensure every project is an artistic success.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-slate-100 overflow-hidden rounded-sm relative shadow-2xl"
          >
            <img 
              src="/about-us.jpeg" 
              className="w-full h-full object-cover" 
              alt="The Art of Window Furnishing"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <span className="text-orange-400 text-[12px] font-black uppercase tracking-widest">Expertise</span>
              <h3 className="text-2xl font-light">10+ Years On-Site</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                From luxury apartments to heritage homes, our technical expertise ensures flawless finishing even in the most challenging structural environments.
              </p>
            </div>
            <div className="space-y-4 border-y md:border-y-0 md:border-x border-white/10 py-10 md:py-0 md:px-10">
              <span className="text-orange-400 text-[12px] font-black uppercase tracking-widest">Consultation</span>
              <h3 className="text-2xl font-light">Design-Led Approach</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Led by an Interior Design specialist, we curate fabrics and systems that harmonize perfectly with your home’s existing architecture and color palette.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-orange-400 text-[12px] font-black uppercase tracking-widest">Integrity</span>
              <h3 className="text-2xl font-light">Direct Ownership</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                We do not outsource. Every measurement and installation is handled by our family team, ensuring absolute accountability and transparent communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing Statement */}
      <section className="py-32 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-10"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 italic font-serif">
            "Every window is an opportunity to frame a better lifestyle."
          </h2>
          <p className="text-slate-500 font-light tracking-[0.2em] uppercase text-[10px]">
            The Chris Curtains Family Team
          </p>
          <div className="pt-10">
            <a 
              href="/contact" 
              className="inline-block border-b border-slate-900 pb-2 text-[11px] font-black uppercase tracking-[0.3em] hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              Start your project
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}