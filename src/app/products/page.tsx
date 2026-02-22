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
    <main className="bg-[#FAF9F6] min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#4A3F35] mb-4 font-serif">Our Collection</h1>
          <p className="text-[#7A6F65] max-w-lg mx-auto">
            Discover our range of handcrafted curtains and blinds, tailored to bring elegance to your Melbourne home.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product: any) => (
            <div key={product._id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              {/* Image Container */}
              <div className="relative h-[350px] overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[#8B735B] font-bold text-sm">
                  AUD ${product.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#4A3F35] mb-3">{product.title}</h3>
                <p className="text-[#7A6F65] line-clamp-2 mb-6 font-light leading-relaxed">
                  {product.description}
                </p>
                <Link href={`/products/${product._id}`}>
                  <button className="w-full border border-[#8B735B] text-[#8B735B] py-3 rounded-xl font-medium hover:bg-[#8B735B] hover:text-white transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}