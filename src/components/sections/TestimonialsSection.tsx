import { useState, useRef, useEffect } from 'react';
import { m } from 'framer-motion';
import { Star } from 'lucide-react';
import './TestimonialsSection.css';
import './TestimonialsSection-mobile.css';

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

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;

    const scroll = () => {
      if (scrollRef.current && scrollRef.current.children.length > testimonials.length) {
        scrollRef.current.scrollLeft += 1; 
        
        const firstSetItem = scrollRef.current.children[0] as HTMLElement;
        const secondSetItem = scrollRef.current.children[testimonials.length] as HTMLElement;
        
        if (firstSetItem && secondSetItem) {
          const setWidth = secondSetItem.offsetLeft - firstSetItem.offsetLeft;
          if (scrollRef.current.scrollLeft >= setWidth) {
            scrollRef.current.scrollLeft -= setWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, testimonials.length]);

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
      transition: { duration: 0.5, ease: 'easeOut' as const }
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
        <m.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-gradient">Apa Kata Mereka</h1>
          <p className="font-mono">Testimoni dari pelanggan setia RestuTech</p>
        </m.div>

        <m.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Duplicate set to create an infinite seamless marquee loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <m.div
              key={`${testimonial.id}-${index}`}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar font-heading">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h3 className="font-heading text-gradient">{testimonial.name}</h3>
                  <p className="font-mono">{testimonial.device}</p>
                </div>
              </div>

              <RenderStars rating={testimonial.rating} />

              <p className="testimonial-text font-body">"{testimonial.text}"</p>

              <div className="testimonial-date font-mono">{testimonial.date}</div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
