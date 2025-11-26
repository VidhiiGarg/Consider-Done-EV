import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const AboutPage = () => {
  const stats = [
    { value: "10,000+", label: "Happy Customers" },
    { value: "50+", label: "Cities" },
    { value: "500+", label: "Charging Stations" },
    { value: "3 Years", label: "Warranty" }
  ]

  const values = [
    {
      icon: "🌱",
      title: "Sustainability",
      description: "Committed to reducing carbon footprint and promoting green mobility"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Pioneering advanced EV technology for the Indian market"
    },
    {
      icon: "🤝",
      title: "Customer First",
      description: "Dedicated to providing exceptional service and support"
    },
    {
      icon: "💎",
      title: "Quality",
      description: "Uncompromising standards in manufacturing and design"
    }
  ]

  const stores = [
    {
      city: "Mumbai",
      address: "Andheri West, Mumbai - 400058",
      phone: "+91 98765 43210"
    },
    {
      city: "Delhi",
      address: "Connaught Place, New Delhi - 110001",
      phone: "+91 98765 43211"
    },
    {
      city: "Bangalore",
      address: "Koramangala, Bangalore - 560034",
      phone: "+91 98765 43212"
    },
    {
      city: "Pune",
      address: "Hinjewadi, Pune - 411057",
      phone: "+91 98765 43213"
    },
    {
      city: "Hyderabad",
      address: "Banjara Hills, Hyderabad - 500034",
      phone: "+91 98765 43214"
    },
    {
      city: "Chennai",
      address: "T. Nagar, Chennai - 600017",
      phone: "+91 98765 43215"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20 lg:ml-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Driving India's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Electric Future</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Consider Done EV, we're on a mission to revolutionize urban mobility with sustainable, 
                affordable, and high-performance electric vehicles designed for Indian roads.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2020, Consider Done EV was born from a vision to make electric mobility 
                    accessible to every Indian. We recognized the urgent need for sustainable transportation 
                    solutions that don't compromise on performance or affordability.
                  </p>
                  <p>
                    Starting with a small team of passionate engineers and designers, we've grown into 
                    one of India's most trusted EV brands, serving thousands of customers across major cities.
                  </p>
                  <p>
                    Our electric scooters are designed specifically for Indian conditions - from the 
                    bustling streets of Mumbai to the tech corridors of Bangalore, from the heat of 
                    summer to monsoon rains.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary to-accent rounded-3xl h-96 flex items-center justify-center text-white text-8xl"
              >
                ⚡
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">What drives us forward</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stores */}
        <section className="py-24 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Stores in India</h2>
              <p className="text-xl text-gray-600">Visit us at these locations</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stores.map((store, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{store.city}</h3>
                      <p className="text-gray-600 text-sm mb-3">{store.address}</p>
                      <a href={`tel:${store.phone}`} className="text-primary font-semibold text-sm hover:underline">
                        {store.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Join the Electric Revolution</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Be part of India's sustainable mobility future. Experience our electric scooters today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Book Test Ride
                </button>
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage
