import { client } from '@/sanity/lib/client';
import Link from 'next/link';

async function getProducts() {
  const query = `*[_type == "product"] {
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    price,
    description
  }`;
  return await client.fetch(query);
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="bg-slate-950 min-h-screen py-24 text-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-l-4 border-blue-600 pl-8">
          <div>
            <h1 className="text-6xl font-black uppercase tracking-tighter">Inventory</h1>
            <p className="text-slate-400 mt-4 max-w-md uppercase text-xs tracking-[0.2em]">
              High-performance window coverings for modern architecture.
            </p>
          </div>
          <div className="text-slate-500 text-sm font-mono">
            TOTAL ITEMS: {products.length}
          </div>
        </div>

        {/* Product Grid: Structured & Bold */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-slate-800 border border-slate-800">
          {products.map((product: any) => (
            <div key={product._id} className="group relative bg-slate-950 overflow-hidden aspect-[3/4]">
              {/* Image: Grayscale by default, Color on hover */}
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">In Stock</p>
                <h3 className="text-2xl font-bold uppercase mb-2">{product.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-1 font-light italic">
                  {product.description}
                </p>
                <Link href={`/products/${product._id}`} className="inline-block">
                  <span className="text-xs font-black uppercase border-b-2 border-white pb-1 group-hover:border-blue-600 transition-colors">
                    View Specs
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}