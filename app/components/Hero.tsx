'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export default function Hero() {
  const features = [
    'Professional & Certified Team',
    'Eco-Friendly Products',
    '24/7 Customer Support',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Animated Shapes */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-accent-500 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary-400 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-accent-500 bg-opacity-20 backdrop-blur-sm rounded-full text-accent-300 font-semibold mb-4">
                Tunisia's Trusted Cleaning Partner
              </span>
              <h1 className="heading-1 text-balance mb-6">
                Transform Your Space with{' '}
                <span className="text-accent-400">Professional Care</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed text-balance">
                Experience premium cleaning and maintenance services tailored to your needs.
                From homes to businesses, we deliver excellence with every detail.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="#contact" className="btn-primary shadow-xl">
                Get a Free Quote
                <FiArrowRight className="inline ml-2" />
              </a>
              <a href="#services" className="btn-secondary bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-white hover:bg-opacity-20">
                Explore Services
              </a>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <FiCheckCircle className="text-accent-400 flex-shrink-0" size={20} />
                  <span className="text-blue-100">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Placeholder for hero image - using styled div */}
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-white to-blue-100 p-8 shadow-2xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 opacity-20"></div>

                {/* Stats Cards */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-primary-600 font-bold text-3xl">1000+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="text-accent-600 font-bold text-3xl">100%</div>
                  <div className="text-gray-600 text-sm">Satisfaction</div>
                </motion.div>

                {/* Center Icon/Illustration */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <motion.div
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="w-40 h-40 rounded-full bg-white flex items-center justify-center"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-24 h-24 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 11h-3V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H8.5C7.67 7 7 7.67 7 8.5V11H4c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1zM9 20H5v-7h4v7zm5 0h-4v-7h4v7zm5 0h-4v-7h4v7z"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.a
          href="#services"
          className="flex flex-col items-center text-white hover:text-accent-400 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
