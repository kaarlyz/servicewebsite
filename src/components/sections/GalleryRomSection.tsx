import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './GalleryRomSection.css';

const GalleryRomSection = () => {
  const [activeRomIndex, setActiveRomIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrevImage = () => {
    const totalImages = romData[activeRomIndex].images.length;
    setActiveImageIndex(activeImageIndex === 0 ? totalImages - 1 : activeImageIndex - 1);
  };

  const handleNextImage = () => {
    const totalImages = romData[activeRomIndex].images.length;
    setActiveImageIndex(activeImageIndex === totalImages - 1 ? 0 : activeImageIndex + 1);
  };

  const handleSelectRom = (index: number) => {
    setActiveRomIndex(index);
    setActiveImageIndex(0);
  };

  const romData = [
    {
      name: 'LineageOS',
      images: [
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=800&fit=crop'
      ]
    },
    {
      name: 'PixelOS',
      images: [
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1516534775068-bb57236fada7?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=800&fit=crop'
      ]
    },
    {
      name: 'crDroid',
      images: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=800&fit=crop'
      ]
    },
    {
      name: 'EvolutionX',
      images: [
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=800&fit=crop'
      ]
    },
    {
      name: 'ArrowOS',
      images: [
        'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=800&fit=crop'
      ]
    },
    {
      name: 'PixelExp',
      images: [
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=800&fit=crop'
      ]
    },
    {
      name: 'DerpFest',
      images: [
        'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1516534775068-bb57236fada7?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=800&fit=crop'
      ]
    },
    {
      name: 'HavocOS',
      images: [
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=800&fit=crop'
      ]
    }
  ];

  return (
    <section id="gallery-rom" className="section gallery-rom-section">
      <div className="gallery-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1>Custom ROM Gallery</h1>
          <p>Lihat tampilan berbagai custom ROM pilihan</p>
        </motion.div>

        <motion.div
          className="rom-gallery-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column: ROM Selection */}
          <div className="rom-icons-column">
            <h3 className="rom-icons-title">Pilih ROM</h3>
            <div className="rom-icons-grid">
              {romData.map((rom, idx) => (
                <motion.button
                  key={idx}
                  className={`rom-icon-item ${activeRomIndex === idx ? 'active' : ''}`}
                  onClick={() => handleSelectRom(idx)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{rom.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column: Phone Display & Image Navigation */}
          <div className="phone-mockup-column">
            {/* 3-Phone Carousel Container with 3D Perspective */}
            <div className="carousel-phones-wrapper" style={{ perspective: '1500px' }}>
              {/* Prev ROM Phone (Semi-transparent) */}
              <motion.div
                className="phone-carousel-side prev-phone"
                initial={{ opacity: 0.3, x: -30, scale: 0.8, rotateY: -20 }}
                animate={{ opacity: 0.3, x: -30, scale: 0.8, rotateY: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="phone-frame carousel-phone">
                  <div className="phone-screen">
                    <img 
                      src={romData[(activeRomIndex - 1 + romData.length) % romData.length].images[activeImageIndex]} 
                      alt="Previous ROM"
                    />
                  </div>
                  <div className="phone-notch"></div>
                </div>
              </motion.div>

              {/* Center ROM Phone (Active) - with 3D Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`center-${activeRomIndex}`}
                  className="phone-carousel-center"
                  initial={{ opacity: 0, rotateY: 90, scale: 0.9 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } }}
                  exit={{ opacity: 0, rotateY: -90, scale: 0.9 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="phone-frame main full-phone">
                    <div className="phone-screen">
                      <img 
                        src={romData[activeRomIndex].images[activeImageIndex]} 
                        alt={`${romData[activeRomIndex].name}`}
                      />
                    </div>
                    <div className="phone-notch"></div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next ROM Phone (Semi-transparent) */}
              <motion.div
                className="phone-carousel-side next-phone"
                initial={{ opacity: 0.3, x: 30, scale: 0.8, rotateY: 20 }}
                animate={{ opacity: 0.3, x: 30, scale: 0.8, rotateY: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="phone-frame carousel-phone">
                  <div className="phone-screen">
                    <img 
                      src={romData[(activeRomIndex + 1) % romData.length].images[activeImageIndex]} 
                      alt="Next ROM"
                    />
                  </div>
                  <div className="phone-notch"></div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows - for Image Navigation within ROM */}
            <div className="rom-nav-arrows">
              <motion.button
                className="carousel-arrow prev-btn"
                onClick={handlePrevImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <span className="rom-counter">
                {activeImageIndex + 1} / {romData[activeRomIndex].images.length}
              </span>

              <motion.button
                className="carousel-arrow next-btn"
                onClick={handleNextImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* ROM Info */}
            <motion.div
              className="rom-info"
              key={`info-${activeRomIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{romData[activeRomIndex].name}</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryRomSection;
