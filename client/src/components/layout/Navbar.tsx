import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Thumbnails", href: "#portfolio" },
  { name: "Videos", href: "#video" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

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

      // Update active menu item based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          const id = section.getAttribute('id');
          switch(id) {
            case 'hero':
              setActiveItem('Home');
              break;
            case 'portfolio':
              setActiveItem('Thumbnails');
              break;
            case 'video':
              setActiveItem('Videos');
              break;
            case 'about':
              setActiveItem('About');
              break;
            case 'contact':
              setActiveItem('Contact');
              break;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white bg-opacity-95 backdrop-blur-md shadow-lg' 
          : 'bg-white bg-opacity-95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a href="#" className="flex items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="https://media-hosting.imagekit.io/5fd56ec76b3044ca/Layer%201.png?Expires=1841274227&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l1AhzW7SqUMh~jj-CAy6fVBXknexqsE23CDimONr1tCYk3PaBjRtSUa9ONcJboKHobIffBRYyy1R2n7p3kB3qnZlBT6Xzd2ylR~0pYKJ8BwlwebP-Or3YfCszoFyy0LI0zCBoz2~JBtU855ErrLgW6yh5Bxt8Oeiiskmck~ClJa~kFfw0wPIoK3lLzsUMREKYXmvBbKswEyywo9mDWyB6nwfWQHAuRPJyVzjjMl5W9xEPDqQcoEeoYak2e-PpOmQYU3SDewS9TN8DMqnmdJkRIRBfxb-pMo4e7vrAMRj7JOy27BFgt~6Dd5r961MNey0l5GKDU1sb7Y3Z1eV6QUalQ__"
                  alt="Echo Creates Logo" 
                  className="h-12 filter brightness-0"
                />
              </motion.div>
            </a>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <a
                    href={item.href}
                    className="relative px-2 py-4 text-gray-800 font-medium transition-colors duration-300"
                    onClick={() => setActiveItem(item.name)}
                  >
                    <span className={`${activeItem === item.name ? 'text-[#0CAF60] font-semibold' : 'hover:text-[#0CAF60]'}`}>
                      {item.name}
                    </span>
                    {activeItem === item.name && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0CAF60]"
                        layoutId="underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <motion.div 
            className="md:hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button 
              onClick={toggleMenu} 
              className="text-gray-800 hover:text-[#0CAF60] transition-colors duration-300" 
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="md:hidden bg-white shadow-md overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <motion.a 
              key={item.name}
              href={item.href} 
              className={`block px-3 py-2 rounded-md ${activeItem === item.name ? 'bg-gray-50 text-[#0CAF60] font-medium' : 'text-gray-800 hover:text-[#0CAF60]'} transition-colors duration-300`}
              onClick={() => {
                setActiveItem(item.name);
                setIsMenuOpen(false);
              }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
