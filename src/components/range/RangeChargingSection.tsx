import { motion } from 'framer-motion'

const RangeChargingSection = () => {
  const chargingOptions = [
    {
      type: "Home Charging",
      time: "4-6 hours",
      icon: "🏠",
      description: "Charge overnight with standard 5A socket"
    },
    {
      type: "Fast Charging",
      time: "1-2 hours",
      icon: "⚡",
      description: "Quick charge at our charging stations"
    },
    {
      type: "Battery Swap",
      time: "2 minutes",
      icon: "🔋",
      description: "Instant battery replacement at swap stations"
    }
  ]

  return (
    <section id="range-charging" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Range & Charging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Go the distance with confidence and charge with ease
          </p>
        </motion.div>

        {/* Range Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl text-center"
          >
            <div className="text-6xl mb-4">📍</div>
            <div className="text-4xl font-bold text-primary mb-2">120 km</div>
            <div className="text-gray-600 font-medium">Max Range Per Charge</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl text-center"
          >
            <div className="text-6xl mb-4">⚡</div>
            <div className="text-4xl font-bold text-accent mb-2">₹0.5/km</div>
            <div className="text-gray-600 font-medium">Running Cost</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl text-center"
          >
            <div className="text-6xl mb-4">🔋</div>
            <div className="text-4xl font-bold text-green-600 mb-2">3 Years</div>
            <div className="text-gray-600 font-medium">Battery Warranty</div>
          </motion.div>
        </div>

        {/* Charging Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {chargingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="text-6xl mb-4">{option.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.type}</h3>
              <div className="text-3xl font-bold text-primary mb-3">{option.time}</div>
              <p className="text-gray-600">{option.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Charging Network */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Expanding Charging Network</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <div className="font-bold text-xl">500+</div>
                    <div className="text-sm opacity-90">Charging Stations</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    🏙️
                  </div>
                  <div>
                    <div className="font-bold text-xl">50+</div>
                    <div className="text-sm opacity-90">Cities Covered</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    🔄
                  </div>
                  <div>
                    <div className="font-bold text-xl">24/7</div>
                    <div className="text-sm opacity-90">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h4 className="text-2xl font-bold mb-3">Find Charging Stations</h4>
              <p className="mb-6 opacity-90">Locate the nearest charging point with our mobile app</p>
              <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
                Download App
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RangeChargingSection
