import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true after component mounts to trigger animations
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="pt-28 pb-20 px-4 relative bg-[#111111]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[#111111] opacity-80" style={{
        backgroundImage: 'linear-gradient(to right, rgba(12, 175, 96, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(12, 175, 96, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Decorative circle */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#0CAF60] rounded-full opacity-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-[#0CAF60] rounded-full opacity-10"></div>
      
      {/* Glowing accent */}
      <div className="absolute -left-20 top-[20%] w-40 h-40 rounded-full bg-[#0CAF60] blur-[100px] opacity-20"></div>
      <div className="absolute -right-20 bottom-[20%] w-40 h-40 rounded-full bg-[#0CAF60] blur-[100px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Hero text content */}
          <div className="lg:w-1/2 text-white">
            <div 
              className={`transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-[rgba(12,175,96,0.1)] text-[#0CAF60] mb-4">
                CREATIVE AGENCY
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We Make Your<br />
                <span className="bg-gradient-to-r from-[#0CAF60] to-[#02DF5A] text-transparent bg-clip-text">
                  Content Stand Out
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg mb-8">
                Specialized in thumbnail design and video editing services that boost engagement and elevate your brand.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#portfolio"
                  className="bg-[#0CAF60] text-white px-6 py-3 rounded-full font-medium hover:bg-[#08784A] transition-all duration-300 flex items-center gap-2"
                >
                  Our Work
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>

              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div 
            className={`lg:w-1/2 relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0CAF60] to-[#02DF5A] opacity-70 blur-lg rounded-xl"></div>
              <div className="relative bg-black rounded-xl overflow-hidden p-1">
                <img 
                  src="https://media-hosting.imagekit.io/2cbbbb9bd0d7425c/gdfcxz.png?Expires=1841380273&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NMMTJsP2xLtWCNErlal5EBXj4iGf5W3IGCaBixL-q6S6o4hJpus5wuTemFS8rAfeCqxQokXfnGhpaBKoZ1cuzkLjHzEUdc3oTP6y8-5WS2obM~AAUt7qUvDJmqbTVwEZpjwoYfwPP3FcxgK0jxOXOLKLKEiR6G23B9L0pZlcaayh4Y-NPLfyzozCQNMOVwYivv-vrUIWshZuySq~se6QPrx~KLP57sKs1v6v5u-G7E-~NIjwISB9Ppgt2hBbEjD1aorczfKxMNEczlB5fnNAnk-9A6mLX2ryMVFGyXM7hAyyw-6yWBjkM4raSAi55xS8HIh0w0AOoKj13yAfuzAg5Q__" 
                  alt="Creative workspace with video and image editing"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32" style={{ 
              animation: 'float 6s ease-in-out infinite',
            }}>
              <div className="absolute inset-0 bg-[#0CAF60] opacity-20 rounded-full blur-md"></div>
              <div className="absolute right-0 -top-16 w-24 h-24 bg-black rounded-xl rotate-12 border border-[#0CAF60] flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(12, 175, 96, 0.3)' }}
              >
                <img
                  src="https://media-hosting.imagekit.io/a9cd9c71f06e424c/a-digital-illustration-in-neon-green-mon_eCGCH2rwSaCXzvjaQJXmQg_w05dTUfRQMmljjD_jBHhWw.png?Expires=1841384985&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mtqfuxNlctqfJwn-GBNYsR6-X1TIul~Ky5CaYCaK2QBzn2MCsCsRRU0IX6fkeyAcheysBW5DylrB3khHi2G3ayPGrpxPddmoVn97r92bITNy3BS3DJg43fvmZspWKSSoZjytuxCvc4IaRyirJGCwFo0SJU~eNbkSKV0Qle2zShDw3Ra9H7u5g5YlJaJ9PfgPNma4Ycgu57NmG34xRaGEjHOrEnr-TZTI6rutHi9jV0raPJT~uljs7kUwM0m5KIURZ3QFvewoPT1YaDJsq2GyNNrP15eKR2dcvpaSHCP9RZzGc9YcRb893BsELMdGBnf9heAEs1w-YiXyjjcMcxQG4w__"
                  alt="Sample thumbnail"
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="absolute -left-12 top-1/3" style={{ 
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '1.5s'
            }}>
              <div className="bg-black p-2 rounded-lg border border-[#0CAF60]"
                style={{ boxShadow: '0 0 20px rgba(12, 175, 96, 0.3)' }}
              >
                <div className="flex items-center gap-2 px-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-white text-xs">editing</span>
                </div>
                <div className="bg-gray-900 mt-1 p-2 rounded text-xs text-green-500 font-mono w-44">
                  <div>{'//Rendering Progress'}</div>
                  <div>{'[███████░░░] 70%'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-4 flex flex-col items-center text-white">
          <div className="text-sm mb-2">Scroll down</div>
          <div className="w-5 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"
              style={{ 
                animation: 'scrollBounce 1.5s infinite', 
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
