import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>KikaID</h3>
            <p>Solusi terpercaya untuk kebutuhan smartphone Anda dengan teknologi terkini dan layanan terbaik.</p>
          </div>

          <div className="footer-section">
            <h4>Layanan</h4>
            <ul>
              <li><a href="#layanan">Flash ROM</a></li>
              <li><a href="#layanan">Unlock Bootloader</a></li>
              <li><a href="#layanan">Root & Unroot</a></li>
              <li><a href="#layanan">Service Software</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontak</h4>
            <ul>
              <li><a href="https://wa.me/6285177542325" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://t.me" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="mailto:ekarestusyahputra.id@gmail.com">Email</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Jam Operasional</h4>
            <p>Senin - Sabtu: 09:00 - 21:00</p>
            <p>Minggu: 10:00 - 18:00</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} kikaid. All rights reserved. | Made with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
