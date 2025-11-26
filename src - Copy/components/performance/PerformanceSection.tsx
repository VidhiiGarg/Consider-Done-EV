import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface PerformanceFeature {
  title: string
  description: string
  icon: string
  stats: string
  detail: string
}

const features: PerformanceFeature[] = [
  {
    title: 'Extended Range',
    description: 'Go further with our advanced battery technology and intelligent energy management system.',
    icon: '🔋',
    stats: '400 km',
    detail: 'Real-world tested range',
  },
  {
    title: 'Rapid Charging',
    description: 'Get back on the road faster with ultra-fast charging capabilities at any compatible station.',
    icon: '⚡',
    stats: '15 min',
    detail: '10-80% charge time',
  },
  {
    title: 'Smart Battery',
    description: 'AI-powered battery management ensures optimal performance and longevity in all conditions.',
    icon: '🧠',
    stats: '10 years',
    detail: 'Battery warranty',
  },
  {
    title: 'Dual Motor AWD',
    description: 'Experience unparalleled traction and control with our advanced all-wheel drive system.',
    icon: '⚙️',
    stats: '450 HP',
    detail: 'Combined power output',
  },
]

const PerformanceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
            Performance
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Power Meets <span className="text-accent">Efficiency</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the perfect balance of raw power and intelligent energy management.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-500 h-full"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-6xl flex-shrink-0"
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    
                    {/* Stats */}
                    <div className="flex items-baseline space-x-2 bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{feature.stats}</span>
                      <span className="text-gray-500 text-sm">{feature.detail}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Performance Visualization */}
        <motion.div
          style={{ y, opacity }}
          className="relative"
        >
          <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-3xl p-12 overflow-hidden shadow-xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Stats */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-3xl font-bold mb-4 text-gray-900">
                    Engineering Excellence
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every component is optimized for maximum efficiency and performance. 
                    From the battery cells to the motor controller, precision engineering 
                    delivers an unmatched driving experience.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">98%</div>
                    <div className="text-gray-500 text-sm">Energy Efficiency</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">99.9%</div>
                    <div className="text-gray-500 text-sm">Reliability Rating</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5★</div>
                    <div className="text-gray-500 text-sm">Safety Rating</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Zero</div>
                    <div className="text-gray-500 text-sm">Emissions</div>
                  </div>
                </div>
              </div>

              {/* Right: Visual representation */}
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center border border-primary/30"
                >
                  <div className="text-center">
                    <div className="text-8xl mb-4">⚡</div>
                    <div className="font-display text-2xl font-bold text-gray-900">Peak Performance</div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-24 h-24 border-4 border-primary/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-accent/20 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PerformanceSection
