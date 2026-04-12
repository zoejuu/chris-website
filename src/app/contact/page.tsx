"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { siInstagram, siFacebook } from 'simple-icons';


export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Minimal Header Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <img 
          src="/zipscreen/zipscreen-page.jpg"
          alt="Bespoke Curtains and Blinds"
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
        />
        <div className="relative z-10 text-center space-y-4 px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="uppercase tracking-[0.4em] text-[10px] md:text-[12px] font-bold text-orange-400">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
              Let's Start Your <br />
              <span className="font-serif italic text-slate-300">Living Space Journey</span>
            </h1>
            <div className="h-[2px] w-12 bg-orange-500 mx-auto mt-10"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="pt-18 pb-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left: Contact Details & Socials (5/12) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-16"
          >
            {/* Contact Details */}
            <div className="space-y-10">
              <div className="space-y-2">
                <h3 className="text-[12px] font-bold uppercase tracking-widest text-slate-400">Our Business</h3>
                <p className="text-lg text-slate-900 font-light leading-relaxed">
                  Melbourne, Victoria <br />
                  Fully Insured / Australian Made
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <Phone size={16} className="text-slate-400 group-hover:text-white" />
                  </div>
                  <span className="text-slate-600 font-light">(03) 9876 5432</span>
                </div>
                
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <Mail size={16} className="text-slate-400 group-hover:text-white" />
                  </div>
                  <span className="text-slate-600 font-light">studio@chriscurtains.com.au</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-6 pt-10 border-t border-slate-100">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-slate-400">Follow the Journey</h3>
              <div className="flex gap-8">
                {/* Instagram */}
                <a href="#" className="flex items-center gap-3 text-slate-900 hover:text-orange-500 transition-colors group">
                  <svg 
                    role="img" 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 fill-current transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={siInstagram.path} />
                  </svg>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Instagram</span>
                </a>

                {/* Facebook */}
                <a href="#" className="flex items-center gap-3 text-slate-900 hover:text-orange-500 transition-colors group">
                  <svg 
                    role="img" 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 fill-current transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={siFacebook.path} />
                  </svg>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 bg-white"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-slate-900">Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-orange-500 transition-colors font-light text-slate-600 placeholder:text-slate-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-slate-900">Email Address *</label>
                  <input type="email" placeholder="john@example.com" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-orange-500 transition-colors font-light text-slate-600 placeholder:text-slate-300" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-slate-900">Phone Number *</label>
                  <input type="tel" placeholder="0400 000 000" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-orange-500 transition-colors font-light text-slate-600 placeholder:text-slate-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-slate-900">Interest In</label>
                  <select className="w-full border-b border-slate-200 py-3 bg-white focus:outline-none focus:border-orange-500 transition-colors font-light text-slate-600 cursor-pointer appearance-none">
                    <option value="">Select a Category</option>
                    <option value="curtains">Curtains</option>
                    <option value="blinds">Roller Blinds</option>
                    <option value="blinds">Timber Venetians</option>
                    <option value="screens">Zip Screens</option>
                    <option value="automation">Automation System</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold uppercase tracking-widest text-slate-900">Your Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-orange-500 transition-colors font-light text-slate-600 placeholder:text-slate-300 resize-none" />
              </div>

              <div className="pt-6">
                <button type="submit" className="group relative overflow-hidden bg-slate-900 text-white px-16 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 shadow-xl hover:shadow-orange-200/50 w-full md:w-auto">
                  <span className="relative z-10">Send Enquiry</span>
                  <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 3. Aesthetic Footer Image */}
      <section className="h-[30vh] bg-slate-50 overflow-hidden">
         <img 
           src="/zipscreen/zipscreen-page.jpg" 
           className="w-full h-full object-cover opacity-30 grayscale" 
           alt="Contact Background"
         />
      </section>
    </div>
  )
}