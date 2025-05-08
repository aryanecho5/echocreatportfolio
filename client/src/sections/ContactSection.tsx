import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';

const ContactSection = () => {

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50 relative">
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
            GET IN TOUCH
          </motion.span>
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Let's Bring Your <span className="bg-gradient-text">Vision to Life</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Ready to elevate your content? Reach out to discuss how we can help you stand out in a crowded digital landscape.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            variants={fadeIn('up', 'tween', 0.4, 0.6)}
            className="flex flex-col justify-between bg-white p-8 rounded-xl shadow-lg"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[rgba(12,175,96,0.1)] p-3 rounded-full text-[#0CAF60]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-600">+91 9352182077, +91 9166305573</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[rgba(12,175,96,0.1)] p-3 rounded-full text-[#0CAF60]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-600">hello@echocreates.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[rgba(12,175,96,0.1)] p-3 rounded-full text-[#0CAF60]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Business Hours</h4>
                    <p className="text-gray-600">Mon–Sat, 7 AM – 9 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-12">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(12,175,96,0.1)] p-3 rounded-full text-[#0CAF60] hover:bg-[#0CAF60] hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(12,175,96,0.1)] p-3 rounded-full text-[#0CAF60] hover:bg-[#0CAF60] hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                {/* X (Twitter) Icon */}
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(12,175,96,0.1)] p-3 rounded-full text-[#0CAF60] hover:bg-[#0CAF60] hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                {/* LinkedIn Icon */}
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="bg-[rgba(12,175,96,0.1)] p-3 rounded-full text-[#0CAF60] hover:bg-[#0CAF60] hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
