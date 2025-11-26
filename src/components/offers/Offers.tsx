import { motion } from 'framer-motion'

const OffersSection = () => {
  const offers = [
    {
      title: "FAME II Subsidy",
      amount: "₹15,000",
      description: "Government subsidy under FAME II scheme",
      badge: "Government"
    },
    {
      title: "State Subsidy",
      amount: "Up to ₹10,000",
      description: "Additional state government incentives",
      badge: "Regional"
    },
    {
      title: "Exchange Bonus",
      amount: "₹8,000",
      description: "Extra discount on old vehicle exchange",
      badge: "Exchange"
    },
    {
      title: "Corporate Discount",
      amount: "₹5,000",
      description: "Special pricing for bulk corporate orders",
      badge: "Corporate"
    }
  ]

  return (
    <section id="offers" className="py-24 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Offers & Subsidies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save more with government subsidies and special offers
          </p>
        </motion.div>

        {/* Total Savings Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12 shadow-2xl"
        >
          <div className="text-xl md:text-2xl mb-2 opacity-90">Total Savings Up To</div>
          <div className="text-6xl md:text-7xl font-black mb-4">₹38,000</div>
          <p className="text-lg opacity-90">Combine multiple offers for maximum benefits</p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  {offer.badge}
                </span>
              </div>
              <div className="text-3xl font-black text-primary mb-3">{offer.amount}</div>
              <p className="text-gray-600">{offer.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Make the Switch?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our team to learn more about available subsidies and offers in your state
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Check Eligibility
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OffersSection
