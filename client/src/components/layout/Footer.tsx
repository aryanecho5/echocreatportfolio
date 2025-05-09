import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animation';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn('up', 'tween', 0.1, 0.6)}
          >
            <div className="mb-4">
              <img 
                src="https://media-hosting.imagekit.io/5fd56ec76b3044ca/Layer%201.png?Expires=1841274227&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l1AhzW7SqUMh~jj-CAy6fVBXknexqsE23CDimONr1tCYk3PaBjRtSUa9ONcJboKHobIffBRYyy1R2n7p3kB3qnZlBT6Xzd2ylR~0pYKJ8BwlwebP-Or3YfCszoFyy0LI0zCBoz2~JBtU855ErrLgW6yh5Bxt8Oeiiskmck~ClJa~kFfw0wPIoK3lLzsUMREKYXmvBbKswEyywo9mDWyB6nwfWQHAuRPJyVzjjMl5W9xEPDqQcoEeoYak2e-PpOmQYU3SDewS9TN8DMqnmdJkRIRBfxb-pMo4e7vrAMRj7JOy27BFgt~6Dd5r961MNey0l5GKDU1sb7Y3Z1eV6QUalQ__"
                alt="Echo Creates Logo" 
                className="h-12"
              />
            </div>
            <p className="text-gray-600 mb-6">
              Creating engaging digital experiences that captivate audiences and drive results.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0CAF60] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0CAF60] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              {/* X (Twitter) Icon */}
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0CAF60] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              {/* LinkedIn Icon */}
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0CAF60] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

            </div>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn('up', 'tween', 0.2, 0.6)}
          >
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'});
              }} className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Thumbnail Design</a></li>
              <li><a href="#video" onClick={(e) => {
                e.preventDefault();
                document.getElementById('video')?.scrollIntoView({behavior: 'smooth'});
              }} className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Video Editing</a></li>
              <li><a href="#video" onClick={(e) => {
                e.preventDefault();
                document.getElementById('video')?.scrollIntoView({behavior: 'smooth'});
              }} className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Motion Graphics</a></li>
              <li><a href="#video" onClick={(e) => {
                e.preventDefault();
                document.getElementById('video')?.scrollIntoView({behavior: 'smooth'});
              }} className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">3D Animation</a></li>
              <li><a href="#contact" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
              }} className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Custom Projects</a></li>
            </ul>
          </motion.div>
          
          {/* Company */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn('up', 'tween', 0.3, 0.6)}
          >
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
              }} className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">About Us</a></li>
              <li><a href="#testimonials" onClick={(e) => {
                e.preventDefault();
                document.getElementById('testimonials')?.scrollIntoView({behavior: 'smooth'});
              }} className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Testimonials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#contact" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
              }} className="text-gray-600 hover:text-[#0CAF60] transition-colors duration-300">Contact</a></li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Echo Creates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
