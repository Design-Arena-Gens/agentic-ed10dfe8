'use client';

import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
