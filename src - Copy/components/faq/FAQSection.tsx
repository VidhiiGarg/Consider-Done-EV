import { motion } from 'framer-motion'
import { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is the range of the electric scooter on a full charge?",
      answer: "Our electric scooters offer a range of up to 120 km on a single charge, depending on the model and riding conditions. The actual range may vary based on factors like riding style, terrain, payload, and weather conditions."
    },
    {
      question: "How long does it take to charge the battery?",
      answer: "Charging time varies by method: Standard home charging (5A socket) takes 4-6 hours, fast charging at our stations takes 1-2 hours, and battery swapping takes just 2 minutes for instant power."
    },
    {
      question: "What subsidies are available for purchasing an EV?",
      answer: "You can avail up to ₹15,000 under the FAME II scheme from the central government, plus additional state subsidies up to ₹10,000 depending on your location. We also offer exchange bonuses and corporate discounts."
    },
    {
      question: "What is the warranty on the battery?",
      answer: "We provide a comprehensive 3-year warranty on the battery covering manufacturing defects. The battery is designed to retain 70% capacity after 50,000 km or 3 years, whichever comes first."
    },
    {
      question: "How much can I save compared to a petrol scooter?",
      answer: "You can save up to 80% on fuel costs with our electric scooters. The running cost is approximately ₹0.50 per km compared to ₹2-3 per km for petrol scooters. Over 3 years, you can save over ₹80,000 in fuel costs alone."
    },
    {
      question: "Where can I charge my electric scooter?",
      answer: "You can charge at home using a regular 5A socket, at our 500+ fast charging stations across 50+ cities, or use battery swapping facilities available at select locations. Our mobile app helps you find the nearest charging point."
    },
    {
      question: "What is the top speed of the scooter?",
      answer: "Our scooters have a top speed of 60-75 km/h depending on the model, which is perfect for city commuting and complies with Indian traffic regulations."
    },
    {
      question: "Is maintenance expensive for electric scooters?",
      answer: "No, electric scooters have significantly lower maintenance costs compared to petrol vehicles. There's no engine oil, spark plugs, or complex transmission systems. Regular maintenance includes brake checks, tire rotation, and software updates."
    },
    {
      question: "Can I test ride before purchasing?",
      answer: "Absolutely! We offer free test rides at all our dealerships. You can book a test ride through our website, mobile app, or by visiting the nearest showroom."
    },
    {
      question: "What financing options are available?",
      answer: "We offer flexible EMI plans starting from 6 months up to 48 months with interest rates as low as 7% p.a. We've partnered with leading banks and NBFCs to provide hassle-free financing with minimal documentation."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers!
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="font-bold text-gray-900 text-lg pr-8">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our team is here to help you!</p>
          <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
