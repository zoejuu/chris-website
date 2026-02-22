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
    <main className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-10 py-10">
        {/* Page Header */}
        <header className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-6 block">Curated Series</span>
          <h1 className="text-5xl font-serif font-light text-gray-900 italic">The Collection</h1>
          <div className="w-12 h-[1px] bg-gray-200 mx-auto mt-10"></div>
        </header>

        {/* Product Grid: Spacious and Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {products.map((product: any, index: number) => (
            <div key={product._id} className={`group`}>
              <Link href={`/products/${product._id}`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 mb-8">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  />
                </div>
                <div className="flex justify-between items-start border-b border-gray-100 pb-6">
                  <div>
                    <h3 className="text-lg font-light tracking-wider text-gray-900 uppercase mb-2">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-400 tracking-widest uppercase">
                      Bespoke Tailoring
                    </p>
                  </div>
                  <span className="text-sm font-light text-gray-500">
                    From ${product.price}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}