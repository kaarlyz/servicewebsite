import { useRef, useEffect, useState } from 'react';
import { m, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import './Recommend-Section.css';
import './RecommendedSection-mobile.css';

// Definisikan tipe Device
interface Device {
  id: number;
  rank: number;
  brand: string;
  logo: string;
  model: string;
  fullModel: string;
  romSupport: string[];
  androidVersion: string;
  difficulty: string;
  romCount: number;
  community: string;
  released: string;
  chipset: string;
  gpu: string;
}

const RecommendedSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Data rekomendasi device dengan logo fallback siap pakai
  const recommendedDevices: Device[] = [
    {
      id: 1, rank: 1, brand: 'Xiaomi',
      logo: 'https://cdn.worldvectorlogo.com/logos/xiaomi-mobile-brand-logo.svg',
      model: 'Mi 9T / Redmi K20',
      fullModel: 'Xiaomi Mi 9T Pro (Redmi K20 Pro)',
      romSupport: ['LineageOS', 'Pixel Experience', 'crDroid', 'Havoc-OS'],
      androidVersion: 'Android 13/14', difficulty: 'Easy', romCount: 15, community: 'Very Active',
      released: '2019', chipset: 'Snapdragon 855', gpu: 'Adreno 640'
    },
    {
      id: 2, rank: 2, brand: 'POCO',
      logo: 'https://cdn.worldvectorlogo.com/logos/poco-logo.svg',
      model: 'POCO F1 / X3 Pro',
      fullModel: 'POCO F1 (Xiaomi Pocophone F1)',
      romSupport: ['Pixel Experience', 'crDroid', 'ArrowOS', 'LineageOS'],
      androidVersion: 'Android 13/14', difficulty: 'Easy', romCount: 20, community: 'Very Active',
      released: '2018', chipset: 'Snapdragon 845', gpu: 'Adreno 630'
    },
    {
      id: 3, rank: 3, brand: 'OnePlus',
      logo: 'https://cdn.worldvectorlogo.com/logos/oneplus-1.svg',
      model: 'OnePlus 7/7 Pro',
      fullModel: 'OnePlus 7 Pro 5G',
      romSupport: ['Pixel Experience', 'YAAP', 'crDroid', 'Havoc-OS'],
      androidVersion: 'Android 13/14', difficulty: 'Easy', romCount: 18, community: 'Very Active',
      released: '2019', chipset: 'Snapdragon 855', gpu: 'Adreno 640'
    },
    {
      id: 4, rank: 4, brand: 'Samsung',
      logo: 'https://cdn.worldvectorlogo.com/logos/samsung-6.svg',
      model: 'Galaxy S8/S9',
      fullModel: 'Samsung Galaxy S9 Plus',
      romSupport: ['LineageOS', 'Havoc-OS', 'Pixel Experience'],
      androidVersion: 'Android 12/13', difficulty: 'Medium', romCount: 12, community: 'Active',
      released: '2018', chipset: 'Exynos 9810', gpu: 'Mali G72 MP18'
    },
    {
      id: 5, rank: 5, brand: 'Google',
      logo: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg',
      model: 'Pixel 4/4a',
      fullModel: 'Google Pixel 4a 5G',
      romSupport: ['GrapheneOS', 'CalyxOS', 'LineageOS'],
      androidVersion: 'Android 14', difficulty: 'Easy', romCount: 10, community: 'Active',
      released: '2020', chipset: 'Snapdragon 730G', gpu: 'Adreno 618'
    },
    {
      id: 6, rank: 6, brand: 'Samsung',
      logo: 'https://cdn.worldvectorlogo.com/logos/samsung-6.svg',
      model: 'Galaxy Note 9',
      fullModel: 'Samsung Galaxy Note 9',
      romSupport: ['LineageOS', 'Havoc-OS'],
      androidVersion: 'Android 12/13', difficulty: 'Medium', romCount: 8, community: 'Moderate',
      released: '2018', chipset: 'Exynos 9810', gpu: 'Mali G72 MP18'
    }
  ];

  const [selectedDevice, setSelectedDevice] = useState<Device>(recommendedDevices[0]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const getDifficultyClass = (difficulty: string) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'easy';
      case 'medium': return 'medium';
      case 'hard': return 'hard';
      default: return '';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: 0.1,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.4
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 14, stiffness: 120, mass: 1 }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3 }
    }
  };

  return (
    <m.section 
      id="rekomendasi" 
      className="recommended-section"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      animate={controls}
      variants={containerVariants}
    >
      <div className="container">
        {/* Header */}
        <m.div className="section-header" variants={headerVariants}>
          <h2 className="section-title font-heading text-gradient">Top Recommended Devices</h2>
          <p className="section-description font-mono">
            Discover the best devices for custom ROMs, ranked by community support and stability
          </p>
        </m.div>

        {/* Main Content */}
        <div className="recommend-content glass-panel">
          {/* Left Side */}
          <m.div 
            className="device-list"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="device-list-header">
              <h3 className="font-heading">Top Devices</h3>
              <p className="font-mono">Click on any device to see details</p>
            </div>
            <div className="device-list-items">
              {recommendedDevices.map((device) => (
                <m.div
                  key={device.id}
                  className={`list-item ${selectedDevice?.id === device.id ? 'active' : ''}`}
                  onClick={() => setSelectedDevice(device)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img 
                    src={device.logo} 
                    alt={device.brand} 
                    className="list-item-logo" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${device.brand}&background=F7931A&color=fff&bold=true`;
                    }}
                  />
                  <div className="list-item-info">
                    <h4 className="list-item-brand font-heading">{device.brand}</h4>
                    <p className="list-item-model font-mono">{device.model}</p>
                  </div>
                  <div className="list-item-rank font-mono">#{device.rank}</div>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Right Side */}
          <m.div 
            className="device-detail-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {selectedDevice ? (
                <m.div
                  key={selectedDevice.id}
                  className="detail-card-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring" as const, damping: 20 }}
                >
                  {/* Header */}
                  <div className="detail-header-full">
                    <div className="detail-logo-container">
                      <img 
                        src={selectedDevice.logo} 
                        alt={selectedDevice.brand} 
                        className="detail-logo-full" 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${selectedDevice.brand}&background=F7931A&color=fff&bold=true`;
                        }}
                      />
                    </div>
                    <div className="detail-title-full">
                      <h2 className="font-heading text-gradient">{selectedDevice.brand}</h2>
                      <p className="font-body">{selectedDevice.fullModel}</p>
                      <div className="detail-rank-badge font-mono">#{selectedDevice.rank} Top Device</div>
                    </div>
                  </div>

                  {/* Specs Grid */}
                  <div className="detail-specs-grid">
                    <div className="spec-card">
                      <span className="spec-icon">⚡</span>
                      <div>
                        <span className="spec-label font-mono">Processor</span>
                        <span className="spec-value font-body">{selectedDevice.chipset}</span>
                      </div>
                    </div>
                    <div className="spec-card">
                      <span className="spec-icon">🎮</span>
                      <div>
                        <span className="spec-label font-mono">GPU</span>
                        <span className="spec-value font-body">{selectedDevice.gpu}</span>
                      </div>
                    </div>
                    <div className="spec-card">
                      <span className="spec-icon">📱</span>
                      <div>
                        <span className="spec-label font-mono">Android</span>
                        <span className="spec-value font-body">{selectedDevice.androidVersion}</span>
                      </div>
                    </div>
                    <div className="spec-card">
                      <span className="spec-icon">📅</span>
                      <div>
                        <span className="spec-label font-mono">Released</span>
                        <span className="spec-value font-body">{selectedDevice.released}</span>
                      </div>
                    </div>
                  </div>

                  {/* ROM Section */}
                  <div className="rom-section-full">
                    <h4 className="font-heading">Supported Custom ROMs</h4>
                    <div className="rom-tags-full">
                      {selectedDevice.romSupport.map((rom: string, idx: number) => (
                        <span key={idx} className="rom-tag-full font-mono">{rom}</span>
                      ))}
                    </div>
                  </div>

                  {/* Info Bar */}
                  <div className="info-bar">
                    <div className="info-item">
                      <span className="info-label font-mono">Difficulty Level</span>
                      <span className={`difficulty-badge-full font-mono ${getDifficultyClass(selectedDevice.difficulty)}`}>
                        {selectedDevice.difficulty}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-label font-mono">Community</span>
                      <span className="community-value font-body">{selectedDevice.community}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="action-buttons">
                    <button className="action-btn-full guide-btn font-mono">
                      Installation Guide
                    </button>
                    <button className="action-btn-full download-btn font-mono">
                      Download ROMs
                    </button>
                  </div>
                </m.div>
              ) : (
                <div className="empty-state-full font-mono">
                  Select a device from the list
                </div>
              )}
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </m.section>
  );
};

export default RecommendedSection;