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
    <section id="testimonials" className="py-32 bg-white relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="relative max-w-[1400px] mx-auto px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="font-light text-5xl md:text-7xl tracking-tight mb-6 text-gray-900">
            Testimonials
          </h2>
          <div className="w-16 h-px bg-black/20 mx-auto" />
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
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
              className="pb-16 border-b border-gray-200"
            >
              {/* Quote */}
              <blockquote className="font-light text-2xl md:text-3xl leading-relaxed text-gray-900 mb-12 text-center max-w-3xl mx-auto">
                "{testimonials[currentIndex].comment}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center text-center">
                <div className="font-light text-xl mb-2">{testimonials[currentIndex].name}</div>
                <div className="text-zinc-600 text-xs uppercase tracking-wider mb-1">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-zinc-500 text-xs">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 w-12 h-12 border border-gray-200 hover:border-black transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 w-12 h-12 border border-gray-200 hover:border-black transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-px rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 bg-black'
                    : 'w-8 bg-gray-300 hover:bg-gray-400'
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
