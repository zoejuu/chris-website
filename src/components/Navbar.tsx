import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#FAF9F6] px-6 py-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#4A3F35] tracking-tight">
          Chris's <span className="font-light italic text-[#8B735B]">Curtains</span>
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-10 text-[#7A6F65] font-medium">
          <Link href="/" className="hover:text-[#4A3F35] transition-colors">Home</Link>
          <Link href="/products" className="hover:text-[#4A3F35] transition-colors">Curtains</Link>
          <Link href="/contact" className="hover:text-[#4A3F35] transition-colors">Contact</Link>
          
          {/* CTA Button */}
          <Link href="/contact">
            <button className="bg-[#8B735B] text-white px-6 py-2.5 rounded-full text-sm hover:bg-[#6F5C49] transition-all shadow-sm">
              Free Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon (Placeholder) */}
        <div className="md:hidden text-[#4A3F35]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </nav>
  );
}