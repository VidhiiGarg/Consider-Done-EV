import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import LoadingScreen from './components/ui/Loading'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/Home'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const ConfiguratorPage = lazy(() => import('./pages/ConfiguratorPage'))
const DealersPage = lazy(() => import('./pages/DealersPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:model" element={<ProductPage />} />
        <Route path="/configurator" element={<ConfiguratorPage />} />
        <Route path="/dealers" element={<DealersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
