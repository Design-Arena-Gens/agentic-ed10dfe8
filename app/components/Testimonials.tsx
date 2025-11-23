'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Sarah Ahmed',
    role: 'Homeowner',
    location: 'Tunis',
    rating: 5,
    text: "Iceem transformed my home! Their attention to detail is exceptional, and the team is always professional and courteous. I've been using their services for over a year now.",
    image: '👩🏻‍💼',
  },
  {
    name: 'Mohamed Ben Ali',
    role: 'Business Owner',
    location: 'Sfax',
    rating: 5,
    text: "Outstanding commercial cleaning service. They keep our office spotless and work around our schedule seamlessly. Highly recommend for any business looking for reliability.",
    image: '👨🏽‍💼',
  },
  {
    name: 'Leila Trabelsi',
    role: 'Restaurant Manager',
    location: 'Sousse',
    rating: 5,
    text: "We trust Iceem with our restaurant's deep cleaning. They understand the high standards required in food service and always exceed our expectations.",
    image: '👩🏽‍🍳',
  },
  {
    name: 'Karim Mansour',
    role: 'Property Manager',
    location: 'Monastir',
    rating: 5,
    text: "Managing multiple properties is challenging, but Iceem makes it easy. Their maintenance services are top-notch and their pricing is fair. A true partner in property management.",
    image: '👨🏻‍💼',
  },
  {
    name: 'Amira Hamdi',
    role: 'Medical Clinic Director',
    location: 'Tunis',
    rating: 5,
    text: "In healthcare, cleanliness is critical. Iceem's team is trained, certified, and uses eco-friendly products. They're simply the best in the business.",
    image: '👩🏽‍⚕️',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full font-semibold mb-4">
            Client Testimonials
          </span>
          <h2 className="heading-2 text-gray-900 mb-6">
            What Our <span className="text-primary-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it. Hear from the clients who trust us with their spaces.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[400px] flex items-center">
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
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextTestimonial();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevTestimonial();
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-5xl shadow-lg">
                        {testimonials[currentIndex].image}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Stars */}
                      <div className="flex justify-center md:justify-start mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <FiStar key={i} className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                        "{testimonials[currentIndex].text}"
                      </blockquote>

                      {/* Author */}
                      <div>
                        <div className="font-bold text-gray-900 text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-primary-600 font-medium">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {testimonials[currentIndex].location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: '1000+', label: 'Happy Clients' },
            { number: '5000+', label: 'Projects Completed' },
            { number: '50+', label: 'Expert Team Members' },
            { number: '10+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
