import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';

// Define software tools
const softwareTools = [
  {
    name: 'Photoshop',
    description: 'Image Editing',
    color: '#31A8FF',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/240px-Adobe_Photoshop_CC_icon.svg.png'
  },
  {
    name: 'Premiere Pro',
    description: 'Video Editing',
    color: '#EA77FF',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/240px-Adobe_Premiere_Pro_CC_icon.svg.png'
  },
  {
    name: 'After Effects',
    description: 'Motion Graphics',
    color: '#9999FF',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/240px-Adobe_After_Effects_CC_icon.svg.png'
  },
  {
    name: 'Blender',
    description: '3D Graphics',
    color: '#F5792A',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/240px-Blender_logo_no_text.svg.png'
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
          <motion.div 
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
            className="mb-2"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#0CAF60] bg-opacity-10 text-[#0CAF60] text-sm font-medium">
              OUR TOOLS
            </span>
          </motion.div>
          <motion.div 
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-4xl md:text-5xl font-bold mb-6 inline-block"
          >
            <span className="text-black">Softwares </span>
            <span className="text-[#0CAF60]">We Use</span>
          </motion.div>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-4xl mx-auto"
        >
          {softwareTools.map((tool, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn('up', 'tween', index * 0.05, 0.5)}
              className={`flex flex-col items-center ${tool.name === "Blender" ? "cursor-pointer" : ""}`}
              onClick={() => {
                if (tool.name === "Blender" || tool.description === "3D Graphics") {
                  // Scroll to video section when 3D Animation/Blender is clicked
                  document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className={`w-20 h-20 bg-white rounded-md shadow-md flex items-center justify-center mb-4 p-2 ${tool.name === "Blender" ? "hover:shadow-lg transition-shadow" : ""}`}>
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`} 
                  className="w-16 h-16 object-contain" 
                />
              </div>
              <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
              <p className={`text-gray-600 text-sm text-center ${tool.name === "Blender" ? "text-[#0CAF60]" : ""}`}>{tool.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SoftwareSection;
