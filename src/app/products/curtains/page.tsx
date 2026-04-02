"use client"

import { motion } from "framer-motion"
import Link from 'next/link'

export default function CurtainsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section: 제품 카테고리 타이틀 */}
      <section className="relative h-[45vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <img 
          src="/curtain-hero.jpg" // 적절한 이미지 경로로 수정하세요
          alt="Bespoke Curtains"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center space-y-4">
          <span className="text-orange-400 font-bold text-[10px] tracking-[0.4em] uppercase block">
            Premium Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white tracking-tight">
            Curtains
          </h1>
        </div>
      </section>

      {/* 2. Intro & Split Detail Section (lovelights 스타일) */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Main Image Gallery Area */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="aspect-[4/5] overflow-hidden bg-slate-100 rounded-sm shadow-sm"
            >
              <img 
                src="/curtain-detail-1.jpg" 
                alt="Curtain Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-slate-100 rounded-sm overflow-hidden">
                <img src="/curtain-detail-2.jpg" className="w-full h-full object-cover" alt="Detail" />
              </div>
              <div className="aspect-square bg-slate-100 rounded-sm overflow-hidden">
                <img src="/curtain-detail-3.jpg" className="w-full h-full object-cover" alt="Detail" />
              </div>
            </div>
          </div>

          {/* Right: Product Description & Features */}
          <div className="sticky top-32 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-light text-slate-900 leading-tight">
                Tailored Elegance for <br />
                <span className="font-serif italic text-slate-500">Sophisticated Interiors</span>
              </h2>
              <div className="h-[2px] w-12 bg-orange-500"></div>
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
                <button className="w-full md:w-auto bg-slate-900 text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-orange-500 transition-all duration-300 shadow-lg">
                  Book a Free Measure & Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Full-width Experience Section (Optional) */}
      <section className="bg-slate-50 py-24 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl md:text-3xl font-light text-slate-900 font-serif italic">
            "The final layer of architecture that defines a room's soul."
          </h3>
          <p className="text-slate-500 text-sm tracking-widest uppercase font-bold">— Chris Curtains Philosophy</p>
        </div>
      </section>

      {/* 4. Footer CTA: Navigation back to All Products */}
      <section className="py-20 border-t border-slate-100 text-center">
        <Link href="/products" className="group inline-flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore Other Collections</span>
          <div className="w-8 h-[1px] bg-slate-300 group-hover:w-12 group-hover:bg-orange-500 transition-all"></div>
        </Link>
      </section>
    </div>
  )
}