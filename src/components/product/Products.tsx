import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'

interface Product {
  id: string
  name: string
  tagline: string
  price: string
  range: string
  acceleration: string
  topSpeed: string
  image: string
  gradient: string
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
    image: '/images/CD_EV15533.jpg',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'city-pro',
    name: 'City Pro',
    tagline: 'Premium Performance',
    price: '₹99,999',
    range: '120 km',
    acceleration: '3.8s',
    topSpeed: '65 km/h',
    image: '/images/CD_EV15750.jpg',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'velocity-x',
    name: 'Velocity X',
    tagline: 'Ultimate Power',
    price: '₹1,29,999',
    range: '150 km',
    acceleration: '3.2s',
    topSpeed: '75 km/h',
    image: '/images/CD_EV15868.jpg',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
]

interface ProductCardProps {
  product: Product
  index: number
  isActive: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}

const ProductCard = ({ product, index, isActive, onHoverStart, onHoverEnd }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    onHoverEnd()
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 1, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHoverStart}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-full">
          {/* Glow Effect */}
          <motion.div
            className={`absolute -inset-1 bg-gradient-to-br ${product.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            animate={{
              scale: isActive ? [1, 1.05, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="relative bg-zinc-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800/50 group-hover:border-zinc-700/50 transition-colors duration-500">
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950">
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-10`} />
              
              {/* Image */}
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                loading="lazy"
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: isActive ? '100%' : '-100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="absolute top-6 right-6 z-20"
              >
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <span className="text-xs font-light tracking-widest uppercase text-white">
                    New 2024
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Product Info */}
            <div className="p-8 space-y-6">
              {/* Name & Tagline */}
              <div>
                <motion.h3 
                  className="font-light text-3xl tracking-tight mb-2 text-white group-hover:text-white/90 transition-colors"
                  animate={{
                    x: isActive ? 4 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {product.name}
                </motion.h3>
                <p className="text-zinc-500 text-sm tracking-wide uppercase">
                  {product.tagline}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-zinc-800/80">
                {[
                  { 
                    label: 'Range', 
                    value: product.range, 
                    icon: (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    )
                  },
                  { 
                    label: '0-40', 
                    value: product.acceleration, 
                    icon: (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      </svg>
                    )
                  },
                  { 
                    label: 'Top', 
                    value: product.topSpeed, 
                    icon: (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
                      </svg>
                    )
                  },
                ].map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                  >
                    <div className="text-zinc-600 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="opacity-60">{spec.icon}</span>
                      <span>{spec.label}</span>
                    </div>
                    <motion.div 
                      className="font-light text-xl text-white"
                      animate={{
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {spec.value}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Price & Arrow */}
              <div className="flex items-end justify-between pt-2">
                <div>
                  <div className="text-zinc-600 text-xs uppercase tracking-wider mb-2">
                    Starting From
                  </div>
                  <motion.div 
                    className="font-light text-3xl text-white"
                    animate={{
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.price}
                  </motion.div>
                  <div className="text-zinc-600 text-xs mt-1">
                    *Ex-showroom price
                  </div>
                </div>
                <motion.div
                  animate={{
                    x: isActive ? 10 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="pb-2"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/10 group-hover:border-white/20 flex items-center justify-center transition-all duration-500">
                    <svg 
                      className="w-5 h-5 stroke-current text-white" 
                      fill="none" 
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 pt-4"
              >
                <button className="flex-1 px-4 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors duration-300">
                  Test Drive
                </button>
                <button className="flex-1 px-4 py-3 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors duration-300">
                  Details
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="products" className="relative py-32 bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative container-custom">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 border border-zinc-800 rounded-full"
          >
            <span className="text-xs tracking-widest uppercase text-zinc-500">
              Electric Revolution
            </span>
          </motion.div>
          
          <h2 className="font-light text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
            Our Collection
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-zinc-500 text-lg max-w-2xl mx-auto mb-8"
          >
            Experience the future of mobility with our range of premium electric vehicles
          </motion.p>
          
          <div className="flex items-center justify-center gap-4">
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-24">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isActive={activeIndex === index}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
            />
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center space-y-12"
        >
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto py-8 border-y border-zinc-800/50">
            {[
              { value: '10,000+', label: 'Happy Customers' },
              { value: '50+', label: 'Cities' },
              { value: '99.9%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-light mb-2">{stat.value}</div>
                <div className="text-zinc-600 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/configurator"
              className="group relative inline-block"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden"
              >
                <div className="px-12 py-5 bg-white text-black font-medium rounded-full relative z-10 flex items-center gap-3 shadow-2xl shadow-white/20">
                  <span className="tracking-wider uppercase text-sm">
                    Configure Your Ride
                  </span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </motion.svg>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-200 rounded-full"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            <Link
              to="/contact"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="px-12 py-5 border border-white/20 hover:border-white/40 rounded-full transition-all duration-500 flex items-center gap-3">
                  <span className="font-light text-sm tracking-widest uppercase">
                    Book Test Drive
                  </span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-zinc-600 text-sm"
          >
            Free home test drive available in select cities • 0% financing options • 3-year warranty
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductShowcase
