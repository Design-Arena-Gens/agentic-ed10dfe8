'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FiHome,
  FiTool,
  FiBriefcase,
  FiDroplet,
  FiTrello,
  FiStar
} from 'react-icons/fi';

const services = [
  {
    icon: FiHome,
    title: 'Residential Cleaning',
    description: 'Complete home cleaning solutions from regular maintenance to deep cleaning. We make your home sparkle.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiBriefcase,
    title: 'Commercial Cleaning',
    description: 'Professional office and commercial space cleaning services. Maintain a pristine work environment.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: FiDroplet,
    title: 'Deep Cleaning',
    description: 'Intensive cleaning for every corner. Perfect for move-ins, move-outs, or seasonal refreshes.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: FiTool,
    title: 'Maintenance Services',
    description: 'Regular maintenance and repair services to keep your property in top condition year-round.',
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: FiTrello,
    title: 'Window Cleaning',
    description: 'Crystal-clear windows inside and out. Professional streak-free results every time.',
    color: 'from-sky-500 to-sky-600',
  },
  {
    icon: FiStar,
    title: 'Specialized Services',
    description: 'Carpet cleaning, upholstery care, and other specialized cleaning solutions tailored to your needs.',
    color: 'from-purple-500 to-purple-600',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-gray-100">
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

        {/* Icon */}
        <motion.div
          className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <service.icon className="text-white" size={28} />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>

        {/* Learn More Link */}
        <motion.div
          className="mt-6 flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ x: 5 }}
        >
          <span>Learn More</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full font-semibold mb-4">
            Our Services
          </span>
          <h2 className="heading-2 text-gray-900 mb-6">
            Complete Solutions for Every{' '}
            <span className="text-primary-600">Cleaning Need</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From residential to commercial spaces, we offer comprehensive cleaning and maintenance
            services with unmatched quality and attention to detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Request Custom Service
            </a>
            <a href="#testimonials" className="btn-secondary">
              See What Clients Say
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
