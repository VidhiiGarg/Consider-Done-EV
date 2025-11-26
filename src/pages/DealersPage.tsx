import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import BookTestRideModal from '../components/booking/BookingModal'

interface Dealer {
  id: string
  name: string
  address: string
  city: string
  state: string
  phone: string
  email: string
  hours: string
  services: string[]
  lat: number
  lng: number
}

const dealers: Dealer[] = [
  {
    id: '1',
    name: 'Consider Done SF Downtown',
    address: '123 Market Street',
    city: 'San Francisco',
    state: 'CA',
    phone: '+1 (415) 555-0100',
    email: 'sf-downtown@considerdone.ev',
    hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM',
    services: ['Sales', 'Test Rides', 'Service Center', 'Parts'],
    lat: 37.7749,
    lng: -122.4194,
  },
  {
    id: '2',
    name: 'Consider Done LA West',
    address: '456 Wilshire Blvd',
    city: 'Los Angeles',
    state: 'CA',
    phone: '+1 (310) 555-0200',
    email: 'la-west@considerdone.ev',
    hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM',
    services: ['Sales', 'Test Rides', 'Service Center'],
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    id: '3',
    name: 'Consider Done Seattle',
    address: '789 Pine Street',
    city: 'Seattle',
    state: 'WA',
    phone: '+1 (206) 555-0300',
    email: 'seattle@considerdone.ev',
    hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM',
    services: ['Sales', 'Test Rides', 'Service Center', 'Parts'],
    lat: 47.6062,
    lng: -122.3321,
  },
  {
    id: '4',
    name: 'Consider Done Austin',
    address: '321 Congress Avenue',
    city: 'Austin',
    state: 'TX',
    phone: '+1 (512) 555-0400',
    email: 'austin@considerdone.ev',
    hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM',
    services: ['Sales', 'Test Rides', 'Service Center'],
    lat: 30.2672,
    lng: -97.7431,
  },
  {
    id: '5',
    name: 'Consider Done NYC',
    address: '555 5th Avenue',
    city: 'New York',
    state: 'NY',
    phone: '+1 (212) 555-0500',
    email: 'nyc@considerdone.ev',
    hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM',
    services: ['Sales', 'Test Rides', 'Service Center', 'Parts'],
    lat: 40.7128,
    lng: -74.0060,
  },
  {
    id: '6',
    name: 'Consider Done Portland',
    address: '888 SW Morrison St',
    city: 'Portland',
    state: 'OR',
    phone: '+1 (503) 555-0600',
    email: 'portland@considerdone.ev',
    hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM',
    services: ['Sales', 'Test Rides', 'Service Center'],
    lat: 45.5152,
    lng: -122.6784,
  },
]

const DealersPage = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDealers = dealers.filter(
    (dealer) =>
      dealer.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
                Find Us
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Visit Our <span className="gradient-text">Showrooms</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                Experience our vehicles in person. Find the nearest Consider Done showroom and book a test ride.
              </p>

              {/* Search */}
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by city or state..."
                    className="w-full px-6 py-4 pl-12 bg-white border-2 border-gray-200 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  />
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="container-custom mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-lg"
          >
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">Interactive Map Coming Soon</p>
                <p className="text-sm text-gray-500 mt-2">Integrate with Mapbox or Leaflet</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Dealers List */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDealers.map((dealer, index) => (
                <motion.div
                  key={dealer.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all"
                >
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-4">{dealer.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3 text-sm">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="text-gray-600">
                        <div>{dealer.address}</div>
                        <div>{dealer.city}, {dealer.state}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-600">{dealer.phone}</span>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">{dealer.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {dealer.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 shadow-lg transition-all">
                    Book Visit
                  </button>
                </motion.div>
              ))}
            </div>

            {filteredDealers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No dealers found matching your search.</p>
              </div>
            )}
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

export default DealersPage
