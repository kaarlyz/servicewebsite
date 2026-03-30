import { useState } from 'react';
import { m } from 'framer-motion';
import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './PricingSection.css';
import './PricingSection-mobile.css';

const PricingSection = () => {
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const handleMobilePrev = () => {
    setMobileActiveIndex(mobileActiveIndex === 0 ? pricingPlans.length - 1 : mobileActiveIndex - 1);
  };

  const handleMobileNext = () => {
    setMobileActiveIndex(mobileActiveIndex === pricingPlans.length - 1 ? 0 : mobileActiveIndex + 1);
  };

  const pricingPlans = [
    {
      id: 1,
      name: 'Basic',
      price: 'Rp50K',
      description: 'untuk pemula',
      features: [
        { text: 'Flash ROM dasar', included: true },
        { text: 'Install TWRP', included: true },
        { text: 'Unlock bootloader', included: true },
        { text: 'Root akses', included: false },
        { text: 'Garansi 24 jam', included: false }
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Pro',
      price: 'Rp150K',
      description: 'paket terpopuler',
      features: [
        { text: 'Flash ROM custom', included: true },
        { text: 'Install TWRP/OrangeFox', included: true },
        { text: 'Unlock bootloader', included: true },
        { text: 'Root dengan Magisk', included: true },
        { text: 'Garansi 48 jam', included: true }
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Ultimate',
      price: 'Rp300K',
      description: 'paket lengkap',
      features: [
        { text: 'Semua layanan Pro', included: true },
        { text: 'Bypass FRP', included: true },
        { text: 'Service software', included: true },
        { text: 'Backup data lengkap', included: true },
        { text: 'Garansi 1 minggu', included: true }
      ],
      popular: false
    },
    {
      id: 4,
      name: 'Custom ROM',
      price: 'Custom',
      description: 'sesuai kebutuhan',
      features: [
        { text: 'ROM custom pilihan', included: true },
        { text: 'Konsultasi gratis', included: true },
        { text: 'Support via WhatsApp', included: true },
        { text: 'Support via Telegram', included: true },
        { text: 'Harga negotiable', included: true }
      ],
      popular: false,
      isCustom: true
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="harga" className="section pricing-section">
      <div className="pricing-container">
        <m.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-gradient">Harga Layanan</h1>
          <p className="font-mono">Pilih paket yang sesuai dengan kebutuhan Anda</p>
        </m.div>

        <m.div 
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pricingPlans.map((plan) => (
            <m.div
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {plan.popular && (
                <div className="popular-badge font-mono">POPULAR</div>
              )}
              <h3 className="plan-name font-heading">{plan.name}</h3>
              <p className="plan-description font-body">{plan.description}</p>
              
              <div className="price-section">
                <div className={`price font-mono ${plan.popular ? 'text-gradient' : ''}`}>{plan.price}</div>
                <span className="price-period font-mono">/service</span>
              </div>

              <ul className="features-list font-body">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={feature.included ? 'included' : 'excluded'}>
                    {feature.included ? (
                      <Check size={18} className="check-icon" />
                    ) : (
                      <X size={18} className="x-icon" />
                    )}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <m.a
                href={plan.isCustom ? 'https://wa.me/your_number' : '#kontak'}
                target={plan.isCustom ? '_blank' : '_self'}
                className={`pricing-button font-body ${plan.popular ? 'button-primary' : 'button-ghost'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.isCustom ? 'Hubungi Kami' : 'Pilih Paket'}
              </m.a>
            </m.div>
          ))}
        </m.div>

        {/* Mobile Carousel View */}
        <m.div 
          className="pricing-mobile-carousel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <m.div
            className={`mobile-pricing-card ${pricingPlans[mobileActiveIndex].popular ? 'popular' : ''}`}
            key={`mobile-${mobileActiveIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {pricingPlans[mobileActiveIndex].popular && (
              <div className="popular-badge font-mono">POPULAR</div>
            )}
            <h3 className="plan-name font-heading">{pricingPlans[mobileActiveIndex].name}</h3>
            <p className="plan-description font-body">{pricingPlans[mobileActiveIndex].description}</p>
            
            <div className="price-section">
              <div className={`price font-mono ${pricingPlans[mobileActiveIndex].popular ? 'text-gradient' : ''}`}>
                {pricingPlans[mobileActiveIndex].price}
              </div>
              <span className="price-period font-mono">/service</span>
            </div>

            <ul className="features-list font-body">
              {pricingPlans[mobileActiveIndex].features.map((feature, idx) => (
                <li key={idx} className={feature.included ? 'included' : 'excluded'}>
                  {feature.included ? (
                    <Check size={18} className="check-icon" />
                  ) : (
                    <X size={18} className="x-icon" />
                  )}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <m.a
              href={pricingPlans[mobileActiveIndex].isCustom ? 'https://wa.me/your_number' : '#kontak'}
              target={pricingPlans[mobileActiveIndex].isCustom ? '_blank' : '_self'}
              className={`pricing-button font-body ${pricingPlans[mobileActiveIndex].popular ? 'button-primary' : 'button-ghost'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {pricingPlans[mobileActiveIndex].isCustom ? 'Hubungi Kami' : 'Pilih Paket'}
            </m.a>
          </m.div>

          {/* Mobile Navigation */}
          <div className="mobile-carousel-nav">
            <m.button
              className="carousel-arrow-mobile prev"
              onClick={handleMobilePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous plan"
            >
              <ChevronLeft size={20} />
            </m.button>

            <span className="carousel-counter font-mono">
              {mobileActiveIndex + 1} / {pricingPlans.length}
            </span>

            <m.button
              className="carousel-arrow-mobile next"
              onClick={handleMobileNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next plan"
            >
              <ChevronRight size={20} />
            </m.button>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default PricingSection;
