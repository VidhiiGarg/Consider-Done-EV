import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import BookTestRideModal from '../components/booking/BookingModal'
import Button from '../components/ui/Button'

const ContactPage = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      detail: 'support@considerdone.ev',
      action: 'Send Email',
    },
    {
      icon: '📞',
      title: 'Call Us',
      detail: '+1 (800) 555-0100',
      action: 'Call Now',
    },
    {
      icon: '💬',
      title: 'Live Chat',
      detail: 'Available 24/7',
      action: 'Start Chat',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 lg:ml-24">
        {/* Header Section */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                Get in Touch
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                We're Here to <span className="gradient-text">Help</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Have questions about our vehicles? Need support? Our team is ready to assist you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="container-custom mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-6xl mb-4">{method.icon}</div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.detail}</p>
                <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                  {method.action} →
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg"
              >
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-2 text-center">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-center mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="sales">Sales</option>
                          <option value="service">Service & Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="press">Press & Media</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <p className="text-sm text-gray-500">* Required fields</p>
                      <Button type="submit" size="lg">
                        Send Message
                      </Button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quick Answers
              </h2>
              <p className="text-gray-600 mb-8">
                Looking for immediate answers? Check out our FAQ section
              </p>
              <Button variant="secondary" size="lg">
                View FAQs
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      
      <BookTestRideModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </div>
  )
}

export default ContactPage
