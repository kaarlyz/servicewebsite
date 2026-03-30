import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './GalleryRomSection.css';
import './GalleryRomSection-mobile.css';

// Import gambar lokal
import photo1 from '../galeryrom/nusantara/photo1.jpg';
import imagePng from '../galeryrom/nusantara/image.png';
import imagePng2 from '../galeryrom/nusantara/image2.png';
import imagePng4 from '../galeryrom/nusantara/image4.png';

const GalleryRomSection = () => {
  const [activeRomIndex, setActiveRomIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Placeholder SVG data URI (tidak bergantung jaringan)
  const getPlaceholder = (text: string = 'Gambar tidak tersedia') => {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='800' viewBox='0 0 400 800'%3E%3Crect width='400' height='800' fill='%232d3748'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23a0aec0' font-family='system-ui, sans-serif' font-size='24'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    img.onerror = null;
    img.src = getPlaceholder('Gambar error');
  };

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
        photo1,
        imagePng,
        imagePng2,
        imagePng4,
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

  // Hitung indeks gambar sebelumnya dan berikutnya dalam ROM yang sama
  const totalImages = romData[activeRomIndex].images.length;
  const prevImageIndex = (activeImageIndex - 1 + totalImages) % totalImages;
  const nextImageIndex = (activeImageIndex + 1) % totalImages;

  return (
    <section id="gallery-rom" className="section gallery-rom-section">
      <div className="gallery-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-gradient">Custom ROM Gallery</h1>
          <p className="font-mono">Lihat tampilan berbagai custom ROM pilihan</p>
        </motion.div>

        <motion.div
          className="rom-gallery-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column: ROM Selection */}
          <div className="rom-icons-column">
            <h3 className="rom-icons-title font-heading">Pilih ROM</h3>
            <div className="rom-icons-grid">
              {romData.map((rom, idx) => (
                <motion.button
                  key={idx}
                  className={`rom-icon-item font-mono ${activeRomIndex === idx ? 'active' : ''}`}
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
              {/* Previous Image Phone (dari ROM yang sama, dengan efek gelap) */}
              <motion.div
                key={`prev-${activeRomIndex}-${prevImageIndex}`}
                className="phone-carousel-side prev-phone"
                initial={{
                  opacity: 0,
                  x: -80,
                  scale: 0.6,
                  rotateY: -60,
                  rotateX: 10,
                  z: -200
                }}
                animate={{
                  opacity: 0.2,
                  x: -40,
                  scale: 0.75,
                  rotateY: -35,
                  rotateX: 0,
                  z: 0
                }}
                exit={{
                  opacity: 0,
                  x: -80,
                  scale: 0.6,
                  rotateY: -60,
                  rotateX: 10,
                  z: -200
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="phone-frame carousel-phone">
                  <div className="phone-screen">
                    <img
                      src={romData[activeRomIndex].images[prevImageIndex]}
                      alt="Previous image"
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>
                  <div className="phone-notch"></div>
                </div>
              </motion.div>

              {/* Center ROM Phone (Active) - Cube Center */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`center-${activeRomIndex}-${activeImageIndex}`}
                  className="phone-carousel-center"
                  initial={{
                    opacity: 0,
                    rotateY: 120,
                    rotateX: -30,
                    scale: 0.7,
                    z: -300
                  }}
                  animate={{
                    opacity: 1,
                    rotateY: 0,
                    rotateX: 0,
                    scale: 1,
                    z: 0,
                    transition: {
                      duration: 0.9,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                  exit={{
                    opacity: 0,
                    rotateY: -120,
                    rotateX: 30,
                    scale: 0.7,
                    z: -300
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="phone-frame main full-phone">
                    <div className="phone-screen">
                      <img
                        src={romData[activeRomIndex].images[activeImageIndex]}
                        alt={romData[activeRomIndex].name}
                        onError={handleImageError}
                        loading="lazy"
                      />
                    </div>
                    <div className="phone-notch"></div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next Image Phone (dari ROM yang sama, dengan efek gelap) */}
              <motion.div
                key={`next-${activeRomIndex}-${nextImageIndex}`}
                className="phone-carousel-side next-phone"
                initial={{
                  opacity: 0,
                  x: 80,
                  scale: 0.6,
                  rotateY: 60,
                  rotateX: 10,
                  z: -200
                }}
                animate={{
                  opacity: 0.2,
                  x: 40,
                  scale: 0.75,
                  rotateY: 35,
                  rotateX: 0,
                  z: 0
                }}
                exit={{
                  opacity: 0,
                  x: 80,
                  scale: 0.6,
                  rotateY: 60,
                  rotateX: 10,
                  z: -200
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="phone-frame carousel-phone">
                  <div className="phone-screen">
                    <img
                      src={romData[activeRomIndex].images[nextImageIndex]}
                      alt="Next image"
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>
                  <div className="phone-notch"></div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows - untuk berganti gambar dalam ROM yang sama */}
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

              <span className="rom-counter font-mono">
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
              <h3 className="font-heading text-gradient">{romData[activeRomIndex].name}</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryRomSection;