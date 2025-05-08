import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';
import { X } from 'lucide-react';

// Define the featured thumbnails
const featuredThumbnails = [
  {
    category: 'Gaming',
    imageUrl: 'https://media-hosting.imagekit.io/e0893302c10446bf/dcxdx%20copy.png?Expires=1841324763&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MTOYTX~HtfZsnChdb7-hHG6~slIMhDw2HApj95c1DPnBFdjRigZBEzSiovDCJgxf2kywO-iIsYc8g~oyQmFcoWAYAk0itj4TZvcNsG5bgWNp7ebmBPpBsSXdMxP9GzDrbnCc2X0FVODpTtOE1-PvJdsK3CpHld8nLpOwlogEF7BbHEDs2FuU7Ecpth~jLXYV-QsBJkFe6y4sm6drVPMvR8qF06qEp07Cw~20X7nECXkQmgkU7V9RrR-WaK3nAfUVmsKZV1Slp3~rg1ktQkHu3h0Ay0Jbmb5wPnHjI6-BkIzdS988sQW~8wJmvVamp7RJNdhJKOhbdgnhBHsSGm9ixA__',
    title: 'Fortnite Season X',
    views: '1.2M'
  },
  {
    category: 'Gaming',
    imageUrl: 'https://media-hosting.imagekit.io/9f634310ee3d4978/ggg.png?Expires=1841325456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yVbZ2E7h5RIEXYxSgtYBduOgsux-xQErPYEe1JYoRRQBwI1OEdj2Y-cwh7ouMcp6EV~PuxRifgFvFD7DL0wSx70yh3O-Uu-BRMUOE14qj34F2v-Tcox2KTaLO5edjTqwwygJ7i8zLUQz0iS5-g1JmSB8Bdy~AY4tHVo~wPGZqUpddJQm36Q9TVuED~BFIdJgwex34~UFM2LpHEJI-2ozaaDG4l4ikc1rRGIFdgVsUKRP4DBg~N4PhPAgph60coW9hcOJGiRHSnqjibSpiu4P0mLBBVrREebZcabNDgFVYEAXQOHDabbaTf1~vfqghjIaf20Q9TfLe4zjqvA9YWVxpQ__',
    title: 'Future of AI Technology',
    views: '845K'
  },
  {
    category: 'Gaming',
    imageUrl: 'https://media-hosting.imagekit.io/2465487260cd4877/Untitled-1.png?Expires=1841325456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=q3PS6WGVrSPK~qtxlGMheLgtSeG5mQsFibEi5RWMVG0HtTP0cpgej0iCAXS4mWEXBnUuL23GEHVzlrZF54dsSIT2cISP1k~HSOtCgrEqozTEDpareU-nJdEnTkaJ08YWYLUzSzrpHeh5Hqtd6A-DIV79zcM2vT8nQGmYq5wZfdbvA2CDdorcWI5B0DbSixvIPzAP1q76EthxYgB6Qc7-3paJSZpOdurO7pY~CMAJVQclYTxX3vqzAZwVAWTOI~q87KUg102FXWQJ~pbo0RpsDTCmeeCr7tLloOGz2ss3sEjlLYTNKy6W7IH4HW2YWd2coh4z9vF-rkBXcC17yPQeGQ__',
    title: 'Night City Vibes',
    views: '2.3M'
  }
];

// Define the thumbnails grid
const thumbnailsGrid = [
  {
    category: 'Gaming',
    imageUrl: 'https://media-hosting.imagekit.io/35e27a24700143cb/JHFVCXZ.png?Expires=1841325456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wBACS7tn4PV1ro39p67rSNfgFhpjO3dPAGlLMBafUyUHvrMOfsLyplXCZbeS8ktTINlQ-0pAfBbdg2TCZ8nP8YDx2U3Y1Y6Z7QAxBh0K9q~YOk96UWsn1vMBaKMxCiZVuavqC3TPFF065DQBzUhd68g9j9ZwcPtVjzLOiHcAkRF6AUtSS2TbHSBHByt1K0Q07mleQLl09TaTc4~Uoz77vV-s-gR~vHUfq~8dct~MwvQYyVkflmE6RCe2pMduyTrc-x~YUIu0Lqba5h79xBUk2XVDaf9EKBxxi0ZV7IS6bOuRmap1iMMYAw-no3JJoOgQfDkXAWGUKLsR5uGhTQoZxw__',
    title: 'Fortnite Season X',
    views: '1.2M'
  },
  {
    category: 'Gaming',
    imageUrl: 'https://media-hosting.imagekit.io/cc148e29fbe84a86/tanisq%20best%20copy.png?Expires=1841325456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BOpTC2AIgEEk4MLNUb3zM2pCMy1o~~2oflszVIZ4lrbcp9GcO-dS8tvjZxO8Otft83BQXX4Ad2sMzO00~cRAFRJG1zxpK2mqV5AhDm1Cccefxx34Dqz0QST7bcB64XTfI4Wv-dndc8BtbsgK8iYU3DDs~w03NeFrCdwOaOfNlt~LL-cWUfIHKFksTbqIc3eY1elPtP2DzERT6wBt1Dr8glT~G7kkIgBJVuHjBKNFeI6yFx5RppReTDNQ856nUcOT3w1dcEELXhP8Y0-8OX8U17TtW9cDs-19uQdx7Xhx6iDHUiLE3MaBiXqylte2xS2vA9oaIjIiFldiBU~Dg~BC7g__',
    title: 'AI Future Trends',
    views: '845K'
  },
  {
    category: 'Gaming',
    imageUrl: 'https://media-hosting.imagekit.io/24c45c53842146f0/efh_20250406015220_3911199_11cd8_698fb.png?Expires=1841325456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=q4t7qv~B5-O2KYMxG8dMxUWSmX7X55-P-b9chDFU4Dsb0DcbAkZ4PlxxXSnl6a0qubfq3rKGwcqZCzE9xAxg9ZX4~LuffTIgh7TA9sMM7GEWZ56C4Du7xmcvLARYS2CmxvhTRPe6~lG1uRIHAG-qznSPV-r5bx~3XH2H8yFx-X~m5K9BTuwZEIS4o4UXtsxADQmX95wubXog9aZvGv1futsmfz96gxGRsy9Ds-RMVAdLwWms7GDGXcgigTtx2zWTJORgsMSfeNXaSU4OoWRNjAJunYgbftVHcad~tkTCOMx2xlZmxVSYWzU~d5yamB6PDsUVXCXJXrpWK3PJhWCTOA__',
    title: 'Night City Vibes',
    views: '2.3M'
  },
  {
    category: 'Gaming',
    imageUrl: 'https://media-hosting.imagekit.io/3086b2be677c4791/KMJNBHGVF.png?Expires=1841325456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U1dqdSlDdMgrmlnouPcnd~dmIX~ZkY1FkTIRcBbcaTeHjEbupfNYHxIxo9WESzymidecPnDT0J-7gVoeefFdlIhekX8bs2DbEAnZ8P6yiMKNeTttiLERhjCXkHa4-Wp5VD4UhlNu5uFsH0pzVeaottNkv4ifjCQiAYLrByHLHjriqHcFUsBtUuUrbUaVi0U11Cs4PiLlbypADj6b~ztkAQm-3Fja7U9o9TtMts~aRz7WhgS~lhFuvOiGoAUWcFe4s6uZX3bLeyjgP2Q5RLwFv4CbkvOksxH1-UimIYHmkOILLYcdTwU7m-IWWAkC9Csa4qkbmX~v5Sxxug-vrWkkgw__',
    title: 'Morning Routine',
    views: '987K'
  },
  {
    category: 'Gaming',
    imageUrl: 'https://media-hosting.imagekit.io/f4d0a5348b1f4173/xzxs.png?Expires=1841325456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XzkSIA33GTguW~ykCcT3WRSnnfMwlyU3yR06kBchES-pYcLtLtznRMwRt3S8fZ2UdeVUb4e76XfLcBB2BgZvYQpf6--lu2vM1mNtFzRp24CmZjmJSq1Ju~EkSPwgbahFlxpTiS2SbDP1nDVvvIMg9meFvzyEzw6AXZ2fruJWmBUObrSQ6RtY6NpuCBb2QKsJS0UT9I74lDmfSdVkYub0iA22MQrUvfTse4D4zMQ8~6rsjNgsXNKfANoMRVmIuKO-8A-RKBqgA-cHibfN~c1TGXQcujB9LlxG4Xs9AmBgNmMt2DfSsOjEXBtS9KdQH-GN1-tWxJO8W5KMF7PhiOAr9w__',
    title: 'Learning to Code',
    views: '1.5M'
  },
  {
    category: 'Gaming',
    imageUrl: 'https://media-hosting.imagekit.io/951b61ac2c9540df/d.png?Expires=1841325456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zJrT~PSs7W03nIOK8K~p7CMaTTk1acI9ScZgkQSGaSp-6MDBSgPoOcRd6DXJl4BrOZiVvSpF-yS8dtXET5WP7GvqOhgg88Uxb96N4Vusa9h4nYqX~gmafQicgQ7w6xZVaJ2yj3D-9FRv2ZDPq6Yq7CraAXrbvja25A-1taaVhRgUTwO-QKR1c~GNyc9EX8BaqT5bp6GIZWZEX4ickT5GJmWTua0Rp-j0X5g5hpZSST651A13Y2jcIGv1KuC2nnC~06ftytvO~AZfVgXN40n3ae9bd5mSAWLfywcwQeBrVPw41GmdsoMGfSNJbIwHBXRt2W4PkvOJiD21Sr3DlWvU9w__',
    title: 'Exploring Japan',
    views: '3.1M'
  },
  {
    category: 'Gaming',
    imageUrl: 'https://media-hosting.imagekit.io/dc295cd1980e40ed/jrfdf_page-0001%20copy.png?Expires=1841326241&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oXkOL1SEK1kIF0~GHZ9zTZsLwbd-Z3He4VeBarfEpc66fnOem1bxU48BuSp-Xlk-xrLLJXIN6XancOUwvi3xaCR5uqkaoFnrSo7zgCAjmWDaviClzC0TDbNYUNMhQpvvwa4gE73Yikbu7NgB84UgyVbacl2D41eaB1tzw~yO4TtPZqFeWWgLWP9LFhMr0YLyFFLQ67fDPfEpXc3AWyl6V-ZWEGrTXICzLd6GtifoukCUmweNLT1MObq9xlB2uErrubDvZS1qs9zdbWAUGO63mmLXg8wSOhtdT~8Soa1ofJnOsQ26lK~rHY6vFmDVWxYYtWCFMX948Ub5Hd-aJUjocg__',
    title: 'Gourmet Pizza',
    views: '678K'
  },
  {
    category: 'Gaming',
    imageUrl: 'https://media-hosting.imagekit.io/7dae7f879e094a39/ZSXDCFVGBNM.png?Expires=1841330708&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HKN5fov2x9zs64yp0OiMyAx5u1dRu6UHrV-0KWFcFUzM7d5AnyUXG6Wm3L3OhbvwSifhSkcPVXtD1fNwDEmQ0mBHQCHsrUjru5Mui-UEXC2lpkLsL9w06oAx7VxEHu9tV3rViL3MaPUM3xdXKafD4l6qdu-9ZDVAYCCZyr4Na2dmPd~5k5BS5KB2SJkdXTqJ1I2ta9t0FvD50QY90Otg7g5cIcNvCeplQq2I5VZCUjsUhIXyMDW-EeAhnUv8Hhm27LFgJevd6niYQ82vAyeapH1xdzAah5pLYjdeTD98N0oKL58GuxpG~4O3tEGB3kBHr5~wc9jaiGmuFFfV7zg43A__',
    title: 'Studio Session',
    views: '1.4M'
  }
];

// Define thumbnail type
type Thumbnail = {
  category: string;
  imageUrl: string;
  title: string;
  views: string;
};

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<Thumbnail | null>(null);

  const openLightbox = (image: Thumbnail) => {
    setSelectedImage(image);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  // Handle click outside the image to close the lightbox
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  // Handle escape key to close the lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <section id="portfolio" className="py-24 px-4 bg-gray-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: 'linear-gradient(to right, rgba(12, 175, 96, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(12, 175, 96, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
            className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-[rgba(12,175,96,0.1)] text-[#0CAF60] mb-4"
          >
            OUR THUMBNAILS
          </motion.span>
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Thumbnails That <span className="bg-gradient-text">Drive Clicks</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Our eye-catching thumbnail designs are strategically crafted to boost click-through rates and enhance audience engagement.
          </motion.p>
        </motion.div>
        
        {/* Featured Thumbnails */}
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredThumbnails.map((thumbnail, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 'tween', index * 0.1, 0.5)}
                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-lg"
                style={{ boxShadow: '0 8px 20px -5px rgba(12, 175, 96, 0.08)' }}
                onClick={() => openLightbox(thumbnail)}
              >
                {/* Category tag - keeping only this */}
                <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-70 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {thumbnail.category}
                </div>
                
                {/* Image */}
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={thumbnail.imageUrl} 
                    alt={thumbnail.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-[#0CAF60] opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Thumbnails Grid */}
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {thumbnailsGrid.map((thumbnail, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 'tween', index * 0.05, 0.5)}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-lg"
              style={{ boxShadow: '0 8px 20px -5px rgba(12, 175, 96, 0.08)' }}
              onClick={() => openLightbox(thumbnail)}
            >
              {/* Category tag - keeping only this */}
              <div className="absolute top-2 left-2 z-10 bg-black bg-opacity-70 text-white text-xs px-2 py-0.5 rounded-full">
                {thumbnail.category}
              </div>
              
              {/* Image */}
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={thumbnail.imageUrl} 
                  alt={thumbnail.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-[#0CAF60] opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          variants={fadeIn('up', 'tween', 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex justify-center mt-12"
        >
          <a 
            href="#contact" 
            className="bg-[#0CAF60] text-white font-medium py-2.5 px-6 rounded-full hover:bg-[#089e51] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Custom Thumbnails
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 md:p-10"
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl w-full rounded-lg overflow-hidden"
            >
              {/* Close button */}
              <button 
                onClick={closeLightbox} 
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
              >
                <X size={24} />
              </button>
              
              {/* Lightbox image - without caption */}
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title} 
                className="max-h-[80vh] mx-auto" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
