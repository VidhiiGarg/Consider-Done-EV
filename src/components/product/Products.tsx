import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  tagline: string
  price: string
  range: string
  acceleration: string
  topSpeed: string
  image: string
}

const products: Product[] = [
  {
    id: 'eco-rider',
    name: 'Eco Rider',
    tagline: 'Urban Efficiency',
    price: '₹79,999',
    range: '80 km',
    acceleration: '4.5s',
    topSpeed: '55 km/h',
    image: '/images/eco-rider.jpg',
  },
  {
    id: 'city-pro',
    name: 'City Pro',
    tagline: 'Premium Performance',
    price: '₹99,999',
    range: '120 km',
    acceleration: '3.8s',
    topSpeed: '65 km/h',
    image: '/images/city-pro.jpg',
  },
  {
    id: 'velocity-x',
    name: 'Velocity X',
    tagline: 'Ultimate Power',
    price: '₹1,29,999',
    range: '150 km',
    acceleration: '3.2s',
    topSpeed: '75 km/h',
    image: '/images/velocity-x.jpg',
  },
]

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="products" className="relative py-32 bg-black text-white overflow-hidden lg:pl-24">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-16">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="font-light text-5xl md:text-7xl tracking-tight mb-6">
            Our Collection
          </h2>
          <div className="w-16 h-px bg-white/20 mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="relative">
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] mb-8 bg-zinc-900 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        scale: activeIndex === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="text-9xl opacity-10">🏍️</div>
                    </motion.div>
                    
                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeIndex === index ? 0.1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-white"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-6">
                    {/* Name & Tagline */}
                    <div>
                      <h3 className="font-light text-3xl tracking-tight mb-2">
                        {product.name}
                      </h3>
                      <p className="text-zinc-500 text-sm tracking-wide uppercase">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Specs - Minimal */}
                    <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-zinc-800">
                      <div>
                        <div className="text-zinc-600 text-xs uppercase tracking-wider mb-1">
                          Range
                        </div>
                        <div className="font-light text-xl">
                          {product.range}
                        </div>
                      </div>
                      <div>
                        <div className="text-zinc-600 text-xs uppercase tracking-wider mb-1">
                          0-40
                        </div>
                        <div className="font-light text-xl">
                          {product.acceleration}
                        </div>
                      </div>
                      <div>
                        <div className="text-zinc-600 text-xs uppercase tracking-wider mb-1">
                          Top
                        </div>
                        <div className="font-light text-xl">
                          {product.topSpeed}
                        </div>
                      </div>
                    </div>

                    {/* Price & Arrow */}
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-zinc-600 text-xs uppercase tracking-wider mb-1">
                          From
                        </div>
                        <div className="font-light text-3xl">
                          {product.price}
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          x: activeIndex === index ? 8 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="pb-2"
                      >
                        <svg 
                          className="w-8 h-8 stroke-current" 
                          fill="none" 
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                        >
                          <path 
                            strokeLinecap="square" 
                            strokeLinejoin="miter" 
                            d="M5 12h14m-7-7l7 7-7 7" 
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <Link
            to="/configurator"
            className="inline-block group"
          >
            <div className="relative">
              <div className="px-12 py-5 border border-white/20 hover:border-white/40 transition-colors duration-500">
                <span className="font-light text-sm tracking-widest uppercase">
                  Configure Your Model
                </span>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-white origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductShowcase
