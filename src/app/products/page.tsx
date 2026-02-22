import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image' // 이미지 URL 생성 도구

// 1. 데이터를 가져오는 함수 (GROQ 쿼리)
async function getProducts() {
  const query = `*[_type == "product"] {
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    price,
    description
  }`
  const data = await client.fetch(query)
  return data
}

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="max-w-7xl mx-auto p-10">
      <h1 className="uppercase tracking-[0.1em] mb-4 block font-medium text-center">Our Curtain Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product: any) => (
          <div key={product._id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            {product.imageUrl && (
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-500 mt-2 line-clamp-2">{product.description}</p>
              <p className="text-blue-600 font-bold mt-4">AUD ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}