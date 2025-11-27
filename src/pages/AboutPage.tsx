import { motion } from 'framer-motion'
import { Users, Building2, Zap, Shield, Leaf, Rocket, Heart, Award, MapPin, Phone, ArrowRight } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Building2, value: "50+", label: "Cities" },
    { icon: Zap, value: "500+", label: "Charging Stations" },
    { icon: Shield, value: "3 Years", label: "Warranty" }
  ]

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to reducing carbon footprint and promoting green mobility"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Pioneering advanced EV technology for the Indian market"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Dedicated to providing exceptional service and support"
    },
    {
      icon: Award,
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
      
      <main className="lg:ml-24">
        {/* Hero Section */}
        <section className="py-32 bg-white relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
          
          <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-light text-5xl md:text-7xl tracking-tight mb-6 text-gray-900">
                Driving India's Electric Future
              </h1>
              <div className="w-16 h-px bg-black/20 mx-auto mb-8" />
              <p className="text-gray-600 font-light text-xl leading-relaxed">
                At Consider Done EV, we're on a mission to revolutionize urban mobility with sustainable, 
                affordable, and high-performance electric vehicles designed for Indian roads.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-32 bg-black relative lg:-ml-24 lg:pl-24">
          <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="text-center group"
                  >
                    <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center mb-6 mx-auto group-hover:border-zinc-600 transition-colors duration-500">
                      <IconComponent className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                    </div>
                    <div className="font-light text-4xl text-white mb-2 tracking-tight">{stat.value}</div>
                    <div className="text-zinc-400 font-light text-sm">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-32 bg-white relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
          
          <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-light text-4xl md:text-5xl tracking-tight text-gray-900 mb-8">Our Story</h2>
                <div className="space-y-6 text-gray-600 font-light leading-relaxed">
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
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-96 border border-gray-200 overflow-hidden group hover:border-gray-400 transition-colors duration-500"
              >
                <img 
                  src="/images/CD_EV15705.jpg" 
                  alt="Consider Done Electric Vehicle" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 bg-black relative lg:-ml-24 lg:pl-24">
          <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <h2 className="font-light text-4xl md:text-5xl tracking-tight text-white mb-6">Our Values</h2>
              <div className="w-16 h-px bg-white/20 mx-auto mb-8" />
              <p className="text-zinc-400 font-light text-lg">What drives us forward</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 border border-zinc-800 flex items-center justify-center mb-6 mx-auto group-hover:border-zinc-600 transition-colors duration-500">
                      <IconComponent className="w-8 h-8 text-zinc-600 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                    </div>
                    <h3 className="font-light text-2xl tracking-tight text-white mb-4">{value.title}</h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Company Stores */}
        <section className="py-32 bg-white relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
          
          <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <h2 className="font-light text-4xl md:text-5xl tracking-tight text-gray-900 mb-6">Our Stores in India</h2>
              <div className="w-16 h-px bg-black/20 mx-auto mb-8" />
              <p className="text-gray-600 font-light text-lg">Visit us at these locations</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stores.map((store, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="border border-gray-200 p-8 hover:border-gray-400 transition-colors duration-500 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-gray-400 transition-colors duration-500">
                      <MapPin className="w-6 h-6 text-gray-400 group-hover:text-gray-900 transition-colors duration-500" strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-light text-2xl tracking-tight text-gray-900 mb-3">{store.city}</h3>
                      <p className="text-gray-600 font-light text-sm mb-4 leading-relaxed">{store.address}</p>
                      <a href={`tel:${store.phone}`} className="inline-flex items-center space-x-2 text-gray-900 font-light text-sm group-hover:space-x-3 transition-all duration-300">
                        <Phone className="w-4 h-4" strokeWidth={1} />
                        <span>{store.phone}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-black relative lg:-ml-24 lg:pl-24">
          <div className="relative max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-light text-4xl md:text-5xl tracking-tight text-white mb-6">Join the Electric Revolution</h2>
              <div className="w-16 h-px bg-white/20 mx-auto mb-8" />
              <p className="text-zinc-400 font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Be part of India's sustainable mobility future. Experience our electric scooters today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/#products" className="group inline-flex items-center justify-center space-x-3 px-8 py-3 bg-white text-black hover:bg-zinc-200 transition-colors duration-300">
                  <span className="font-light">Book Test Ride</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1} />
                </a>
                <a href="/contact" className="group inline-flex items-center justify-center space-x-3 px-8 py-3 border border-zinc-800 text-white hover:border-zinc-600 transition-colors duration-300">
                  <span className="font-light">Contact Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1} />
                </a>
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
