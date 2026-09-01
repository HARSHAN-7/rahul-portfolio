import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, Copy, Check, Share2 } from 'lucide-react';
import { sampleQuotes } from '../data/quotesData';
import { useLanguage } from '../context/LanguageContext';
import { Link as RouterLink } from 'react-router-dom';

export const QuotesSection: React.FC = () => {
  const { language } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Category filter chips without "All" option
  const categories = [
    { id: 'book-voice', labelTa: '📖 புத்தகம் தன்னைப் பற்றி', labelEn: '📖 The Book Speaks' },
    { id: 'love', labelTa: '❤️ காதல் & பிரிவு', labelEn: '❤️ Love & Longing' },
    { id: 'philosophy', labelTa: '⏳ தத்துவம் & சமூகம்', labelEn: '⏳ Philosophy & Society' },
    { id: 'nature', labelTa: '🌳 இயற்கை & காலம்', labelEn: '🌳 Nature & Time' },
    { id: 'mind', labelTa: '🧠 மனம் & தத்துவம்', labelEn: '🧠 Mind & Reflection' },
  ];

  // Default active category set to first topic (No 'All' option)
  const [activeCategory, setActiveCategory] = useState<string>('book-voice');

  const filteredQuotes = sampleQuotes.filter((q) => q.categoryKey === activeCategory);

  const handleCopyQuote = (id: string, textTa: string, meaningTa: string) => {
    const formatted = `"${textTa}"\n\nபொருள்: ${meaningTa}\n— ராகுல் செபாஸ்டியன் (எண்ணங்களின் குப்பைக் கூடம்)\nhttps://rahulsebastian.com`;
    navigator.clipboard.writeText(formatted);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShareWhatsApp = (textTa: string, meaningTa: string) => {
    const text = `"${textTa}"\n\nபொருள்: ${meaningTa}\n— ராகுல் செபாஸ்டியன் (எண்ணங்களின் குப்பைக் கூடம்)\nhttps://rahulsebastian.com`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-14 md:py-18 bg-slate-50 text-slate-900 border-y border-slate-200 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4 gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#DC2626] font-extrabold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              சொல்லில் பிறந்த சிந்தனைகள் — SIGNATURE QUOTES & MEANINGS
            </span>
            <h2 className="font-slanted text-3xl md:text-5xl uppercase tracking-tight text-slate-900">
              SIGNATURE <span className="text-[#DC2626]">QUOTES</span> & MEANINGS
            </h2>
            <p className="font-serif italic text-xs text-slate-600 max-w-xl">
              "ராகுல் செபாஸ்டியன் எழுதிய 'எண்ணங்களின் குப்பைக் கூடம்' நூலிலிருந்து தேர்ந்தெடுக்கப்பட்ட பொன்மொழிகளும் அவற்றின் ஆழமான பொருளும்."
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#DC2626]">
            <Compass className="w-4 h-4 text-[#DC2626]" />
            <span>EXCERPTS & MEANINGS FROM ENNANGALIN KUPPAI KOODAM</span>
          </div>
        </div>

        {/* Interactive Filter Pills (No 'All' Option) */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#DC2626] text-white shadow-md scale-105'
                  : 'bg-white text-slate-900 border border-slate-200 hover:border-[#DC2626] hover:text-[#DC2626]'
              }`}
            >
              {language === 'ta' ? cat.labelTa : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Quotes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredQuotes.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="bg-white rounded-sm border-t-4 border-[#DC2626] border-x border-b border-slate-200 p-6 space-y-4 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between card-notch"
              >
                <div className="space-y-3">
                  
                  {/* Category Badge & Topic & Action Buttons */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-serif text-[#DC2626] flex items-center gap-1.5">
                      <span>{item.emoji}</span>
                      <span>{language === 'ta' ? item.categoryTa : item.categoryEn}</span>
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleCopyQuote(item.id, item.quoteTa, item.meaningTa)}
                        title="Copy Quote & Meaning"
                        className="p-1.5 rounded bg-slate-100 text-slate-700 hover:bg-[#DC2626] hover:text-white transition-colors"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => handleShareWhatsApp(item.quoteTa, item.meaningTa)}
                        title="Share on WhatsApp"
                        className="p-1.5 rounded bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Primary Quote Content */}
                  <div className="p-4 bg-slate-50 rounded border-l-4 border-[#DC2626] font-serif text-base sm:text-lg text-slate-900 leading-relaxed italic whitespace-pre-line shadow-xs">
                    "{item.quoteTa}"
                  </div>

                  {/* English Translation */}
                  <p className="text-xs font-serif text-slate-600 italic px-1">
                    "{item.quoteEn}"
                  </p>

                  {/* Dedicated Meaning Section (பொருள் / Meaning) */}
                  <div className="p-3.5 bg-red-50/60 rounded border border-red-100 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#DC2626] font-extrabold block tracking-wider">
                      {language === 'ta' ? 'பொருள் (MEANING):' : 'MEANING:'}
                    </span>
                    <p className="font-sans text-xs text-slate-800 leading-relaxed">
                      {language === 'ta' ? item.meaningTa : item.meaningEn}
                    </p>
                  </div>

                </div>

                {/* Card Footer Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500 font-bold">
                    {language === 'ta'
                      ? item.relatedPoemTitleTa || 'எண்ணங்களின் குப்பைக் கூடம்'
                      : item.relatedPoemTitleEn || 'Ennangalin Kuppai Koodam'}
                  </span>
                  <RouterLink
                    to={item.relatedPoemSlug ? `/writings/${item.relatedPoemSlug}` : '/writings'}
                    className="text-[#DC2626] hover:text-slate-900 font-extrabold flex items-center gap-1 transition-colors"
                  >
                    <span>{language === 'ta' ? 'கவிதை வாசிக்க →' : 'Read Poem →'}</span>
                  </RouterLink>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
