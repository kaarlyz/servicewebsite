import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { MessageCircle, Instagram, Send } from 'lucide-react';
import './HomeSection.css';
import './HomeSection-mobile.css';

// Import logo from root
import logo from '/logo.png';

const HomeSection = () => {
  const [typing, setTyping] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = [
    'Solusi Terpercaya untuk Android Anda',
    'Flash ROM & Root Specialist',
    'Bypass FRP Resmi & Aman',
    'Custom ROM Terlengkap'
  ];

  // Typing effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = typingTexts[textIndex];

      if (!isDeleting && charIndex < currentText.length) {
        setTyping(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTyping(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % typingTexts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [typing, textIndex, charIndex, isDeleting, typingTexts]);

  return (
    <section id="home" className="section home-section bg-grid-pattern">
      {/* Radial soft glow background */}
      <div className="home-ambient-glow"></div>

      <div className="home-container">
        <m.div
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="home-text-wrapper">
            <h2 className="home-title font-heading-bold">
              Kika Will Improve <br />
              <span className="text-gradient">Your Device Performance</span>
            </h2>

            <h3 className="home-subtitle font-mono">
              <span className="typing-text">{typing}</span>
              <span className="cursor">_</span>
            </h3>

            <p className="home-description font-body">
              Lepaskan seluruh performa device anda hanya dengan cara menghubungi contact kami dibawah.
              Free konsultasi dan boleh bertanya-tanya secukupnya.
            </p>

            <div className="button-container">
              <m.a
                href="https://wa.me/6285177542325"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} />
                WhatsApp
              </m.a>
              <m.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button-ghost font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={18} />
                Instagram
              </m.a>
              <m.a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="button-ghost font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                Telegram
              </m.a>
            </div>
          </div>

          <div className="home-graphic-wrapper">
            <div className="home-graphic animate-float">
              <div className="orbital-ring ring-outer animate-spin-slow"></div>
              <div className="orbital-ring ring-inner animate-spin-reverse"></div>
              <div className="logo-container">
                <m.img
                  src={logo}
                  alt="KikaID Logo"
                  className="home-hero-logo"
                  initial={{ rotate: -10, scale: 0.8 }}
                  whileInView={{ rotate: 10, scale: 1 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse" as const,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default HomeSection;
