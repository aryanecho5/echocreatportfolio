import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';
import { X } from 'lucide-react';

// Define the featured thumbnails
const featuredThumbnails = [
  {
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&h=450',
    title: 'Fortnite Season X',
    views: '1.2M'
  },
  {
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=450',
    title: 'Future of AI Technology',
    views: '845K'
  },
  {
    category: 'Cinematic',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&h=450',
    title: 'Night City Vibes',
    views: '2.3M'
  }
];

// Define the thumbnails grid
const thumbnailsGrid = [
  {
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&h=450',
    title: 'Fortnite Season X',
    views: '1.2M'
  },
  {
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=450',
    title: 'AI Future Trends',
    views: '845K'
  },
  {
    category: 'Cinematic',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&h=450',
    title: 'Night City Vibes',
    views: '2.3M'
  },
  {
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&h=450',
    title: 'Morning Routine',
    views: '987K'
  },
  {
    category: 'Educational',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=450',
    title: 'Learning to Code',
    views: '1.5M'
  },
  {
    category: 'Travel',
    imageUrl: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&h=450',
    title: 'Exploring Japan',
    views: '3.1M'
  },
  {
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&h=450',
    title: 'Gourmet Pizza',
    views: '678K'
  },
  {
    category: 'Music',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&h=450',
    title: 'Studio Session',
    views: '1.4M'
  }
];

// Define thumbnail type
type Thumbnail = {
  category: string;
  imageUrl: string;
  title: string;
  views: string;
};

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<Thumbnail | null>(null);

  const openLightbox = (image: Thumbnail) => {
    setSelectedImage(image);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  // Handle click outside the image to close the lightbox
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  // Handle escape key to close the lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <section id="portfolio" className="py-24 px-4 bg-gray-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: 'linear-gradient(to right, rgba(12, 175, 96, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(12, 175, 96, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
            className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-[rgba(12,175,96,0.1)] text-[#0CAF60] mb-4"
          >
            OUR THUMBNAILS
          </motion.span>
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Thumbnails That <span className="bg-gradient-text">Drive Clicks</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Our eye-catching thumbnail designs are strategically crafted to boost click-through rates and enhance audience engagement.
          </motion.p>
        </motion.div>
        
        {/* Featured Thumbnails */}
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredThumbnails.map((thumbnail, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 'tween', index * 0.1, 0.5)}
                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-lg"
                style={{ boxShadow: '0 8px 20px -5px rgba(12, 175, 96, 0.08)' }}
                onClick={() => openLightbox(thumbnail)}
              >
                {/* Category tag - keeping only this */}
                <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-70 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {thumbnail.category}
                </div>
                
                {/* Image */}
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={thumbnail.imageUrl} 
                    alt={thumbnail.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-[#0CAF60] opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Thumbnails Grid */}
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {thumbnailsGrid.map((thumbnail, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 'tween', index * 0.05, 0.5)}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-lg"
              style={{ boxShadow: '0 8px 20px -5px rgba(12, 175, 96, 0.08)' }}
              onClick={() => openLightbox(thumbnail)}
            >
              {/* Category tag - keeping only this */}
              <div className="absolute top-2 left-2 z-10 bg-black bg-opacity-70 text-white text-xs px-2 py-0.5 rounded-full">
                {thumbnail.category}
              </div>
              
              {/* Image */}
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={thumbnail.imageUrl} 
                  alt={thumbnail.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-[#0CAF60] opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          variants={fadeIn('up', 'tween', 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex justify-center mt-12"
        >
          <a 
            href="#contact" 
            className="bg-[#0CAF60] text-white font-medium py-2.5 px-6 rounded-full hover:bg-[#089e51] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Custom Thumbnails
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 md:p-10"
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl w-full rounded-lg overflow-hidden"
            >
              {/* Close button */}
              <button 
                onClick={closeLightbox} 
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
              >
                <X size={24} />
              </button>
              
              {/* Lightbox image - without caption */}
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title} 
                className="max-h-[80vh] mx-auto" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
