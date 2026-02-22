import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b">
      <Link href="/" className="uppercase tracking-[0.05em] text-2xl font-medium text-gray-800">
        Chris's Curtain
      </Link>
      <div className="space-x-8 font-medium">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/products" className="hover:text-blue-600">Curtains</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  )
}