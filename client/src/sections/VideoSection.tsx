import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';
import { Play, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Define video samples with URLs
interface VideoSample {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category: string;
}

const videoSamples: VideoSample[] = [
  {
    id: 1,
    title: "Gaming Highlight",
    thumbnailUrl: "https://img.youtube.com/vi/8r_ap3t49FY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/8r_ap3t49FY",
    duration: "3:45",
    category: "Gaming"
  },
  {
    id: 2,
    title: "Gaming Showcase",
    thumbnailUrl: "https://img.youtube.com/vi/CSuaaLlG3wY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/CSuaaLlG3wY",
    duration: "2:15",
    category: "Gaming"
  },
  {
    id: 3,
    title: "Gaming Montage",
    thumbnailUrl: "https://img.youtube.com/vi/AeGR_I-dyBQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/AeGR_I-dyBQ",
    duration: "3:30",
    category: "Gaming"
  },
  {
    id: 4,
    title: "Gaming Highlights",
    thumbnailUrl: "https://img.youtube.com/vi/OcAmmUB7slA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/OcAmmUB7slA",
    duration: "2:45",
    category: "Gaming"
  }
];

// Video modal component with player
const VideoPlayerModal = ({ video, isOpen, onClose }: { video: VideoSample | null, isOpen: boolean, onClose: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Handle escape key to close the modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Lock body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      // Restore body scroll when modal is closed
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setIsPlaying(false);
      setShowControls(false);
    } else {
      setIsLoading(false);
      setIsPlaying(false);
      setShowControls(false);
    }
  }, [isOpen]);

  // Handle video events
  const handleLoadedData = () => {
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play failed:", error);
        setIsPlaying(false);
      });
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    if (!isPlaying) {
      setShowControls(false);
    }
  };

  if (!video) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          style={{ backdropFilter: 'blur(5px)' }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-90" onClick={onClose}></div>
          
          {/* Video container */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 rounded-full bg-black bg-opacity-70 p-2 text-white hover:bg-opacity-90 hover:text-[#0CAF60] transition-all"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={24} />
            </motion.button>
            
            {/* Loading spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-20">
                <div className="w-16 h-16 border-4 border-[#0CAF60] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Video player */}
            <iframe
              src={video.videoUrl}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              onLoad={handleLoadedData}
            />
            
            {/* Video info removed when playing */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoSample | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = (video: VideoSample) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    // Small delay to allow exit animation to finish
    setTimeout(() => {
      setSelectedVideo(null);
    }, 300);
  };

  return (
    <section id="video" className="py-24 px-4 bg-gray-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: 'linear-gradient(to right, rgba(12, 175, 96, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(12, 175, 96, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Video player modal */}
      <VideoPlayerModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={closeVideoModal}
      />
      
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
            OUR VIDEO EDITS
          </motion.span>
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="text-[#111111]">Video</span> <span className="bg-gradient-text">Editing</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Professional video editing services that transform raw footage into compelling visual stories that captivate your audience.
          </motion.p>
        </motion.div>
        
        {/* Video Samples Grid */}
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {videoSamples.map((video, index) => (
            <motion.div 
              key={video.id}
              variants={fadeIn('up', 'tween', index * 0.1, 0.6)}
              className="video-card bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 group hover:shadow-lg"
              style={{ boxShadow: '0 10px 20px -5px rgba(12, 175, 96, 0.07)' }}
            >
              <div 
                className="relative h-56 md:h-72 overflow-hidden cursor-pointer"
                onClick={() => openVideoModal(video)}
              >
                {/* Category tag */}
                <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-70 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {video.category}
                </div>
                
                {/* Duration */}
                <div className="absolute bottom-4 right-4 z-10 bg-black bg-opacity-70 text-white text-xs font-medium px-2 py-1 rounded-md">
                  {video.duration}
                </div>
                
                <img 
                  src={video.thumbnailUrl} 
                  alt={`${video.title} thumbnail`} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* New hover overlay with play icon */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300 ease-in-out"></div>
                
                {/* Play icon that appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="group-hover:opacity-100 opacity-0 transition-all duration-300 ease-out"
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg" 
                      style={{ boxShadow: '0 0 30px rgba(12, 175, 96, 0.4)' }}>
                      <Play className="text-[#0CAF60] h-7 w-7 ml-1" />
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl">{video.title}</h3>
              </div>
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
            Get Professional Video Editing
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
