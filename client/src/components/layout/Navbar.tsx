import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-900">
              Echo<span className="text-[#0CAF60]">Creates</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Home</a>
            <a href="#portfolio" className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Portfolio</a>
            <a href="#video" className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Videos</a>
            <a href="#about" className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">About</a>
            <a href="#software" className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Software</a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="bg-[#0CAF60] text-white px-5 py-2 rounded-full hover:bg-[#089e51] transition-colors duration-300">Contact</a>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-600 hover:text-[#0CAF60]" 
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white shadow-md overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#hero" className="block px-3 py-2 text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Home</a>
          <a href="#portfolio" className="block px-3 py-2 text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Portfolio</a>
          <a href="#video" className="block px-3 py-2 text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Videos</a>
          <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">About</a>
          <a href="#software" className="block px-3 py-2 text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Software</a>
          <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Testimonials</a>
          <a href="#contact" className="block px-3 py-2 text-[#0CAF60] font-medium">Contact</a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
