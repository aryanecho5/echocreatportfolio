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
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-95 backdrop-blur-sm shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="https://media-hosting.imagekit.io/435edc514a644ce5/Layer%201.png?Expires=1841274227&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l1AhzW7SqUMh~jj-CAy6fVBXknexqsE23CDimONr1tCYk3PaBjRtSUa9ONcJboKHobIffBRYyy1R2n7p3kB3qnZlBT6Xzd2ylR~0pYKJ8BwlwebP-Or3YfCszoFyy0LI0zCBoz2~JBtU855ErrLgW6yh5Bxt8Oeiiskmck~ClJa~kFfw0wPIoK3lLzsUMREKYXmvBbKswEyywo9mDWyB6nwfWQHAuRPJyVzjjMl5W9xEPDqQcoEeoYak2e-PpOmQYU3SDewS9TN8DMqnmdJkRIRBfxb-pMo4e7vrAMRj7JOy27BFgt~6Dd5r961MNey0l5GKDU1sb7Y3Z1eV6QUalQ__"
                alt="Echo Creates Logo" 
                className="h-8"
              />
              <span className="ml-2 text-2xl font-bold">
                <span className="text-[#0CAF60]">Echo</span>
                <span className="text-black">Creates</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#hero" className="text-gray-800 hover:text-[#0CAF60] transition-colors duration-300 font-medium">Home</a>
            <a href="#portfolio" className="text-gray-800 hover:text-[#0CAF60] transition-colors duration-300 font-medium">Portfolio</a>
            <a href="#video" className="text-gray-800 hover:text-[#0CAF60] transition-colors duration-300 font-medium">Videos</a>
            <a href="#about" className="text-gray-800 hover:text-[#0CAF60] transition-colors duration-300 font-medium">About</a>
            <a href="#contact" className="text-gray-800 hover:text-[#0CAF60] transition-colors duration-300 font-medium">Contact</a>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 hover:text-[#0CAF60]" 
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
          <a href="#hero" className="block px-3 py-2 text-gray-800 hover:text-[#0CAF60] transition-colors duration-300">Home</a>
          <a href="#portfolio" className="block px-3 py-2 text-gray-800 hover:text-[#0CAF60] transition-colors duration-300">Portfolio</a>
          <a href="#video" className="block px-3 py-2 text-gray-800 hover:text-[#0CAF60] transition-colors duration-300">Videos</a>
          <a href="#about" className="block px-3 py-2 text-gray-800 hover:text-[#0CAF60] transition-colors duration-300">About</a>
          <a href="#contact" className="block px-3 py-2 text-gray-800 hover:text-[#0CAF60] transition-colors duration-300">Contact</a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
