import { motion } from 'framer-motion'
import { Battery, Zap, Cpu, Settings } from 'lucide-react'

interface PerformanceFeature {
  title: string
  description: string
  icon: any
  stats: string
  detail: string
}

const features: PerformanceFeature[] = [
  {
    title: 'Limitless Range',
    description: 'Push boundaries with cutting-edge lithium-ion technology and predictive energy optimization that adapts to your driving style, terrain, and conditions in real-time.',
    icon: Battery,
    stats: '400+ km',
    detail: 'Single charge capability',
  },
  {
    title: 'Lightning Fast Charging',
    description: 'Revolutionary ultra-rapid charging infrastructure compatibility ensures minimal downtime. Get back to what matters most—the journey ahead.',
    icon: Zap,
    stats: '15 min',
    detail: 'For 80% charge capacity',
  },
  {
    title: 'Intelligent Battery System',
    description: 'Neural network-powered battery management with thermal optimization and predictive maintenance algorithms ensures peak performance across every climate and condition.',
    icon: Cpu,
    stats: '10 years',
    detail: 'Comprehensive warranty',
  },
  {
    title: 'Precision All-Wheel Drive',
    description: 'Aerospace-grade dual-motor architecture delivers instantaneous torque vectoring, supreme handling dynamics, and confidence-inspiring grip in any weather.',
    icon: Settings,
    stats: '450 HP',
    detail: 'Peak power delivery',
  },
]

const PerformanceSection = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 lg:pl-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="font-light text-5xl md:text-7xl tracking-tight mb-6">
            Performance
          </h2>
          <div className="w-16 h-px bg-white/20 mx-auto" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-32">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-8"
                >
                  <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-500">
                    <IconComponent className="w-8 h-8 text-white/60 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-light text-3xl tracking-tight mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 font-light text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-baseline space-x-3">
                      <div className="font-light text-5xl text-white">{feature.stats}</div>
                      <div className="text-white/40 text-sm uppercase tracking-wider">{feature.detail}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Performance Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/10 pt-24"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Heading */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-light text-5xl md:text-6xl tracking-tight mb-8 leading-tight"
              >
                Built to<br />Perfection
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-white/50 font-light text-lg leading-relaxed max-w-md"
              >
                Every component meticulously engineered and rigorously tested to deliver exceptional performance across all conditions.
              </motion.p>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              {[
                { label: 'Efficiency', value: '98%', delay: 0.4 },
                { label: 'Reliability', value: '99.9%', delay: 0.5 },
                { label: 'Safety', value: '5★', delay: 0.6 },
                { label: 'Emissions', value: 'Zero', delay: 0.7 },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay, duration: 0.6 }}
                  className="space-y-3"
                >
                  <div className="text-white/40 text-xs uppercase tracking-widest font-light">
                    {stat.label}
                  </div>
                  <div className="font-light text-6xl tracking-tight text-white">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PerformanceSection
