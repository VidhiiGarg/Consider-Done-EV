import { motion } from 'framer-motion'
import { Leaf, DollarSign, Zap, Trees } from 'lucide-react'

const SustainabilitySection = () => {
  const impacts = [
    {
      value: "0kg",
      label: "CO₂ Emissions",
      icon: Leaf
    },
    {
      value: "80%",
      label: "Cost Savings",
      icon: DollarSign
    },
    {
      value: "100%",
      label: "Electric Power",
      icon: Zap
    },
    {
      value: "5000+",
      label: "Trees Equivalent",
      icon: Trees
    }
  ]

  const commitments = [
    "Recyclable battery technology with 95% material recovery",
    "Solar-powered charging stations across India",
    "Carbon-neutral manufacturing process",
    "Sustainable supply chain partnerships"
  ]

  return (
    <section id="why-electric" className="py-32 bg-white relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 lg:pl-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="font-light text-5xl md:text-7xl tracking-tight mb-6 text-gray-900">
            Sustainability
          </h2>
          <div className="w-16 h-px bg-black/20 mx-auto" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-32">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <motion.div 
                  className="mb-8 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors duration-500">
                    <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors duration-500" strokeWidth={1} />
                  </div>
                </motion.div>
                <div className="font-light text-5xl md:text-6xl mb-3 text-gray-900 tracking-tight">
                  {impact.value}
                </div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-light">{impact.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Environmental Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="border-t border-gray-200 pt-24"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="font-light text-4xl md:text-5xl tracking-tight text-gray-900 mb-6 leading-tight">
                Our Environmental<br />Commitment
              </h3>
            </div>
            <div className="space-y-8">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-1 h-1 bg-gray-400 flex-shrink-0 mt-3 group-hover:bg-black transition-colors duration-300" />
                  <p className="text-gray-600 font-light text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {commitment}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SustainabilitySection
