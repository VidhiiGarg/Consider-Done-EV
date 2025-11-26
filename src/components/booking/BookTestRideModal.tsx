import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Button from '../ui/Button'

interface BookTestRideModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  phone: string
  model: string
  date: string
  time: string
  location: string
  message: string
}

const BookTestRideModal = ({ isOpen, onClose }: BookTestRideModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    model: 'urban-rider',
    date: '',
    time: '',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
      setFormData({
        name: '',
        email: '',
        phone: '',
        model: 'urban-rider',
        date: '',
        time: '',
        location: '',
        message: '',
      })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-3xl shadow-2xl max-w-2xl w-full my-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-8 border-b border-gray-200 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-display text-3xl font-bold mb-2">
                      Book Your Test Ride
                    </h2>
                    <p className="opacity-90">Experience the future of electric mobility</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    aria-label="Close modal"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="p-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
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
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
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
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone & Model */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Model *
                        </label>
                        <select
                          name="model"
                          value={formData.model}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          <option value="eco-rider">Eco Rider</option>
                          <option value="city-pro">City Pro</option>
                          <option value="velocity-x">Velocity X</option>
                        </select>
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          <option value="">Select time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="17:00">05:00 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Location *
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="">Select location</option>
                        <option value="mumbai">Mumbai, Maharashtra</option>
                        <option value="delhi">Delhi NCR</option>
                        <option value="bangalore">Bangalore, Karnataka</option>
                        <option value="pune">Pune, Maharashtra</option>
                        <option value="hyderabad">Hyderabad, Telangana</option>
                        <option value="chennai">Chennai, Tamil Nadu</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        placeholder="Any specific questions or requirements?"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between pt-4">
                      <p className="text-sm text-gray-500">* Required fields</p>
                      <Button type="submit" size="lg">
                        Book Test Ride
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
                      className="w-20 h-20 bg-electric-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <svg className="w-10 h-10 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold mb-2">Booking Confirmed!</h3>
                    <p className="text-slate-400">
                      We'll contact you shortly to confirm your test ride.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BookTestRideModal
