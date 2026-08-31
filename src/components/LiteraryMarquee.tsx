import React from 'react';
import { motion } from 'framer-motion';

interface LiteraryMarqueeProps {
  phrases?: string[];
}

export const LiteraryMarquee: React.FC<LiteraryMarqueeProps> = ({
  phrases = [
    'சொற்கள் பேசும் இடம்',
    'கவிதையின் மௌனம்',
    'நினைவுகளின் நிழல்கள்',
    'எழுத்துப் பயணம்',
    'தமிழ் இலக்கியக் காப்பகம்',
    'மழைக்குப் பிறகான நகரம்',
    'மௌனத்தின் மொழி'
  ]
}) => {
  const repeated = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <div className="w-full overflow-hidden bg-[#12100E] border-y border-[#D4AF37]/30 py-3.5 relative z-10 shadow-inner">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      >
        {repeated.map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 font-serif text-sm md:text-base tracking-wider text-[#D4AF37]/80">
            <span>{text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-60" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
