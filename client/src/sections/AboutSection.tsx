import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-white relative">
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
            ABOUT US
          </motion.span>
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            The Creative Minds <span className="bg-gradient-text">Behind Echo</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            We're a team of passionate creators dedicated to helping content creators and businesses stand out with exceptional visual content.
          </motion.p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div 
            variants={fadeIn('right', 'tween', 0.4, 0.6)}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&h=600" 
              alt="Echo Creates team working together" 
              className="rounded-xl shadow-xl w-full h-auto z-10 relative"
            />
            <motion.div 
              variants={fadeIn('up', 'tween', 0.6, 0.6)}
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0CAF60] rounded-xl z-20 flex flex-col items-center justify-center shadow-lg text-white"
            >
              <span className="text-3xl font-bold">10+</span>
              <span className="text-sm">Years of<br/>Experience</span>
            </motion.div>
            <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-[#0CAF60]/10 rounded-xl"></div>
          </motion.div>

          {/* Text content */}
          <motion.div 
            variants={fadeIn('left', 'tween', 0.5, 0.6)}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="text-gray-600">
              Founded in 2012, Echo Creates began with a simple mission: to help content creators tell their stories more effectively through stunning visuals.
            </p>
            <p className="text-gray-600">
              What started as a small thumbnail design service has grown into a comprehensive creative studio offering video editing, motion graphics, and thumbnail design for creators of all sizes.
            </p>

            <motion.div 
              variants={staggerContainer()}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
            >
              <motion.div 
                variants={fadeIn('up', 'tween', 0.1, 0.3)}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-[#0CAF60] text-4xl font-bold mb-2">250+</div>
                <p className="text-gray-600">Happy Clients</p>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 'tween', 0.2, 0.3)}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-[#0CAF60] text-4xl font-bold mb-2">1,500+</div>
                <p className="text-gray-600">Projects Completed</p>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 'tween', 0.3, 0.3)}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-[#0CAF60] text-4xl font-bold mb-2">10M+</div>
                <p className="text-gray-600">Views Generated</p>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 'tween', 0.4, 0.3)}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-[#0CAF60] text-4xl font-bold mb-2">8</div>
                <p className="text-gray-600">Team Members</p>
              </motion.div>
            </motion.div>

            <motion.a 
              variants={fadeIn('up', 'tween', 0.5, 0.5)}
              href="#contact" 
              className="inline-block mt-6 bg-[#0CAF60] text-white font-medium py-3 px-8 rounded-full hover:bg-[#089e51] transition-all duration-300 shadow-lg custom-button"
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
