import React, { useState } from 'react';
import { Award as AwardIcon, Calendar, Building2, CheckCircle2, Eye, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sampleAwards } from '../data/awardsData';
import { Award } from '../types';

export const AwardsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-6 md:px-12 space-y-12 bg-white text-slate-900">
      
      {/* Lightbox for Certificates & Stage Photos */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full bg-slate-900 p-2 rounded border border-slate-700">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-white hover:bg-[#FF3B00] transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedImage} alt="Certificate Proof" className="w-full max-h-[85vh] object-contain rounded" />
          </div>
        </div>
      )}

      {/* Header */}
      <div className="border-b border-slate-200 pb-4 space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-6 h-[2px] bg-[#FF3B00]" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF3B00] font-extrabold">
            HONOURS & RECOGNITIONS —
          </span>
        </div>
        <h1 className="font-slanted text-4xl md:text-5xl uppercase text-slate-900 tracking-tight">
          {t('awardsTitle')}
        </h1>
        <p className="font-serif italic text-sm text-slate-600 max-w-2xl">
          {t('awardsSubtitle')}
        </p>
      </div>

      {/* Awards List */}
      <div className="space-y-12">
        {sampleAwards.map((award) => {
          const title = language === 'ta' ? award.titleTa : award.titleEn;
          const org = language === 'ta' ? award.organizationTa : award.organizationEn;
          const desc = language === 'ta' ? award.descriptionTa : award.descriptionEn;
          const citation = language === 'ta' ? award.citationTa : award.citationEn;

          return (
            <div
              key={award.id}
              className="p-6 md:p-10 bg-slate-900 text-white rounded-sm border-t-4 border-[#FF3B00] shadow-xl space-y-6 card-notch"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-[#FF3B00] flex items-center justify-center text-white font-bold">
                    <AwardIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-slanted text-2xl font-extrabold uppercase text-white tracking-wide">
                      {title}
                    </h2>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                      {org}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-extrabold text-black bg-[#FF3B00] px-4 py-1.5 rounded-sm self-start sm:self-center uppercase">
                  YEAR {award.year}
                </span>
              </div>

              <p className="font-serif text-sm md:text-base text-slate-300 leading-relaxed">
                {desc}
              </p>

              {citation && (
                <div className="p-4 bg-slate-800 border-l-4 border-[#FF3B00] text-xs font-serif italic text-white rounded-r">
                  <strong className="font-mono not-italic uppercase text-[#FF3B00] font-bold block mb-1">OFFICIAL CITATION:</strong>
                  "{citation}"
                </div>
              )}

              {/* Real Photo Proofs Grid */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-[#FF3B00] uppercase tracking-widest font-extrabold block">
                  REAL CERTIFICATE & CEREMONY PROOFS —
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {award.imageUrl && (
                    <div
                      onClick={() => setSelectedImage(award.imageUrl!)}
                      className="group relative overflow-hidden rounded bg-slate-950 aspect-[16/10] border border-slate-800 cursor-pointer hover:border-[#FF3B00] transition-colors"
                    >
                      <img src={award.imageUrl} alt="Stage Ceremony Photo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-bold uppercase gap-1.5">
                        <Eye className="w-4 h-4 text-[#FF3B00]" />
                        <span>VIEW STAGE CEREMONY PHOTO</span>
                      </div>
                    </div>
                  )}

                  {award.certificateUrl && (
                    <div
                      onClick={() => setSelectedImage(award.certificateUrl!)}
                      className="group relative overflow-hidden rounded bg-slate-950 aspect-[16/10] border border-slate-800 cursor-pointer hover:border-[#FF3B00] transition-colors"
                    >
                      <img src={award.certificateUrl} alt="Framed Certificate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-bold uppercase gap-1.5">
                        <Eye className="w-4 h-4 text-[#FF3B00]" />
                        <span>VIEW FRAMED CERTIFICATE</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
