import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Testimonial {
  name: string
  role: string
  location: string
  image: string
  rating: number
  comment: string
  model: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Urban Professional',
    location: 'San Francisco, CA',
    image: '/images/testimonials/person1.jpg',
    rating: 5,
    comment: 'The Urban Rider has completely transformed my daily commute. Silent, smooth, and incredibly efficient. Best decision I made this year!',
    model: 'Urban Rider',
  },
  {
    name: 'James Rodriguez',
    role: 'Tech Entrepreneur',
    location: 'Austin, TX',
    image: '/images/testimonials/person2.jpg',
    rating: 5,
    comment: 'Coming from a gas vehicle, the acceleration and handling of the Highway Master is mind-blowing. This is the future, and it\'s here now.',
    model: 'Highway Master',
  },
  {
    name: 'Emily Chen',
    role: 'Environmental Scientist',
    location: 'Seattle, WA',
    image: '/images/testimonials/person3.jpg',
    rating: 5,
    comment: 'Not only am I reducing my carbon footprint, but I\'m doing it in style. The City Cruiser is everything I wanted and more.',
    model: 'City Cruiser',
  },
  {
    name: 'Michael Thompson',
    role: 'Design Director',
    location: 'Portland, OR',
    image: '/images/testimonials/person4.jpg',
    rating: 5,
    comment: 'The attention to detail in both design and performance is exceptional. Consider Done has created something truly special.',
    model: 'Highway Master',
  },
]

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      const nextIndex = prev + newDirection
      if (nextIndex < 0) return testimonials.length - 1
      if (nextIndex >= testimonials.length) return 0
      return nextIndex
    })
  }

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
            Customer Stories
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">
            Loved by <span className="text-accent">Thousands</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-white backdrop-blur-sm border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-electric-400 text-2xl"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-xl md:text-2xl text-center text-slate-300 leading-relaxed mb-8 font-light">
                "{testimonials[currentIndex].comment}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-400 to-electric-600 rounded-full flex items-center justify-center text-2xl mb-4">
                  👤
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-lg mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-slate-400 text-sm mb-1">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {testimonials[currentIndex].location}
                  </div>
                  <div className="inline-block mt-3 px-3 py-1 bg-electric-500/10 border border-electric-500/30 rounded-full text-electric-400 text-xs">
                    {testimonials[currentIndex].model} Owner
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white backdrop-blur-sm border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-primary shadow-lg transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white backdrop-blur-sm border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-primary shadow-lg transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-electric-400'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
