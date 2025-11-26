import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 3000)
  }

  const footerLinks = {
    Models: [
      { name: 'Urban Rider', path: '/product/urban-rider' },
      { name: 'City Cruiser', path: '/product/city-cruiser' },
      { name: 'Highway Master', path: '/product/highway-master' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Press', path: '/press' },
    ],
    Support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Dealers', path: '/dealers' },
      { name: 'Service Centers', path: '/service' },
      { name: 'FAQs', path: '/faq' },
    ],
    Legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
  ]

  return (
    <footer className="bg-primary border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Stay Updated
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 mb-8"
          >
            Get the latest news about our electric vehicles and innovations
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors backdrop-blur-md"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all shadow-lg"
            >
              {subscribed ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <span className="font-display font-bold text-xl text-white">CONSIDER DONE EV</span>
            </div>
            <p className="text-white/70 mb-6 text-sm">
              Leading the future of electric mobility with premium, sustainable vehicles.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-lg mb-4 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Consider Done EV. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/50">
              <span>Made with ⚡ for a sustainable future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
