import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleFinish = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        setTimeout(handleFinish, 3000);
      });
    }

    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-black w-screen h-screen overflow-hidden flex items-center justify-center p-0"
        >
          {/* Un-zoomed, Responsive Mobile & Desktop Loading Video Container */}
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              src="/sign.mp4"
              autoPlay
              muted
              playsInline
              controls={false}
              onEnded={handleFinish}
              className="w-full h-full object-contain max-w-full max-h-full pointer-events-none z-10"
            />
          </div>

          {/* Bottom Subtle Overlay Bar */}
          <div className="absolute bottom-6 sm:bottom-8 z-20 flex flex-col items-center gap-2 px-4 text-center">
            <span className="text-[10px] sm:text-xs font-mono text-white/90 uppercase tracking-widest font-extrabold bg-black/80 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
              RAHUL SEBASTIAN • LOADING ARCHIVE
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
