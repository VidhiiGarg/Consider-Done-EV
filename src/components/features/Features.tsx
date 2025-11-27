import { motion } from 'framer-motion'
import { Leaf, DollarSign, Shield, Smartphone, CreditCard, Volume2 } from 'lucide-react'

const USPFeatures = () => {
  const features = [
    {
      icon: Leaf,
      title: "Zero Carbon Footprint",
      description: "Drive with purpose. 100% emission-free technology that actively contributes to a sustainable future and cleaner air for generations to come"
    },
    {
      icon: DollarSign,
      title: "Exceptional Economics",
      description: "Intelligent savings meet superior performance. Reduce operational costs by up to 80% while enjoying premium features and unmatched efficiency"
    },
    {
      icon: Shield,
      title: "Uncompromised Safety",
      description: "Your security is our priority. Advanced safety systems, rigorous testing standards, and premium materials ensure peace of mind on every ride"
    },
    {
      icon: Smartphone,
      title: "Connected Intelligence",
      description: "Stay in control, anywhere. IoT-powered connectivity with intuitive mobile integration for real-time monitoring, diagnostics, and personalized experiences"
    },
    {
      icon: CreditCard,
      title: "Flexible Ownership",
      description: "Own your future today. Accessible financing solutions, attractive EMI plans, and government incentives make premium electric mobility within reach"
    },
    {
      icon: Volume2,
      title: "Whisper-Quiet Luxury",
      description: "Experience tranquility in motion. Ultra-quiet operation eliminates noise pollution while delivering a refined, premium riding experience"
    }
  ]

  return (
    <section id="features" className="py-32 bg-white relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 lg:pl-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="font-light text-5xl md:text-7xl tracking-tight mb-6 text-gray-900">
            Why Choose Electric
          </h2>
          <div className="w-16 h-px bg-black/20 mx-auto" />
        </motion.div>

        <div className="space-y-0">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="group py-12 border-b border-gray-200 last:border-b-0"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Icon */}
                  <div className="md:col-span-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors duration-500"
                    >
                      <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors duration-500" strokeWidth={1} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-11">
                    <h3 className="font-light text-3xl md:text-4xl mb-4 text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-light text-lg leading-relaxed max-w-3xl">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default USPFeatures
