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
    tagline: 'Perfect for daily commutes',
    price: '₹79,999',
    range: '80 km',
    acceleration: '0-40 in 4.5s',
    topSpeed: '55 km/h',
    image: '/images/eco-rider.jpg',
  },
  {
    id: 'city-pro',
    name: 'City Pro',
    tagline: 'Premium urban mobility',
    price: '₹99,999',
    range: '120 km',
    acceleration: '0-40 in 3.8s',
    topSpeed: '65 km/h',
    image: '/images/city-pro.jpg',
  },
  {
    id: 'velocity-x',
    name: 'Velocity X',
    tagline: 'Ultimate performance',
    price: '₹1,29,999',
    range: '150 km',
    acceleration: '0-40 in 3.2s',
    topSpeed: '75 km/h',
    image: '/images/velocity-x.jpg',
  },
]

const ProductShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="models" className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
            Our Models
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Choose Your <span className="text-accent">Electric Journey</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Three exceptional models, each engineered for perfection. 
            Find the one that matches your lifestyle.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Link to={`/product/${product.id}`}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative bg-white backdrop-blur-sm border border-gray-200 rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    {/* Placeholder - replace with actual OptimizedImg component */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <div className="text-6xl mb-2">🛵</div>
                        <p className="text-sm text-gray-600">{product.name}</p>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{product.tagline}</p>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Range</div>
                        <div className="text-gray-900 font-semibold">{product.range}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">0-40</div>
                        <div className="text-gray-900 font-semibold text-sm">{product.acceleration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Top Speed</div>
                        <div className="text-gray-900 font-semibold text-sm">{product.topSpeed}</div>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <div className="text-sm text-gray-500">Starting from</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{product.price}</div>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-primary group-hover:text-accent transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 bg-primary/5 pointer-events-none"
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Compare CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/configurator"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all group"
          >
            <span className="font-semibold">Compare Models & Configure</span>
            <motion.span
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductShowcase
