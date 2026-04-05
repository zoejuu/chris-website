"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SubNavbar() {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Curtains', href: '/products/curtains' },
    { name: 'Shutters', href: '/products/shutters' },
    { name: 'Blinds', href: '/products/blinds' },
    { name: 'Zip Screens', href: '/products/zipscreens' },
    { name: 'Automation', href: '/products/automation' },
  ];

  return (
    <nav className={`w-full z-40 transition-all duration-300 border-b border-slate-100 ${
      isSticky 
        ? 'fixed top-0 left-0 bg-white/90 backdrop-blur-md shadow-sm py-4' 
        : 'relative bg-white py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`group relative text-[12px] font-bold uppercase tracking-[0.2em] transition-colors ${
                    isActive ? 'text-slate-950' : 'text-slate-500 hover:text-slate-950'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-orange-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}