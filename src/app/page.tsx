"use client"

export default function DesignC() {
  return (
    <section className="bg-slate-950 py-24 px-10 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-slate-800 pb-12">
          <div>
            <h1 className="text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
              Premium <br />Window <br />Solutions
            </h1>
            <div className="flex gap-3 mt-6">
              <span className="bg-blue-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Melbourne Made</span>
              <span className="bg-slate-800 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">10-Year Warranty</span>
            </div>
          </div>
          <div className="text-right mt-10 md:mt-0 max-w-sm">
            <p className="text-slate-400 text-lg mb-6">
              With over 15 years of experience, we provide precision-engineered blinds and curtains for modern living.
            </p>
            <button className="bg-white text-black px-8 py-3 font-bold uppercase text-sm hover:bg-blue-600 hover:text-white transition-colors">
              Get an Instant Quote
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-[4/5] bg-slate-900 overflow-hidden group">
              <img 
                src={`https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=500&sig=${i}`} 
                alt="Recent Installation" 
                className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}