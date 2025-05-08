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
        {/* About header */}
        <div className="mb-12">
          <motion.h1 
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
            className="text-4xl md:text-6xl font-bold flex flex-col md:flex-row md:items-center gap-2 mb-8"
          >
            <span className="text-black">About</span> 
            <span className="text-[#0CAF60]">Echo Creates</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-gray-600 max-w-3xl"
          >
            Echo Creates is a creative company where imagination comes to life. Behind Echo Creates are two creators:
          </motion.p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Team Members */}
          <motion.div 
            variants={fadeIn('right', 'tween', 0.3, 0.6)}
            className="space-y-6"
          >
            {/* First team member */}
            <motion.div 
              variants={fadeIn('up', 'tween', 0.4, 0.5)}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl text-[#0CAF60] font-bold mb-2">Aryan</h3>
              <p className="text-gray-600">
                Specializes in thumbnail editing, known for dynamic visuals and sharp compositions. With an eye for detail and trend awareness, Aryan creates thumbnails that demand attention.
              </p>
            </motion.div>
            
            {/* Second team member */}
            <motion.div 
              variants={fadeIn('up', 'tween', 0.5, 0.5)}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl text-[#0CAF60] font-bold mb-2">Adesh</h3>
              <p className="text-gray-600">
                Expert in video editing, crafting visually impactful and engaging content. Adesh combines technical expertise with creative storytelling to produce videos that resonate.
              </p>
            </motion.div>
            
            {/* Team philosophy */}
            <motion.div 
              variants={fadeIn('up', 'tween', 0.6, 0.5)}
              className="pt-6 border-t border-gray-100"
            >
              <p className="text-gray-600">
                Together, we blend creativity and storytelling to bring bold ideas to life. Our complementary skills allow us to deliver complete visual solutions that engage audiences.
              </p>
            </motion.div>
          </motion.div>

          {/* Image section */}
          <motion.div 
            variants={fadeIn('left', 'tween', 0.4, 0.6)}
            className="relative"
          >
            <div className="absolute -inset-3 border-2 border-[#0CAF60] rounded-xl opacity-20"></div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600" 
                alt="Echo Creates team working on creative projects" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
