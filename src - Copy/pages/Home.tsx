import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/hero/Hero'
import ProductShowcase from '../components/product/Products'
import USPFeatures from '../components/features/Features'
import PerformanceSection from '../components/performance/Performance'
import SustainabilitySection from '../components/sustainability/Sustainability'
import EMICalculator from '../components/calculator/Calculator'
import RangeChargingSection from '../components/range/Charging'
import OffersSection from '../components/offers/Offers'
import TestimonialsCarousel from '../components/testimonials/Testimonials'
import FAQSection from '../components/faq/FAQ'
import BookTestRideModal from '../components/booking/BookingModal'

const Home = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection onBookTestRide={() => setIsBookModalOpen(true)} />
        <div className="lg:ml-24">
          <ProductShowcase />
          <USPFeatures />
          <PerformanceSection />
          <SustainabilitySection />
          <EMICalculator />
          <RangeChargingSection />
          <OffersSection />
          <TestimonialsCarousel />
          <FAQSection />
        </div>
      </main>

      <Footer />
      
      <BookTestRideModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </div>
  )
}

export default Home
