import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock,  Send, MessageCircle, Instagram } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon lengkapi field yang wajib diisi.');
      return;
    }

    // Send WhatsApp message
    const message = encodeURIComponent(
      `Halo RestuTech,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo. WhatsApp: ${formData.whatsapp || 'Tidak ada'}\nPesan: ${formData.message}`
    );
    
    window.open(`https://wa.me/6285177542325?text=${message}`, '_blank');

    // Reset form
    setFormData({ name: '', email: '', whatsapp: '', message: '' });
    setFormSubmitted(true);
    
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      id: 1,
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Makmur Pasar 7 Tembung, Medan Sumatera Utara'
    },
    {
      id: 2,
      icon: Phone,
      title: 'Telepon / WhatsApp',
      content: '+62 851-7754-2325'
    },
    {
      id: 3,
      icon: Mail,
      title: 'Email',
      content: 'ekarestusyahputra.id@gmail.com'
    },
    {
      id: 4,
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Sabtu: 09:00 - 21:00\nMinggu: 10:00 - 18:00'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="kontak" className="section contact-section">
      <div className="contact-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1>Hubungi Kami</h1>
          <p>Konsultasi gratis, siap membantu 24/7</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="info-items">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    className="contact-item"
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                  >
                    <div className="item-icon">
                      <Icon size={24} />
                    </div>
                    <div className="item-content">
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Media */}
            <motion.div 
              className="social-media"
              variants={itemVariants}
            >
              <h3>Media Sosial Kami</h3>
              <div className="social-icons">
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
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Kirim Pesan</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="No. WhatsApp (opsional)"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Pesan Anda..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Kirim Pesan
              </motion.button>

              {formSubmitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  ✓ Pesan berhasil dikirim! Terima kasih.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
