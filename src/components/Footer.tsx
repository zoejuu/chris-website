"use client"

import Link from 'next/link';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-slate-900 py-12 px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10">
          
          {/* Column 1: Links & Brand */}
          <div className="py-2 md:pr-10 space-y-4 flex flex-col justify-between">
            <div className="py-8 md:pr-10 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Quick Links</p>
                <ul className="space-y-1">
                  {['Home', 'About', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-1">
                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Products</p>
                <ul className="space-y-1">
                  {['Curtains', 'Shutters', 'Blinds'].map((item) => (
                    <li key={item}>
                      <Link href="/products" className="text-slate-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="/" className="pb-8 text-xl font-black tracking-tighter uppercase italic text-white/80">
              Chris <span className="text-orange-400/60">Curtains</span>
            </Link>
          </div>

          {/* Column 2: Contact */}
          <div className="py-10 px-0 md:px-10 border-y md:border-y-0 md:border-x border-white/10 flex flex-col justify-center items-center text-center">
            <p className="text-orange-400 text-[9px] font-black uppercase tracking-[0.3em] mb-4">Get in Touch</p>
            <h3 className="text-xl font-light text-white leading-tight italic font-serif mb-4">
              Contact us Today for <br/> Free Quote / Consultation
            </h3>
            <div className="space-y-1 mb-6">
              <p className="text-xs text-slate-300 font-light">studio@chriscurtains.com.au</p>
              <p className="text-xs text-slate-300 font-light">(03) 9876 5432</p>
            </div>
            <Link href="/contact">
              <button className="rounded-full border border-white/20 text-white px-8 py-3 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
                Submit Enquiry Online
              </button>
            </Link>
          </div>

          {/* Column 3: Instagram Preview */}
          <div className="py-10 md:pl-10 flex flex-col h-full max-h-[300px] justify-center items-center text-center">
            <div 
              className="elfsight-app-2abf71da-b9b2-4ce0-986f-df4f63366cca" 
              data-elfsight-app-lazy 
            />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center opacity-50">
          <p className="text-[10px] text-slate-300 uppercase tracking-[0.2em]">
            © 2026 Chris Curtains.
          </p>
        </div>
      </div>
    </footer>
  );
}
