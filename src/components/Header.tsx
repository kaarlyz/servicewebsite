import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { m } from 'framer-motion';
import './Header.css';

interface HeaderProps {
  scrollPosition: number;
}

const Header = ({ scrollPosition }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'harga', label: 'Harga' },
  { id: 'testimoni', label: 'Testimoni' },
  { id: 'gallery-rom', label: 'Gallery ROM' },
  { id: 'kontak', label: 'Kontak' },
  { id: 'rekomendasi', label: 'Rekomendasi' }  // <-- Ini ID yang dicari
];

  useEffect(() => {
    const sections = navLinks.map(link => link.id);
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  }, [scrollPosition]);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <m.header 
      className={`header ${scrollPosition > 50 ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="header-container">
        <div className="header-logo">
          <h1>KikaID</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="menu">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <m.nav 
          className="nav-mobile"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ul className="mobile-menu">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </m.nav>
      )}
    </m.header>
  );
};

export default Header;
