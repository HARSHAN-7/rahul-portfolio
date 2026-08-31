import React from 'react';
import { motion } from 'framer-motion';

interface AudioEqualizerProps {
  isPlaying: boolean;
}

export const AudioEqualizer: React.FC<AudioEqualizerProps> = ({ isPlaying }) => {
  return (
    <div className="flex items-end gap-1 h-3.5 px-1">
      {[0.4, 0.9, 0.6, 1.0, 0.5].map((heightScale, idx) => (
        <motion.div
          key={idx}
          className="w-0.5 bg-[#D4AF37] rounded-full"
          animate={{
            height: isPlaying ? ['20%', `${heightScale * 100}%`, '20%'] : '20%',
          }}
          transition={{
            repeat: isPlaying ? Infinity : 0,
            duration: 0.6 + idx * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
