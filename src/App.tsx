import { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomeSection from './components/sections/HomeSection';
import ServicesSection from './components/sections/ServicesSection';
import PricingSection from './components/sections/PricingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import GalleryRomSection from './components/sections/GalleryRomSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import './App.css';

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
          <HomeSection />
          <ServicesSection />
          <PricingSection />
          <TestimonialsSection />
          <GalleryRomSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
