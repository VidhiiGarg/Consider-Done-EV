import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [passedHero, setPassedHero] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [sidebarDarkMode, setSidebarDarkMode] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      // Sidebar appears after scrolling past hero section (typically ~600-800px)
      setPassedHero(window.scrollY > 600)

      // Check if features section is in view
      const featuresSection = document.getElementById('features')
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect()
        const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
        setSidebarDarkMode(isInView)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        
        <nav className="container-custom flex items-center justify-between relative py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center group relative z-10">
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl leading-tight tracking-tight text-gray-900">
              CONSIDER DONE
            </span>
            <span className="font-display font-bold text-xs leading-tight tracking-widest text-gray-600">
              EV POWERED
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:block"
        >
          <Link
            to="/"
            onClick={() => handleNavClick({ path: '/', scrollTo: 'products' })}
            className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            Test Drive
          </Link>
        </motion.div>

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
          x: passedHero ? 0 : -100,
          opacity: passedHero ? 1 : 0
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed left-0 top-0 h-screen z-50 pointer-events-none"
      >
        <div className="h-full flex items-center pl-6 pointer-events-auto">
          <motion.div 
            animate={{
              backgroundColor: sidebarDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              borderColor: sidebarDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 1)'
            }}
            transition={{ duration: 0.4 }}
            className="backdrop-blur-2xl shadow-2xl rounded-3xl p-4 border"
            initial={{ scale: 0.9 }}
          >
            {/* Logo at top */}
            <Link to="/" className="flex items-center justify-center mb-6 group">
              <motion.div 
                animate={{
                  backgroundColor: sidebarDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(17, 24, 39, 1)',
                }}
                transition={{ duration: 0.4 }}
                className="relative flex items-center justify-center rounded-xl shadow-md px-3 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  animate={{
                    color: sidebarDarkMode ? 'rgba(17, 24, 39, 1)' : 'rgba(255, 255, 255, 1)',
                  }}
                  transition={{ duration: 0.4 }}
                  className="font-display font-black text-xs tracking-tight"
                >
                  CD
                </motion.span>
              </motion.div>
            </Link>

            {/* Divider */}
            <motion.div 
              animate={{
                background: sidebarDarkMode 
                  ? 'linear-gradient(to right, transparent, rgba(75, 85, 99, 0.5), transparent)'
                  : 'linear-gradient(to right, transparent, rgba(229, 231, 235, 1), transparent)'
              }}
              transition={{ duration: 0.4 }}
              className="h-px mb-6" 
            />

            {/* Navigation Icons */}
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => {
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
                      className={`relative group flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/25' 
                          : sidebarDarkMode
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105'
                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-primary hover:scale-105'
                      }`}
                      title={link.name}
                    >
                      <motion.span
                        animate={{ 
                          scale: hoveredLink === link.name ? 1.15 : 1
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
                            className={`absolute left-full ml-4 px-4 py-2 text-sm font-semibold rounded-xl whitespace-nowrap shadow-xl ${
                              sidebarDarkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
                            }`}
                          >
                            {link.name}
                            <div 
                              className={`absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent ${
                                sidebarDarkMode ? 'border-r-white' : 'border-r-gray-900'
                              }`} 
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeSidebarIndicator"
                          className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-full shadow-lg"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Divider */}
            <motion.div 
              animate={{
                background: sidebarDarkMode 
                  ? 'linear-gradient(to right, transparent, rgba(75, 85, 99, 0.5), transparent)'
                  : 'linear-gradient(to right, transparent, rgba(229, 231, 235, 1), transparent)'
              }}
              transition={{ duration: 0.4 }}
              className="h-px my-6" 
            />

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
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent text-white rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                title="Test Drive"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
