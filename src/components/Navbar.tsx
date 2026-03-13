import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-100/40 backdrop-blur-md sticky top-0 z-50 px-10 py-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo: Serif font for luxury feeling */}
        <Link href="/" className="text-2xl font-serif tracking-widest text-gray-900 uppercase">
          Chris <span className="italic font-light text-gray-400">Curtains</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-12 text-[11px] uppercase tracking-[0.3em] text-gray-500 font-medium">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-gray-900 transition-colors">Collection</Link>
          
          {/* Subtle CTA */}
          <Link href="/contact" className="pl-4">
            <span className="text-gray-900 font-medium border-b border-gray-900 pb-1">
              Enquiry
            </span>
          </Link>
        </div>

        {/* Mobile Menu (Minimal) */}
        <button className="md:hidden flex flex-col space-y-1">
          <span className="w-5 h-[1px] bg-gray-900"></span>
          <span className="w-5 h-[1px] bg-gray-900"></span>
        </button>
      </div>
    </nav>
  );
}