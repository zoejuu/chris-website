import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800 px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo: Bold & Professional */}
        <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic">
          Chris <span className="text-blue-600">Curtains</span>
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-12 text-sm font-bold uppercase tracking-widest">
          <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-blue-500 transition-colors">Curtains</Link>
          <Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
          
          {/* CTA Button: High Contrast */}
          <Link href="/contact">
            <button className="bg-white text-black px-6 py-2 hover:bg-blue-600 hover:text-white transition-all duration-300">
              Get an Estimate
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </div>
    </nav>
  );
}