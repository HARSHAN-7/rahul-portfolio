import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { sampleGallery } from '../data/galleryData';
import { GalleryItem } from '../types';
import { LightboxModal } from '../components/LightboxModal';

export const GalleryPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', labelTa: 'அனைத்தும்', labelEn: 'All Photos' },
    { key: 'portrait', labelTa: 'புகைப்படம்', labelEn: 'Portraits' },
    { key: 'event', labelTa: 'இலக்கிய நிகழ்வு', labelEn: 'Events' },
    { key: 'desk', labelTa: 'எழுத்து இடம்', labelEn: 'Writing Desk' },
    { key: 'launch', labelTa: 'நூல் வெளியீடு', labelEn: 'Book Launch' },
  ];

  const filteredItems = sampleGallery.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <div className="pt-36 pb-28 max-w-7xl mx-auto px-6 md:px-12 space-y-16 bg-white text-slate-900">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[2px] bg-[#FF3B00]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] font-extrabold">
            PHOTO GALLERY (10 PHOTOS) —
          </span>
        </div>
        <h1 className="font-slanted text-4xl md:text-6xl uppercase text-slate-900 tracking-tight">
          {t('galleryTitle')}
        </h1>
        <p className="font-serif italic text-lg text-slate-600 max-w-2xl">
          {t('gallerySubtitle')}
        </p>
      </div>

      {/* Filter Category Pills */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1 border-b border-slate-200 pb-4">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.key;
          const label = language === 'ta' ? cat.labelTa : cat.labelEn;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2.5 rounded-sm text-xs font-mono font-bold tracking-wider transition-all uppercase whitespace-nowrap ${
                isSelected
                  ? 'bg-[#FF3B00] text-white shadow-md'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => {
          const title = language === 'ta' ? item.titleTa : item.titleEn;
          const caption = language === 'ta' ? item.captionTa : item.captionEn;

          return (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative overflow-hidden bg-slate-900 rounded-sm aspect-[4/3] shadow-md cursor-pointer border-2 border-transparent hover:border-[#FF3B00] transition-all"
            >
              <img
                src={item.imageUrl}
                alt={title}
                className="w-full h-full object-cover grayscale contrast-125 filter group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1 z-10">
                <span className="text-[10px] font-mono text-[#FF3B00] uppercase tracking-widest font-extrabold">
                  {item.year} • {language === 'ta' ? item.categoryTa : item.categoryEn}
                </span>
                <h3 className="font-slanted text-xl uppercase font-bold text-white">
                  {title}
                </h3>
                <p className="text-xs font-serif italic text-slate-300 line-clamp-1">
                  "{caption}"
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      <LightboxModal item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
};
