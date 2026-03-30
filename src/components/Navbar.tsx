'use client';

import Link from 'next/link'
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/40 backdrop-blur-md sticky top-0 z-50 px-10 py-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif tracking-widest text-gray-900 uppercase">
          Chris <span className="italic font-light text-orange-400">Curtains</span>
        </Link>

        <div className="hidden md:flex items-center space-x-12 text-[11px] uppercase tracking-[0.3em] text-gray-500 font-medium">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <div className="relative group">
  
            {/* Products button */}
            <div className="px-2 py-1 transition-colors group-hover:bg-white/0">
              <span className="hover:text-gray-900 transition-colors cursor-pointer">
                Products
              </span>
            </div>

            {/* Dropdown */}
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white backdrop-blur-md px-6 py-4 space-y-4 text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium shadow-md">
                <Link href="/products/curtains" className="block hover:text-gray-900 transition-colors">
                  Curtains
                </Link>
                <Link href="/products/blinds" className="block hover:text-gray-900 transition-colors">
                  Shutters
                </Link>
                <Link href="/products/sheers" className="block hover:text-gray-900 transition-colors">
                  Blinds
                </Link>
                <Link href="/products/sheers" className="block hover:text-gray-900 transition-colors">
                  Zip Screens
                </Link>
                <Link href="/products/sheers" className="block hover:text-gray-900 transition-colors">
                  Automation
                </Link>
              </div>
            </div>
          </div>
          <Link href="/products" className="hover:text-gray-900 transition-colors">Collection</Link>

          <Link href="/contact" className="pl-4">
            <span className="text-gray-900 font-medium border-b border-gray-900 pb-1">
              Enquiry
            </span>
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className="w-5 h-[1px] bg-gray-900"></span>
          <span className="w-5 h-[1px] bg-gray-900"></span>
          <span className="w-5 h-[1px] bg-gray-900"></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-6 flex flex-col space-y-6 text-[11px] uppercase tracking-[0.3em] text-gray-500 font-medium">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <div className="flex flex-col space-y-3">
            <span className="hover:text-gray-900 transition-colors">Products</span>

            <Link href="/products/curtains" className="pl-4 hover:text-gray-900 transition-colors tracking-[0.2em]">
              Curtains
            </Link>
            <Link href="/products/blinds" className="pl-4 hover:text-gray-900 transition-colors tracking-[0.2em]">
              Shutters
            </Link>
            <Link href="/products/sheers" className="pl-4 hover:text-gray-900 transition-colors tracking-[0.2em]">
              Blinds
            </Link>
            <Link href="/products/sheers" className="pl-4 hover:text-gray-900 transition-colors tracking-[0.2em]">
              Zip Screens
            </Link>
            <Link href="/products/sheers" className="pl-4 hover:text-gray-900 transition-colors tracking-[0.2em]">
              Automation
            </Link>
          </div>
          <Link href="/products" className="hover:text-gray-900 transition-colors">Collection</Link>
          <Link href="/contact" className="text-gray-900 font-medium underline underline-offset-4 decoration-1">Enquiry</Link>
        </div>
      )}
    </nav>
  );
}