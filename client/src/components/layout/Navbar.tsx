import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Thumbnails", href: "#portfolio" },
  { name: "Videos", href: "#video" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

// Define sections where the underline should disappear
const sectionsWithoutUnderline = ["software", "testimonials"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [showUnderline, setShowUnderline] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation item clicks
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, itemName: string) => {
    e.preventDefault();
    setActiveItem(itemName);
    
    // Get the corresponding href for the clicked item
    const targetItem = navItems.find(item => item.name === itemName);
    if (!targetItem) return;
    
    // Scroll to the target element
    const targetId = targetItem.href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close the mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Helper function to get an element's distance from the top of the page
  const getOffsetTop = (element: HTMLElement) => {
    let offsetTop = 0;
    while(element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent as HTMLElement;
    }
    return offsetTop;
  };

  // Initialize and run handleScroll once when component mounts to set initial active section
  // Close menu when clicking outside
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setIsMenuOpen(false);
      }
    };
    
    // Add the event listener with a slight delay to prevent immediate triggering
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 0);
    
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Close menu on scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      // Update scrolled state
      setScrolled(window.scrollY > 20);
      
      // Get all section elements
      const sections = navItems.map(item => {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        return { id, element, name: item.name };
      }).filter(item => item.element !== null);
      
      // Also check for special sections that should hide the underline
      const softwareSection = document.getElementById('software');
      const testimonialsSection = document.getElementById('testimonials');
      
      // Calculate which section is currently in view
      const scrollPosition = window.scrollY + 100; // Add offset to account for header height
      
      // Check if we're in a special section that should hide the underline
      let inSpecialSection = false;
      
      if (softwareSection) {
        const sectionTop = getOffsetTop(softwareSection) - 120;
        const sectionBottom = sectionTop + softwareSection.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          inSpecialSection = true;
        }
      }
      
      if (testimonialsSection) {
        const sectionTop = getOffsetTop(testimonialsSection) - 120;
        const sectionBottom = sectionTop + testimonialsSection.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          inSpecialSection = true;
        }
      }
      
      // Update the underline visibility with an animation
      setShowUnderline(!inSpecialSection);
      
      // Check if we're at the top of the page (home section)
      if (scrollPosition < 300) {
        if (activeItem !== "Home") {
          setActiveItem("Home");
        }
        return;
      }
      
      // Sort sections by their position on the page (top to bottom)
      const sortedSections = [...sections].sort((a, b) => {
        if (!a.element || !b.element) return 0;
        return getOffsetTop(a.element) - getOffsetTop(b.element);
      });
      
      // Find the section that's currently in view
      for (let i = 0; i < sortedSections.length; i++) {
        const section = sortedSections[i];
        if (!section.element) continue;
        
        const sectionTop = getOffsetTop(section.element) - 100; // Add some offset for better detection
        const sectionBottom = sectionTop + section.element.offsetHeight;
        
        // Check if the current scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Find the nav item name that corresponds to this section
          const activeNavItem = navItems.find(item => item.href === `#${section.id}`);
          if (activeNavItem && activeNavItem.name !== activeItem) {
            setActiveItem(activeNavItem.name);
          }
          
          // Update the current section
          setCurrentSection(section.id);
          return;
        }
      }
      
      // If we're past all sections, activate the last one
      if (sortedSections.length > 0) {
        const lastSection = sortedSections[sortedSections.length - 1];
        const activeNavItem = navItems.find(item => item.href === `#${lastSection.id}`);
        if (activeNavItem && activeNavItem.name !== activeItem) {
          setActiveItem(activeNavItem.name);
        }
        setCurrentSection(lastSection.id);
      }
    };

    // Call handleScroll once when component mounts
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeItem, isMenuOpen, showUnderline]);

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
          ? 'bg-white bg-opacity-95 backdrop-blur-md shadow-sm' 
          : 'bg-white bg-opacity-95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 md:h-16 items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a 
              href="#hero" 
              className="flex items-center"
              onClick={(e) => handleNavClick(e, "Home")}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="https://media-hosting.imagekit.io/5fd56ec76b3044ca/Layer%201.png?Expires=1841274227&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l1AhzW7SqUMh~jj-CAy6fVBXknexqsE23CDimONr1tCYk3PaBjRtSUa9ONcJboKHobIffBRYyy1R2n7p3kB3qnZlBT6Xzd2ylR~0pYKJ8BwlwebP-Or3YfCszoFyy0LI0zCBoz2~JBtU855ErrLgW6yh5Bxt8Oeiiskmck~ClJa~kFfw0wPIoK3lLzsUMREKYXmvBbKswEyywo9mDWyB6nwfWQHAuRPJyVzjjMl5W9xEPDqQcoEeoYak2e-PpOmQYU3SDewS9TN8DMqnmdJkRIRBfxb-pMo4e7vrAMRj7JOy27BFgt~6Dd5r961MNey0l5GKDU1sb7Y3Z1eV6QUalQ__"
                  alt="Echo Creates Logo" 
                  className="h-10"
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
                    onClick={(e) => handleNavClick(e, item.name)}
                  >
                    <span className={`${activeItem === item.name ? 'text-[#0CAF60] font-semibold' : 'hover:text-[#0CAF60]'}`}>
                      {item.name}
                    </span>
                    {activeItem === item.name && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0CAF60]"
                        layoutId="underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showUnderline ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <motion.div 
            className="md:hidden flex items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button 
              ref={buttonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-800 hover:text-[#0CAF60] transition-colors duration-300 menu-toggle relative z-50" 
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : null}
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ 
              height: 'auto',
              opacity: 1,
              y: 0
            }}
            exit={{ 
              height: 0,
              opacity: 0,
              y: -10
            }}
            transition={{ 
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            ref={menuRef}
            className="md:hidden bg-white shadow-md overflow-hidden mobile-menu fixed w-full top-14 left-0 z-40"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.a 
                  key={item.name}
                  href={item.href} 
                  className={`block px-3 py-2 rounded-md ${activeItem === item.name ? 'bg-gray-50 text-[#0CAF60] font-medium' : 'text-gray-800 hover:text-[#0CAF60]'} transition-colors duration-300`}
                  onClick={(e) => handleNavClick(e, item.name)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
