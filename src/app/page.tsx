export default function DesignB() {
  return (
    <section className="bg-[#FAF9F6] py-20 px-6 md:px-12 rounded-[2.5rem] m-4 md:m-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A3F35] mb-6 leading-tight">
            Bring Warmth to <br />Every Room
          </h1>
          <p className="text-[#7A6F65] text-lg mb-8 leading-relaxed">
            Create your perfect retreat with soft textures and beautiful drapes. 
            Locally made in Melbourne, designed for your family’s comfort.
          </p>
          <button className="bg-[#8B735B] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#6F5C49] transition-all shadow-md hover:shadow-xl">
            Book a Free Measure & Quote
          </button>
        </div>
        <div className="order-1 md:order-2 relative h-[450px] rounded-[2rem] overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070" 
            alt="Cozy Melbourne Living Room" 
            className="object-cover w-full h-full" 
          />
        </div>
      </div>
    </section>
  )
}