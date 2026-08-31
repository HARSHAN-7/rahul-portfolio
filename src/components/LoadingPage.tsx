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
    }, 8000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-black w-screen h-screen overflow-hidden flex items-center justify-center"
        >
          {/* Full Screen MP4 Loading Video (Muted, No Sound, No Skip Button, Full Screen Cover) */}
          <video
            ref={videoRef}
            src="/sign.mp4"
            autoPlay
            muted
            playsInline
            controls={false}
            onEnded={handleFinish}
            className="w-full h-full object-cover absolute inset-0 z-10"
          />

          {/* Bottom Subtle Overlay Bar */}
          <div className="absolute bottom-8 z-20 flex flex-col items-center gap-2">
            <span className="text-xs font-mono text-white/90 uppercase tracking-widest font-extrabold bg-black/60 px-4 py-1.5 rounded backdrop-blur-md border border-white/20">
              RAHUL SEBASTIAN • LOADING ARCHIVE
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
