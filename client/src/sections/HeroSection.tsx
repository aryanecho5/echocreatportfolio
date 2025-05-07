import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden grid-bg">
      <motion.div 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            variants={fadeIn('right', 'tween', 0.2, 0.8)}
            className="space-y-6 md:space-y-8"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-[rgba(12,175,96,0.1)] text-[#0CAF60]">CREATIVE DESIGN STUDIO</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Creating <span className="bg-gradient-text">Engaging</span> Digital Experiences
            </h1>
            <p className="text-gray-600 text-lg">
              We transform ideas into captivating visual content that drives engagement and elevates your brand.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#portfolio" 
                className="bg-[#0CAF60] text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-[#089e51] transition-all duration-300 transform hover:-translate-y-1 custom-button"
              >
                View Our Work
              </a>
              <a 
                href="#contact" 
                className="bg-white text-[#0CAF60] border border-[#0CAF60] font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 custom-button"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 'tween', 0.4, 0.8)}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Creative design workstation" 
              className="rounded-2xl shadow-2xl w-full h-auto z-10 relative" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0CAF60]/20 to-[#02DF5A]/10 rounded-2xl z-0 blur-xl -m-4"></div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0CAF60] rounded-2xl z-20 flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold">10+<br/>Years</span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Clients */}
        <motion.div 
          variants={fadeIn('up', 'tween', 0.6, 0.8)}
          className="mt-20 pt-10 border-t border-gray-200"
        >
          <p className="text-center text-gray-500 mb-8">Trusted by leading brands worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="h-10 w-auto">
              <div className="w-24 h-10 bg-gray-300 rounded flex items-center justify-center">Brand 1</div>
            </div>
            <div className="h-10 w-auto">
              <div className="w-24 h-10 bg-gray-300 rounded flex items-center justify-center">Brand 2</div>
            </div>
            <div className="h-10 w-auto">
              <div className="w-24 h-10 bg-gray-300 rounded flex items-center justify-center">Brand 3</div>
            </div>
            <div className="h-10 w-auto">
              <div className="w-24 h-10 bg-gray-300 rounded flex items-center justify-center">Brand 4</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
