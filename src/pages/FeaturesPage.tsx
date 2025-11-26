import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const FeaturesPage = () => {
  const features = [
    {
      category: 'Performance',
      icon: '⚡',
      items: [
        {
          title: 'Instant Torque',
          description: 'Experience lightning-fast acceleration with instant power delivery from 0 RPM.',
          metric: '0-60 in 3.5s',
        },
        {
          title: 'Extended Range',
          description: 'Go further with our advanced battery technology and efficient power management.',
          metric: 'Up to 150km',
        },
        {
          title: 'Fast Charging',
          description: 'Get back on the road quickly with rapid charging capabilities.',
          metric: '80% in 1hr',
        },
      ],
    },
    {
      category: 'Safety',
      icon: '🛡️',
      items: [
        {
          title: 'Advanced ABS',
          description: 'Anti-lock Braking System ensures maximum control in emergency situations.',
          metric: 'Emergency Ready',
        },
        {
          title: 'Smart Sensors',
          description: 'Multiple sensors monitor your surroundings for enhanced safety.',
          metric: '360° Detection',
        },
        {
          title: 'LED Lighting',
          description: 'Bright LED headlights and taillights for maximum visibility day and night.',
          metric: 'Ultra Bright',
        },
      ],
    },
    {
      category: 'Technology',
      icon: '📱',
      items: [
        {
          title: 'Smart Connectivity',
          description: 'Connect your smartphone for navigation, music, and vehicle diagnostics.',
          metric: 'App Connected',
        },
        {
          title: 'Digital Dashboard',
          description: 'Full-color TFT display shows all vital information at a glance.',
          metric: '5" HD Display',
        },
        {
          title: 'GPS Tracking',
          description: 'Real-time location tracking and anti-theft features for peace of mind.',
          metric: 'Always Located',
        },
      ],
    },
    {
      category: 'Comfort',
      icon: '✨',
      items: [
        {
          title: 'Ergonomic Design',
          description: 'Carefully crafted seating position for maximum comfort on long rides.',
          metric: 'All-Day Comfort',
        },
        {
          title: 'Storage Space',
          description: 'Generous under-seat storage and optional side panniers for your belongings.',
          metric: '28L Capacity',
        },
        {
          title: 'Silent Operation',
          description: 'Virtually silent motor operation for a peaceful riding experience.',
          metric: '<50dB',
        },
      ],
    },
    {
      category: 'Sustainability',
      icon: '🌱',
      items: [
        {
          title: 'Zero Emissions',
          description: 'Completely emission-free operation helps reduce your carbon footprint.',
          metric: '0g CO₂',
        },
        {
          title: 'Recyclable Materials',
          description: 'Built with sustainable and recyclable materials wherever possible.',
          metric: '85% Recyclable',
        },
        {
          title: 'Energy Efficient',
          description: 'Advanced regenerative braking recovers energy during deceleration.',
          metric: 'Regen Braking',
        },
      ],
    },
    {
      category: 'Convenience',
      icon: '🎯',
      items: [
        {
          title: 'Home Charging',
          description: 'Charge overnight using standard household power outlets.',
          metric: 'Plug & Play',
        },
        {
          title: 'Low Maintenance',
          description: 'Fewer moving parts mean less maintenance and lower running costs.',
          metric: 'Service-Free',
        },
        {
          title: 'Keyless Entry',
          description: 'Smart key system for hassle-free access and ignition.',
          metric: 'Touch & Go',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 lg:ml-24">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                Advanced Features
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Innovation Meets <span className="gradient-text">Performance</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Discover the cutting-edge features that make our electric vehicles stand out. 
                From advanced safety systems to smart connectivity, every detail is designed for your ultimate riding experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        {features.map((category, categoryIndex) => (
          <section 
            key={category.category} 
            className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-display text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-semibold whitespace-nowrap">
                        {item.metric}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary/90 to-accent">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Experience It Yourself
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                The best way to understand our features is to test ride one of our vehicles. 
                Book your test ride today and discover the future of mobility.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 shadow-lg transition-all">
                  Book Test Ride
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all">
                  View Models
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

export default FeaturesPage
