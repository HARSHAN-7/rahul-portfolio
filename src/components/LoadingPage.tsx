import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleFinish = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const isMobileDevice = window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // On mobile, keep loader max 1.5 seconds so mobile users never see a blank/black screen!
    const maxTimeout = isMobileDevice ? 1500 : 4000;

    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, maxTimeout);

    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .then(() => {
          // If video plays successfully, finish when ended or after 3.5s max
          setTimeout(handleFinish, 3500);
        })
        .catch(() => {
          // If auto-play blocked on mobile, finish immediately
          handleFinish();
        });
    }

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onClick={handleFinish}
          onTouchStart={handleFinish}
          className="fixed inset-0 z-[100] bg-black w-screen h-screen overflow-hidden flex items-center justify-center cursor-pointer p-0 select-none"
        >
          {/* Responsive Mobile & Desktop Loading Video */}
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              src="/sign.mp4"
              autoPlay
              muted
              playsInline
              controls={false}
              onEnded={handleFinish}
              onError={handleFinish}
              onStalled={handleFinish}
              className="w-full h-full object-contain max-w-full max-h-full pointer-events-none z-10"
            />
          </div>

          {/* Bottom Overlay Bar */}
          <div className="absolute bottom-6 sm:bottom-8 z-20 flex flex-col items-center gap-2 px-4 text-center">
            <span className="text-[10px] sm:text-xs font-mono text-white/90 uppercase tracking-widest font-extrabold bg-black/80 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
              RAHUL SEBASTIAN • LOADING ARCHIVE
            </span>
            <span className="text-[9px] font-mono text-slate-400 block sm:hidden">
              (Tap anywhere to skip)
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
