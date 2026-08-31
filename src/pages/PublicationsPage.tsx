import React from 'react';
import { Newspaper, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { samplePublications } from '../data/publicationsData';

export const PublicationsPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-36 pb-28 max-w-7xl mx-auto px-6 md:px-12 space-y-16 bg-white text-slate-900">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[2px] bg-[#FF3B00]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] font-extrabold">
            MEDIA & PRESS ARCHIVE —
          </span>
        </div>
        <h1 className="font-slanted text-4xl md:text-6xl uppercase text-slate-900 tracking-tight">
          {t('publicationsTitle')}
        </h1>
        <p className="font-serif italic text-lg text-slate-600 max-w-2xl">
          {t('publicationsSubtitle')}
        </p>
      </div>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {samplePublications.map((pub) => {
          const media = language === 'ta' ? pub.mediaNameTa : pub.mediaNameEn;
          const category = language === 'ta' ? pub.categoryTa : pub.categoryEn;
          const title = language === 'ta' ? pub.titleTa : pub.titleEn;
          const excerpt = language === 'ta' ? pub.excerptTa : pub.excerptEn;

          return (
            <div
              key={pub.id}
              className="p-8 bg-slate-900 text-white rounded-sm border-t-4 border-[#FF3B00] shadow-md space-y-6 card-notch"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#FF3B00] font-bold">
                <span className="px-3 py-1 rounded bg-[#FF3B00]/20 border border-[#FF3B00]/40 uppercase">
                  {category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {pub.date}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">
                  MEDIA: {media}
                </span>
                <h3 className="font-slanted text-2xl font-extrabold text-white uppercase">
                  "{title}"
                </h3>
              </div>

              <p className="font-serif text-sm text-slate-300 leading-relaxed">
                {excerpt}
              </p>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">
                  OFFICIAL ARCHIVE
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF3B00] font-extrabold uppercase hover:text-white"
                >
                  <span>READ FEATURE →</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
