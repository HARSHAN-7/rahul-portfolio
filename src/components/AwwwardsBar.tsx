import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Globe, ArrowUp, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AudioEqualizer } from './AudioEqualizer';

interface AwwwardsBarProps {
  onToggleSound: () => void;
  isPlayingSound: boolean;
}

export const AwwwardsBar: React.FC<AwwwardsBarProps> = ({ onToggleSound, isPlayingSound }) => {
  const { language, toggleLanguage } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(Math.round(progress));
      }
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-[92%] sm:w-auto"
        >
          <div className="flex items-center justify-between gap-3 px-5 py-2.5 rounded-full bg-[#0C0B0A]/90 border border-[#D4AF37]/40 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.25)] text-xs font-mono text-stone-200">
            
            {/* Awwwards Badge */}
            <div className="flex items-center gap-2 pr-3 border-r border-[#D4AF37]/25 text-[#D4AF37]">
              <Award className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              <span className="font-bold tracking-widest text-[10px] uppercase hidden sm:inline">
                SOTD • LITERARY ARCHIVE
              </span>
            </div>

            {/* Scroll Dial */}
            <div className="flex items-center gap-2 pr-3 border-r border-[#D4AF37]/25">
              <span className="text-[10px] text-stone-400">SCROLL</span>
              <span className="font-bold text-[#D4AF37] w-8 text-right font-mono">
                {scrollProgress}%
              </span>
            </div>

            {/* Audio Visualizer & Toggle */}
            <button
              onClick={onToggleSound}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all text-[11px]"
            >
              <AudioEqualizer isPlaying={isPlayingSound} />
              {isPlayingSound ? (
                <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
              )}
            </button>

            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all text-[10px] font-bold"
            >
              <Globe className="w-3 h-3 text-[#D4AF37]" />
              <span className={language === 'ta' ? 'text-[#D4AF37]' : 'text-stone-500'}>TA</span>
              <span className="text-stone-600">/</span>
              <span className={language === 'en' ? 'text-[#D4AF37]' : 'text-stone-500'}>EN</span>
            </button>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full bg-[#D4AF37] text-black hover:bg-white transition-all shadow-[0_0_10px_#D4AF37]"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
