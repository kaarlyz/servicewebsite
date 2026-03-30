import { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { LazyMotion } from 'framer-motion';
import './App.css';

const loadFeatures = () => import('./lib/framer-motion-features').then(res => res.default);

// Lazy load sections for better performance
const HomeSection = lazy(() => import('./components/sections/HomeSection'));
const ServicesSection = lazy(() => import('./components/sections/ServicesSection'));
const PricingSection = lazy(() => import('./components/sections/PricingSection'));
const TestimonialsSection = lazy(() => import('./components/sections/TestimonialsSection'));
const GalleryRomSection = lazy(() => import('./components/sections/GalleryRomSection'));
const RecommendedSection = lazy(() => import('./components/sections/Recommended-Section'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));

// Simple loading placeholder
const SectionLoader = () => (
  <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="animate-spin-slow" style={{ width: '30px', height: '30px', border: '2px solid var(--color-bitcoin)', borderTopColor: 'transparent', borderRadius: '50%' }}></div>
  </div>
);

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header scrollPosition={scrollPosition} />
        <main className="main-content">
          <LazyMotion features={loadFeatures} strict>
            <Suspense fallback={<SectionLoader />}>
              <HomeSection />
              <ServicesSection />
              <PricingSection />
              <TestimonialsSection />
              <GalleryRomSection />
              <RecommendedSection />
              <ContactSection />
            </Suspense>
          </LazyMotion>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;