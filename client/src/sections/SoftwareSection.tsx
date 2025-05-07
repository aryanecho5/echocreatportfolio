import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';

// Define software tools
const softwareTools = [
  {
    name: 'Premiere Pro',
    description: 'Professional video editing',
    color: '#EA77FF',
    abbreviation: 'Pr'
  },
  {
    name: 'After Effects',
    description: 'Motion graphics & VFX',
    color: '#9999FF',
    abbreviation: 'Ae'
  },
  {
    name: 'Photoshop',
    description: 'Image editing & composition',
    color: '#31A8FF',
    abbreviation: 'Ps'
  },
  {
    name: 'DaVinci Resolve',
    description: 'Color grading & finishing',
    color: '#E76D43',
    abbreviation: 'Dr'
  },
  {
    name: 'Cinema 4D',
    description: '3D modeling & animation',
    color: '#0256F0',
    abbreviation: 'C4D'
  },
  {
    name: 'Illustrator',
    description: 'Vector graphics design',
    color: '#FF9A00',
    abbreviation: 'Ai'
  },
  {
    name: 'Blender',
    description: '3D creation & animation',
    color: '#F5792A',
    abbreviation: 'Bl'
  },
  {
    name: 'Audition',
    description: 'Audio editing & mixing',
    color: '#9999FF',
    abbreviation: 'Au'
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
          <motion.span 
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
            className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-[rgba(12,175,96,0.1)] text-[#0CAF60] mb-4"
          >
            OUR TOOLS
          </motion.span>
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Industry-Leading <span className="bg-gradient-text">Software</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            We utilize cutting-edge software to deliver exceptional quality across all our creative services.
          </motion.p>
        </div>

        {/* Software Grid */}
        <motion.div 
          variants={staggerContainer()}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {softwareTools.map((tool, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn('up', 'tween', index * 0.05, 0.5)}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <div 
                  className="w-10 h-10 rounded flex items-center justify-center text-white font-bold text-xs"
                  style={{ backgroundColor: tool.color }}
                >
                  {tool.abbreviation}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm">{tool.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SoftwareSection;
