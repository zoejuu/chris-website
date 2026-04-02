'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-10 py-8">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-16 md:gap-50">
        
        {/* 1. Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic text-white shrink-0">
          Chris <span className="text-orange-400">Curtains</span>
        </Link>

        {/* 2. Menu + Button Group */}
        <div className="hidden md:flex items-center gap-2">
          {/* Only Products Dropdown */}
          <div className="relative group">
            <Link href="/products" className="text-sm font-bold uppercase tracking-[0.2em] text-white cursor-pointer hover:text-orange-500 transition-colors">
              Products
            </Link>
            
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 p-6 min-w-[200px] space-y-4 shadow-2xl rounded-lg">
                {['Curtains', 'Shutters', 'Blinds', 'Zip Screens', 'Automation'].map((item) => (
                  <Link 
                    key={item}
                    href={`/products/${item.toLowerCase().replace(' ', '')}`} 
                    className="block text-white hover:text-orange-500 transition-colors text-xs font-bold tracking-widest uppercase"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="h-4 w-[1px] bg-white/20 mx-2"></div>

          {/* FREE QUOTE Button */}
          <div className="shrink-0">
            <Link href="/contact">
              <button className="bg-white/10 border border-white/40 text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                GET FREE QUOTE
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-10 flex flex-col space-y-1.5"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white ${open ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-lg border-b border-white/10 p-10 flex flex-col items-center space-y-8 text-center shadow-2xl">
          <div className="flex flex-col space-y-4 w-full">
             <p className="text-slate-500 text-[10px] tracking-[0.4em] uppercase font-black">Our Collections</p>
             {['Curtains', 'Shutters', 'Blinds', 'Zip Screens', 'Automation'].map((item) => (
               <Link 
                 key={item} 
                 href={`/products/${item.toLowerCase().replace(' ', '')}`} 
                 className="text-white text-lg font-bold uppercase tracking-widest hover:text-orange-500" 
                 onClick={() => setOpen(false)}
               >
                 {item}
               </Link>
             ))}
          </div>
          <Link href="/contact" className="bg-orange-500 w-full py-4 rounded-full font-bold uppercase text-sm tracking-widest shadow-lg shadow-orange-500/20">
            Get Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}