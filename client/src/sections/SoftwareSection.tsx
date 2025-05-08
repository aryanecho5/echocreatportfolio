import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';

// Define software tools
const softwareTools = [
  {
    name: 'Photoshop',
    description: 'Image Editing',
    color: '#31A8FF',
    abbreviation: 'Ps'
  },
  {
    name: 'Premiere Pro',
    description: 'Video Editing',
    color: '#EA77FF',
    abbreviation: 'Pr'
  },
  {
    name: 'After Effects',
    description: 'Motion Graphics',
    color: '#9999FF',
    abbreviation: 'Ae'
  },
  {
    name: 'Illustrator',
    description: 'Vector Graphics',
    color: '#FF9A00',
    abbreviation: 'Ai'
  },
  {
    name: 'Final Cut Pro',
    description: 'Video Editing',
    color: '#00D2F3',
    abbreviation: 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4zm16 12V6H4v12h16z"/>
      </svg>
  },
  {
    name: 'Blender',
    description: '3D Graphics',
    color: '#F5792A',
    abbreviation: 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 5c-1.93 0-3.5 1.57-3.5 3.5 0 .59.15 1.15.41 1.65l-5.83 5.83 2.12 2.12 5.83-5.83c.5.26 1.06.41 1.65.41 1.93 0 3.5-1.57 3.5-3.5S13.93 5 12 5z"/>
      </svg>
  }
];

const SoftwareSection = () => {
  return (
    <section id="software" className="py-24 px-4 bg-gray-50 relative">
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
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-4xl md:text-6xl font-bold mb-6 flex flex-col items-center"
          >
            <span className="text-[#0CAF60]">Software</span> 
            <span className="text-black">We Use</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Professional tools that empower us to create exceptional designs and videos.
          </motion.p>
        </div>

        {/* Software Grid */}
        <motion.div 
          variants={staggerContainer()}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10"
        >
          {softwareTools.map((tool, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn('up', 'tween', index * 0.05, 0.5)}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-white rounded-md shadow-md flex items-center justify-center mb-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center text-white font-bold text-xl"
                  style={{ color: tool.color }}
                >
                  {tool.abbreviation}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
              <p className="text-gray-600 text-sm text-center">{tool.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SoftwareSection;
