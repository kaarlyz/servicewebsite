import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Unlock, Zap, HardDrive, Shield, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const services = [
    {
      id: 1,
      icon: Smartphone,
      title: 'Flash ROM',
      description: 'Install custom ROM seperti LineageOS, PixelOS, dan lainnya dengan metode aman dan terpercaya',
      price: 'Mulai Rp50K'
    },
    {
      id: 2,
      icon: Unlock,
      title: 'Unlock Bootloader',
      description: 'Buka kunci bootloader berbagai merek HP dengan cara resmi dan aman',
      price: 'Mulai Rp75K'
    },
    {
      id: 3,
      icon: Zap,
      title: 'Root & Unroot',
      description: 'Root menggunakan Magisk atau KernelSU dengan metode terbaru dan stabil',
      price: 'Mulai Rp100K'
    },
    {
      id: 4,
      icon: HardDrive,
      title: 'Install TWRP',
      description: 'Pasang custom recovery TWRP atau OrangeFox untuk kemudahan flashing',
      price: 'Mulai Rp50K'
    },
    {
      id: 5,
      icon: Shield,
      title: 'Bypass FRP',
      description: 'Mengatasi lupa akun Google (FRP) dengan metode resmi tanpa bypass ilegal',
      price: 'Mulai Rp150K'
    },
    {
      id: 6,
      icon: Wrench,
      title: 'Service Software',
      description: 'Mengatasi berbagai masalah software seperti bootloop, hang logo, dan lainnya',
      price: 'Mulai Rp100K'
    }
  ];

  const handlePrevService = () => {
    setDirection(-1);
    setActiveServiceIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNextService = () => {
    setDirection(1);
    setActiveServiceIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { opacity: 0, y: -20 }
  };

  const carouselVariantsHorizontal = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="layanan" className="section services-section">
      <div className="services-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1>Layanan Kami</h1>
          <p>Solusi lengkap untuk kebutuhan smartphone Anda</p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div 
          className="services-grid desktop-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="service-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="service-icon-wrapper">
                  <Icon size={40} className="service-icon" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-price">{service.price}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="services-mobile-carousel">
          <div className="carousel-container" style={{ perspective: '1000px' }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeServiceIndex}
                custom={direction}
                variants={carouselVariantsHorizontal}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="carousel-service-card"
              >
                {(() => {
                  const service = services[activeServiceIndex];
                  const Icon = service.icon;
                  return (
                    <div className="service-card carousel-card">
                      <div className="service-icon-wrapper">
                        <Icon size={50} className="service-icon" />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <span className="service-price">{service.price}</span>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="carousel-controls">
            <motion.button
              className="carousel-btn prev-btn"
              onClick={handlePrevService}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous service"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="carousel-indicators">
              {services.map((_, index) => (
                <motion.div
                  key={index}
                  className={`indicator ${index === activeServiceIndex ? 'active' : ''}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              className="carousel-btn next-btn"
              onClick={handleNextService}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next service"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          <p className="carousel-counter">{activeServiceIndex + 1} / {services.length}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
