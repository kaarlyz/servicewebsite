import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      avatar: 'A',
      name: 'Ahmad Fauzi',
      device: 'Xiaomi Mi 9T',
      rating: 5,
      text: 'Mantap banget pelayanannya! HP saya yang bootloop jadi normal lagi. Proses cepat dan harga bersahabat. Recommended banget!',
      date: '2 hari yang lalu'
    },
    {
      id: 2,
      avatar: 'S',
      name: 'Siti Rahma',
      device: 'Samsung A52',
      rating: 5,
      text: 'Baru pertama kali root HP, awalnya takut. Tapi RestuTech menjelaskan dengan detail dan hasilnya memuaskan. Terima kasih!',
      date: '1 minggu yang lalu'
    },
    {
      id: 3,
      avatar: 'R',
      name: 'Rizki Pratama',
      device: 'Realme 7',
      rating: 5,
      text: 'Unlock bootloader + flash custom ROM jadi cepat dan aman. Sekarang HP saya jadi lebih kenceng. Next mau root juga pasti di sini lagi!',
      date: '2 minggu yang lalu'
    },
    {
      id: 4,
      avatar: 'D',
      name: 'Dewi Lestari',
      device: 'Vivo Y50',
      rating: 4,
      text: 'Service software-nya bagus, HP saya yang sering hang sekarang lancar. Meskipun agak lama, tapi worth it!',
      date: '3 minggu yang lalu'
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const RenderStars = ({ rating }: { rating: number }) => (
    <div className="rating-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'filled' : 'empty'}
        />
      ))}
    </div>
  );

  return (
    <section id="testimoni" className="section testimonials-section">
      <div className="testimonials-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1>Apa Kata Mereka</h1>
          <p>Testimoni dari pelanggan setia RestuTech</p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.device}</p>
                </div>
              </div>

              <RenderStars rating={testimonial.rating} />

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-date">{testimonial.date}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
