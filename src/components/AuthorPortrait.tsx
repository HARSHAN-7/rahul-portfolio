import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface AuthorPortraitProps {
  className?: string;
  showVerticalLabel?: boolean;
}

export const AuthorPortrait: React.FC<AuthorPortraitProps> = ({
  className = '',
  showVerticalLabel = true
}) => {
  const { t } = useLanguage();

  return (
    <div className={`relative group ${className}`}>
      {/* Background Slanted Red Shape (Reference Template Style) */}
      <div className="absolute -top-6 -right-6 w-full h-full bg-[#FF3B00] clip-angled-left rounded-sm opacity-95 pointer-events-none transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 shadow-xl" />
      
      {/* Dark Accent Shadow Box */}
      <div className="absolute -bottom-4 -left-4 w-4/5 h-4/5 bg-slate-950 rounded-sm opacity-20 pointer-events-none" />

      {/* Main Image Container */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative overflow-hidden bg-slate-950 shadow-2xl aspect-[3/4] rounded-sm border-2 border-white"
      >
        {/* Real Uploaded Photo of Rahul Sebastian with Image Enhancement Filters */}
        <img
          src="/rahul_sebastian.jpg"
          alt="Rahul Sebastian - Tamil Writer & Poet"
          className="w-full h-full object-cover object-top filter contrast-110 brightness-105 saturate-105 mix-blend-normal group-hover:scale-105 transition-transform duration-700"
        />

        {/* Studio Lighting & Bottom Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Bottom Author Badge */}
        <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1 bg-slate-950/85 p-3.5 rounded-sm backdrop-blur-md border-l-4 border-[#FF3B00] shadow-lg">
          <h3 className="font-slanted text-xl tracking-wide uppercase text-white">
            RAHUL SEBASTIAN
          </h3>
          <p className="text-[10px] font-mono text-slate-300 tracking-wider uppercase font-extrabold">
            B.E (EEE) • TAMIL POET & WRITER
          </p>
        </div>
      </motion.div>

      {/* Vertical Side Tag */}
      {showVerticalLabel && (
        <div className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-90 items-center gap-3 text-[10px] font-mono tracking-widest text-[#FF3B00] uppercase whitespace-nowrap">
          <span className="w-8 h-[2px] bg-[#FF3B00]" />
          <span className="font-extrabold">{t('heroJourneyTag')}</span>
        </div>
      )}
    </div>
  );
};
