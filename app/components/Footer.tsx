'use client';

import { motion } from 'framer-motion';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Residential Cleaning', href: '#services' },
      { label: 'Commercial Cleaning', href: '#services' },
      { label: 'Deep Cleaning', href: '#services' },
      { label: 'Maintenance Services', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#home' },
      { label: 'Our Team', href: '#home' },
      { label: 'Careers', href: '#home' },
      { label: 'Blog', href: '#home' },
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#home' },
      { label: 'Privacy Policy', href: '#home' },
      { label: 'Terms of Service', href: '#home' },
    ],
  };

  const socialLinks = [
    { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="#home" className="text-3xl font-bold mb-4 inline-block">
                Iceem<span className="text-accent-500">.tn</span>
              </a>
              <p className="text-gray-400 leading-relaxed mb-6">
                Tunisia's leading provider of professional cleaning and maintenance services.
                We transform spaces with quality, reliability, and excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+21600000000"
                  className="flex items-center gap-3 text-gray-400 hover:text-accent-400 transition-colors"
                >
                  <FiPhone className="flex-shrink-0" size={18} />
                  <span>+216 XX XXX XXX</span>
                </a>
                <a
                  href="mailto:contact@iceem.tn"
                  className="flex items-center gap-3 text-gray-400 hover:text-accent-400 transition-colors"
                >
                  <FiMail className="flex-shrink-0" size={18} />
                  <span>contact@iceem.tn</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <FiMapPin className="flex-shrink-0" size={18} />
                  <span>Tunis, Tunisia</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-accent-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            <p className="text-gray-400 text-sm text-center md:text-right">
              © {currentYear} Iceem.tn. All rights reserved. | Crafted with excellence in Tunisia
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-900">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <a href="#home" className="hover:text-accent-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#home" className="hover:text-accent-400 transition-colors">
                Terms of Service
              </a>
              <a href="#home" className="hover:text-accent-400 transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="text-center md:text-right">
              <span className="text-gray-600">Made with </span>
              <span className="text-red-500">❤</span>
              <span className="text-gray-600"> for a cleaner Tunisia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
