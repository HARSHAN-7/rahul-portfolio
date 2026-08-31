import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sampleWritings } from '../data/writingsData';
import { WritingCategory } from '../types';

export const WritingsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<WritingCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: WritingCategory | 'all'; labelTa: string; labelEn: string }[] = [
    { key: 'all', labelTa: 'அனைத்தும்', labelEn: 'All Works' },
    { key: 'poem', labelTa: 'கவிதை', labelEn: 'Poetry' },
    { key: 'story', labelTa: 'சிறுகதை', labelEn: 'Short Stories' },
    { key: 'essay', labelTa: 'கட்டுரை', labelEn: 'Essays' },
    { key: 'reflection', labelTa: 'சிந்தனை', labelEn: 'Reflections' },
  ];

  const filteredWritings = sampleWritings.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const titleMatch =
      item.titleTa.toLowerCase().includes(searchLower) ||
      item.titleEn.toLowerCase().includes(searchLower);
    const excerptMatch =
      item.excerptTa.toLowerCase().includes(searchLower) ||
      item.excerptEn.toLowerCase().includes(searchLower);
    return matchesCategory && (titleMatch || excerptMatch);
  });

  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-6 md:px-12 space-y-8 bg-white text-slate-900">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF3B00] font-extrabold flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          படைப்புத் தொகுப்பு / WRITINGS ARCHIVE
        </span>
        <h1 className="font-slanted text-4xl md:text-5xl uppercase text-slate-900 tracking-tight">
          {t('navWritings')}
        </h1>
        <p className="font-serif italic text-sm text-slate-600 max-w-2xl">
          "{t('featuredWritingsSubtitle')}"
        </p>
      </div>

      {/* Filter Bar & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            const label = language === 'ta' ? cat.labelTa : cat.labelEn;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-sm text-xs font-mono tracking-wider font-extrabold uppercase transition-all whitespace-nowrap ${
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

        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-[#FF3B00] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'ta' ? 'படைப்புகளைத் தேடுக...' : 'Search writings...'}
            className="w-full pl-10 pr-4 py-2 rounded-sm border border-slate-300 bg-slate-50 text-xs font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF3B00]"
          />
        </div>
      </div>

      {/* Grid */}
      {filteredWritings.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-slate-300 rounded-sm">
          <p className="font-serif text-sm text-slate-500">
            {language === 'ta' ? 'தேடப்பட்ட படைப்புகள் எதுவும் கிடைக்கவில்லை.' : 'No writings found matching your search.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWritings.map((writing, idx) => {
            const title = language === 'ta' ? writing.titleTa : writing.titleEn;
            const category = language === 'ta' ? writing.categoryTa : writing.categoryEn;
            const excerpt = language === 'ta' ? writing.excerptTa : writing.excerptEn;

            return (
              <motion.div
                key={writing.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 bg-slate-900 text-white rounded-sm border-t-4 border-[#FF3B00] shadow-md flex flex-col justify-between space-y-4 card-notch group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#FF3B00] font-extrabold">
                    <span className="px-2.5 py-0.5 rounded bg-[#FF3B00]/20 border border-[#FF3B00]/40 uppercase">
                      {category}
                    </span>
                    <span>{writing.year}</span>
                  </div>

                  <h3 className="font-slanted text-xl uppercase text-white group-hover:text-[#FF3B00] transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="font-serif text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FF3B00]" />
                    {writing.readingTime}
                  </span>
                  <Link
                    to={`/writings/${writing.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#FF3B00] font-extrabold uppercase hover:text-white transition-colors"
                  >
                    <span>{t('readBtn')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};
