import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/hero/HeroSection'
import ProductShowcase from '../components/product/ProductShowcase'
import USPFeatures from '../components/features/USPFeatures'
import PerformanceSection from '../components/performance/PerformanceSection'
import SustainabilitySection from '../components/sustainability/SustainabilitySection'
import EMICalculator from '../components/calculator/EMICalculator'
import RangeChargingSection from '../components/range/RangeChargingSection'
import OffersSection from '../components/offers/OffersSection'
import TestimonialsCarousel from '../components/testimonials/TestimonialsCarousel'
import FAQSection from '../components/faq/FAQSection'
import BookTestRideModal from '../components/booking/BookTestRideModal'

const Home = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection onBookTestRide={() => setIsBookModalOpen(true)} />
        <ProductShowcase />
        <USPFeatures />
        <PerformanceSection />
        <SustainabilitySection />
        <EMICalculator />
        <RangeChargingSection />
        <OffersSection />
        <TestimonialsCarousel />
        <FAQSection />
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
