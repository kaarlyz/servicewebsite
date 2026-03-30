import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Send, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="font-heading text-gradient">KikaID</h3>
            <p className="font-body">
              Solusi terpercaya untuk kebutuhan smartphone Anda dengan teknologi terkini dan layanan terbaik.
            </p>
            <div className="footer-social-mini">
              <motion.a href="https://wa.me/6285177542325" target="_blank" whileHover={{ y: -3 }} className="social-link"><MessageCircle size={20} /></motion.a>
              <motion.a href="https://instagram.com" target="_blank" whileHover={{ y: -3 }} className="social-link"><Instagram size={20} /></motion.a>
              <motion.a href="https://t.me" target="_blank" whileHover={{ y: -3 }} className="social-link"><Send size={20} /></motion.a>
              <motion.a href="mailto:ekarestusyahputra.id@gmail.com" whileHover={{ y: -3 }} className="social-link"><Mail size={20} /></motion.a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="font-heading">Layanan</h4>
            <ul className="font-mono">
              <li><a href="#layanan">Flash ROM</a></li>
              <li><a href="#layanan">Unlock Bootloader</a></li>
              <li><a href="#layanan">Root & Unroot</a></li>
              <li><a href="#layanan">Service Software</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="font-heading">Bantuan</h4>
            <ul className="font-mono">
              <li><a href="#kontak">Hubungi Kami</a></li>
              <li><a href="#rekomendasi">Rekomendasi Device</a></li>
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#biaya">Cek Biaya</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="font-heading">Jam Operasional</h4>
            <div className="font-mono op-hours">
              <p>Senin - Sabtu: 09:00 - 21:00</p>
              <p>Minggu: 10:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom font-mono">
          <p>&copy; {currentYear} KikaID. All rights reserved. | Built on Bitcoin DeFi Aesthetic</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
