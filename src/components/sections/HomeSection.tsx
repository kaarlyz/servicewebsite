import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Send } from 'lucide-react';
import './HomeSection.css';

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
    <section id="home" className="section home-section">
      <div className="home-container">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="home-title">Kika Akan Meningkatkan Performa Device Anda</h2>
          
          <h3 className="home-subtitle">
            <span className="typing-text">{typing}</span>
            <span className="cursor">|</span>
          </h3>
          
          <p className="home-description">
            Kami melayani berbagai brand dengan metode resmi tanpa bypass ilegal.
            Solusi smartphone terpercaya untuk kebutuhan Anda.
          </p>
          
          <div className="button-container">
            <motion.a 
              href="https://wa.me/6285177542325" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button whatsapp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </motion.a>
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button instagram"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={18} />
              Instagram
            </motion.a>
            <motion.a 
              href="https://t.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button telegram"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              Telegram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
