import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [passedHero, setPassedHero] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>('')
  const [showSidebar, setShowSidebar] = useState(true)
  const [menuExpanded, setMenuExpanded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      // Sidebar appears after scrolling past hero section (typically ~600-800px)
      setPassedHero(window.scrollY > 100)

      // Hide sidebar when reaching footer
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const isFooterVisible = footerRect.top < window.innerHeight
        setShowSidebar(!isFooterVisible)
      }

      // Track active section on home page
      if (location.pathname === '/') {
        const sections = ['products', 'gallery', 'features', 'advanced-features', 'performance', 'why-electric', 'emi-calculator', 'range-charging', 'offers', 'testimonials', 'faq']
        
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
              setActiveSection(sectionId)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Section links for Home page sidebar
  const sectionLinks = [
    {
      name: 'Models',
      sectionId: 'products',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      name: 'Gallery',
      sectionId: 'gallery',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Features',
      sectionId: 'features',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: 'Advanced',
      sectionId: 'advanced-features',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      name: 'Performance',
      sectionId: 'performance',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: 'Why Electric',
      sectionId: 'why-electric',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Calculator',
      sectionId: 'emi-calculator',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Range',
      sectionId: 'range-charging',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: 'Offers',
      sectionId: 'offers',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Testimonials',
      sectionId: 'testimonials',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      name: 'FAQ',
      sectionId: 'faq',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ]

  const navLinks = [
    { 
      name: 'Models', 
      path: '/',
      scrollTo: 'products',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      name: 'Features', 
      path: '/features',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      name: 'Configurator', 
      path: '/configurator',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      name: 'Dealers', 
      path: '/dealers',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      name: 'About', 
      path: '/about',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: 'Contact', 
      path: '/contact',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ]

  const handleNavClick = (link: { path: string; scrollTo?: string }) => {
    if (link.scrollTo && location.pathname === '/') {
      // Scroll to section on home page
      const element = document.getElementById(link.scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setMobileMenuOpen(false)
  }

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Top Navbar - Hidden when scrolled */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ 
          y: scrolled ? -100 : 0,
          opacity: scrolled ? 0 : 1
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-gray-100"
      >
        {/* Animated gradient line */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '200% 100%'
          }}
        />
        
        <nav className="container-custom relative py-5">
        <div className="flex items-center justify-center gap-12">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center group relative z-10 flex-shrink-0">
            <div className="flex flex-col items-center">
              <span className="font-display font-black text-2xl leading-none tracking-tight text-gray-900">
                CONSIDER DONE
              </span>
              <span className="font-display font-semibold text-[10px] leading-none tracking-[0.25em] text-gray-500 mt-1">
                EV POWERED
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path
              
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link)}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative group px-5 py-2.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 flex items-center space-x-2 ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-primary to-accent' 
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    <span className="relative z-10">
                      {link.icon}
                    </span>
                    <span className="relative z-10 whitespace-nowrap">
                      {link.name}
                    </span>
                    
                    {/* Hover indicator */}
                    {!isActive && hoveredLink === link.name && (
                      <motion.div
                        layoutId="navHover"
                        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Button - Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block flex-shrink-0 mr-4"
          >
            <Link
              to="/"
              onClick={() => handleNavClick({ path: '/', scrollTo: 'products' })}
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              Test Drive
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center space-y-1.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-300 shadow-md"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gradient-to-r from-primary to-accent transition-all rounded-full"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
            className="w-6 h-0.5 bg-gradient-to-r from-primary to-accent transition-all rounded-full"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gradient-to-r from-primary to-accent transition-all rounded-full"
          />
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden absolute left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-b border-primary/10 shadow-2xl shadow-black/10 z-50"
            >
              <div className="container-custom py-6 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => handleNavClick(link)}
                        className={`flex items-center space-x-3 text-lg font-semibold py-4 px-5 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'text-white bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30' 
                            : 'text-primary hover:text-accent hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10'
                        }`}
                      >
                        <motion.span
                          animate={isActive ? { rotate: 360 } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          {link.icon}
                        </motion.span>
                        <span>{link.name}</span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 bg-white rounded-full shadow-lg"
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </motion.header>

      {/* Circular Radial Menu - Appears when scrolled past hero */}
      <motion.aside
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: (passedHero && showSidebar) ? 1 : 0,
          opacity: (passedHero && showSidebar) ? 1 : 0
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="hidden lg:block fixed left-24 top-1/2 -translate-y-1/2 z-50"
      >
        <div 
          className="relative flex items-center justify-center w-fit h-fit"
          onMouseEnter={() => setMenuExpanded(true)}
          onMouseLeave={() => setMenuExpanded(false)}
        >
          {/* Central Menu Button */}
          <motion.button
            onMouseEnter={() => setHoveredLink('menu')}
            onMouseLeave={() => setHoveredLink(null)}
            className="relative flex items-center justify-center w-16 h-16 bg-white border-2 border-gray-200 text-gray-900 rounded-full shadow-xl hover:border-gray-400 hover:shadow-2xl transition-all duration-300 z-20"
            animate={{
              y: [0, -15, 0, -8, 0],
              x: [0, 3, 0, -3, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
            whileHover={{ scale: 1.1, y: 0, x: 0, rotate: 0 }}
          >
            <motion.div
              animate={{ rotate: menuExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuExpanded ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              )}
            </motion.div>

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gray-300"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>

          {/* Tooltip for main button */}
          <AnimatePresence>
            {hoveredLink === 'menu' && !menuExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute left-full ml-6 top-1/2 -translate-y-1/2 px-4 py-2 text-sm font-semibold rounded-xl whitespace-nowrap shadow-xl bg-gray-900 text-white"
              >
                Navigation Menu
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-gray-900" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Radial Menu Items */}
          <AnimatePresence>
            {menuExpanded && (
              <>
                {(location.pathname === '/' ? sectionLinks : navLinks).map((link, index) => {
                  const isActive = location.pathname === '/' 
                    ? activeSection === (link as any).sectionId 
                    : location.pathname === (link as any).path
                  
                  const totalItems = location.pathname === '/' ? sectionLinks.length : navLinks.length
                  const angle = (index * (2 * Math.PI)) / totalItems - Math.PI / 2
                  const radius = 85
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1,
                        x: x,
                        y: y,
                        opacity: 1 
                      }}
                      exit={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                      transition={{ 
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      className="absolute"
                    >
                      {location.pathname === '/' ? (
                        <button
                          onClick={() => handleSectionClick((link as any).sectionId)}
                          onMouseEnter={() => setHoveredLink(link.name)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                            isActive 
                              ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/40' 
                              : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary hover:scale-110 shadow-xl'
                          }`}
                        >
                          <motion.span
                            animate={{ 
                              scale: hoveredLink === link.name ? 1.2 : 1,
                              rotate: hoveredLink === link.name ? 360 : 0
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="w-5 h-5 flex items-center justify-center"
                          >
                            {link.icon}
                          </motion.span>

                          {/* Tooltip */}
                          <AnimatePresence>
                            {hoveredLink === link.name && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-full ml-3 px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shadow-xl bg-gray-900 text-white z-50"
                              >
                                {link.name}
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Active ring */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-white"
                              animate={{
                                scale: [1, 1.15, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          )}
                        </button>
                      ) : (
                        <Link
                          to={(link as any).path}
                          onClick={() => handleNavClick(link as any)}
                          onMouseEnter={() => setHoveredLink(link.name)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                            isActive 
                              ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/40' 
                              : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary hover:scale-110 shadow-xl'
                          }`}
                        >
                          <motion.span
                            animate={{ 
                              scale: hoveredLink === link.name ? 1.2 : 1,
                              rotate: hoveredLink === link.name ? 360 : 0
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="w-5 h-5 flex items-center justify-center"
                          >
                            {link.icon}
                          </motion.span>

                          {/* Tooltip */}
                          <AnimatePresence>
                            {hoveredLink === link.name && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-full ml-3 px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shadow-xl bg-gray-900 text-white z-50"
                              >
                                {link.name}
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Active ring */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-white"
                              animate={{
                                scale: [1, 1.15, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          )}
                        </Link>
                      )}
                    </motion.div>
                  )
                })}
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.aside>
    </>
  )
}

export default Header
