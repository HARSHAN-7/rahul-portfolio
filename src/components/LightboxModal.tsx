import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Tag } from 'lucide-react';
import { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  const { language } = useLanguage();

  if (!item) return null;

  const title = language === 'ta' ? item.titleTa : item.titleEn;
  const category = language === 'ta' ? item.categoryTa : item.categoryEn;
  const caption = language === 'ta' ? item.captionTa : item.captionEn;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-4xl w-full bg-[#161513] border border-stone-800 rounded-sm overflow-hidden text-[#FAF7F2] shadow-2xl flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:text-[#8C6D46] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Left / Top */}
          <div className="md:w-2/3 max-h-[60vh] md:max-h-[80vh] bg-black flex items-center justify-center">
            <img
              src={item.imageUrl}
              alt={title}
              className="w-full h-full object-contain filter grayscale contrast-110"
            />
          </div>

          {/* Details Right / Bottom */}
          <div className="md:w-1/3 p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#8C6D46]">
                <span className="flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.year}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#FAF7F2] leading-tight">
                {title}
              </h3>

              <p className="text-sm font-serif italic text-stone-300 leading-relaxed">
                "{caption}"
              </p>
            </div>

            <div className="pt-4 border-t border-stone-800 text-[11px] font-mono text-stone-500 flex items-center justify-between">
              <span>அரவிந்தன் Archive</span>
              <span className="text-[#8C6D46]">Monochrome Photo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
