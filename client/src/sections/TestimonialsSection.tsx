import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';

// Define testimonial data
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Gaming Content Creator',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100',
    content: 'Echo Creates transformed my channel with their stunning thumbnails and video edits. My click-through rate has increased by 40% since I started working with them!',
    company: '2.5M+ Subscribers',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Martinez',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100',
    content: 'The promotional videos Echo Creates produced for our product launch exceeded all expectations. Professional, creative, and delivered ahead of schedule.',
    company: 'BrandTech Solutions',
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Educational Content Creator',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100',
    content: 'Their animation work has made complex topics accessible and engaging for my students. Echo Creates has a gift for visual storytelling that makes learning stick.',
    company: '1.8M+ Subscribers',
    rating: 5
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100',
    content: 'The thumbnails created by Echo Creates have consistently outperformed our in-house designs. Their understanding of audience psychology is remarkable.',
    company: 'TechVision Inc.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  const goToSlide = (slideIndex: number) => {
    const maxSlide = testimonials.length - slidesPerView;
    let targetSlide = slideIndex;
    
    if (slideIndex < 0) {
      targetSlide = 0;
    } else if (slideIndex > maxSlide) {
      targetSlide = maxSlide;
    }
    
    setCurrentSlide(targetSlide);
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: 'linear-gradient(to right, rgba(12, 175, 96, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(12, 175, 96, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <motion.div 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span 
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
            className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-[rgba(12,175,96,0.1)] text-[#0CAF60] mb-4"
          >
            CLIENT FEEDBACK
          </motion.span>
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            What Our <span className="bg-gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it – hear from the content creators and businesses who have experienced our work firsthand.
          </motion.p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative px-4 md:px-10">
          <div className="overflow-hidden">
            <motion.div 
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                width: `${(testimonials.length / slidesPerView) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  variants={fadeIn('up', 'tween', index * 0.1, 0.5)}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <img src={testimonial.image} alt={`${testimonial.name} profile`} className="w-14 h-14 rounded-full object-cover" />
                      <div className="ml-4">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0CAF60" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div className="text-[#0CAF60] font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={() => goToSlide(currentSlide - 1)}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
            disabled={currentSlide === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0CAF60]">
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>
          <button 
            onClick={() => goToSlide(currentSlide + 1)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
            disabled={currentSlide >= testimonials.length - slidesPerView}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0CAF60]">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
