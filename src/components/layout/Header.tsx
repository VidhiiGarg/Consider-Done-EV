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
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      // Sidebar appears after scrolling past hero section (typically ~600-800px)
      setPassedHero(window.scrollY > 600)

      // Hide sidebar when reaching footer
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const isFooterVisible = footerRect.top < window.innerHeight
        setShowSidebar(!isFooterVisible)
      }

      // Track active section on home page
      if (location.pathname === '/') {
        const sections = ['products', 'features', 'advanced-features', 'performance', 'why-electric', 'emi-calculator', 'range-charging', 'offers', 'testimonials', 'faq']
        
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

      {/* Left Sidebar - Appears when scrolled past hero */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: (passedHero && showSidebar) ? 0 : -100,
          opacity: (passedHero && showSidebar) ? 1 : 0
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed left-0 top-0 h-screen z-50 pointer-events-none"
      >
        <div className="h-full flex items-center pl-6 pointer-events-auto">
          <motion.div 
            className="backdrop-blur-2xl shadow-2xl rounded-2xl p-3 border bg-white/95 border-gray-200"
            initial={{ scale: 0.9 }}
          >
            {/* Logo at top */}
            <Link to="/" className="flex items-center justify-center mb-3 group">
              <motion.div 
                className="relative flex items-center justify-center rounded-lg shadow-md w-10 h-10 bg-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-display font-black text-xs tracking-tighter leading-none text-white">
                  CD
                </span>
              </motion.div>
            </Link>

            {/* Divider */}
            <div className="h-px mb-3 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* Navigation Icons */}
            <div className="flex flex-col space-y-1.5">
              {location.pathname === '/' ? (
                // Show section links for Home page
                sectionLinks.map((link, index) => {
                  const isActive = activeSection === link.sectionId
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ 
                        x: passedHero ? 0 : -50,
                        opacity: passedHero ? 1 : 0
                      }}
                      transition={{ 
                        delay: 0.1 + index * 0.05,
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <button
                        onClick={() => handleSectionClick(link.sectionId)}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={`relative group flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/25' 
                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-primary hover:scale-105'
                        }`}
                        title={link.name}
                      >
                        <motion.span
                          animate={{ 
                            scale: hoveredLink === link.name ? 1.15 : 1
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="w-4 h-4 flex items-center justify-center"
                        >
                          {link.icon}
                        </motion.span>

                        {/* Tooltip */}
                        <AnimatePresence>
                          {hoveredLink === link.name && (
                            <motion.div
                              initial={{ opacity: 0, x: -10, scale: 0.9 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              exit={{ opacity: 0, x: -10, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-full ml-4 px-4 py-2 text-sm font-semibold rounded-xl whitespace-nowrap shadow-xl bg-gray-900 text-white"
                            >
                              {link.name}
                              <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-gray-900" />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeSidebarIndicator"
                            className="absolute -right-1 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-accent rounded-full shadow-lg"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </button>
                    </motion.div>
                  )
                })
              ) : (
                // Show page links for other pages
                navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ 
                        x: passedHero ? 0 : -50,
                        opacity: passedHero ? 1 : 0
                      }}
                      transition={{ 
                        delay: 0.1 + index * 0.05,
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => handleNavClick(link)}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={`relative group flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/25' 
                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-primary hover:scale-105'
                        }`}
                        title={link.name}
                      >
                        <motion.span
                          animate={{ 
                            scale: hoveredLink === link.name ? 1.15 : 1
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="w-4 h-4 flex items-center justify-center"
                        >
                          {link.icon}
                        </motion.span>

                        {/* Tooltip */}
                        <AnimatePresence>
                          {hoveredLink === link.name && (
                            <motion.div
                              initial={{ opacity: 0, x: -10, scale: 0.9 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              exit={{ opacity: 0, x: -10, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-full ml-4 px-4 py-2 text-sm font-semibold rounded-xl whitespace-nowrap shadow-xl bg-gray-900 text-white"
                            >
                              {link.name}
                              <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-gray-900" />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeSidebarIndicator"
                            className="absolute -right-1 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-accent rounded-full shadow-lg"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })
              )}
            </div>

            {/* Divider */}
            <div className="h-px my-3 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* Test Drive CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: passedHero ? 0 : 20,
                opacity: passedHero ? 1 : 0
              }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <Link
                to="/"
                onClick={() => handleNavClick({ path: '/', scrollTo: 'products' })}
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent text-white rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                title="Test Drive"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.aside>
    </>
  )
}

export default Header
