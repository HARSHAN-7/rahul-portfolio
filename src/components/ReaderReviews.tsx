import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  commentTa: string;
  commentEn: string;
  date: string;
}

const sampleReviews: Review[] = [
  {
    id: '1',
    name: 'கவிஞர் மு. இளங்கோவன்',
    role: 'இலக்கிய விமர்சகர்',
    location: 'ஈரோடு',
    rating: 5,
    commentTa: 'ராகுல் செபாஸ்டியனின் "எண்ணங்களின் குப்பைக் கூடம்" கவிதைத் தொகுதி நவீன தமிழ் கவிதை உலகில் ஒரு புதிய அத்தியாயம். பொறியியல் சிந்தனையும் கவிதை மனமும் இணையும் இடம் அருமை.',
    commentEn: 'Rahul Sebastian\'s "Ennangalin Kuppai Koodam" is a groundbreaking milestone in modern Tamil poetry. The synthesis of analytical thought and poetic passion is magnificent.',
    date: '2026',
  },
  {
    id: '2',
    name: 'அனிதா குமார்',
    role: 'வாசகர்',
    location: 'கோயம்புத்தூர்',
    rating: 5,
    commentTa: 'ஒவ்வொரு கவிதையும் மனதில் ஆழமான தாக்கத்தை ஏற்படுத்துகிறது. வாழ்க்கை தத்துவங்களையும் உணர்ச்சிகளையும் இவ்வளவு எளிய வரிகளில் விளக்கியிருப்பது மிக அழகு.',
    commentEn: 'Every poem leaves a profound impression. Explaining complex life philosophy in simple yet poignant verses is truly remarkable.',
    date: '2026',
  },
  {
    id: '3',
    name: 'சுரேஷ் கார்த்திக்',
    role: 'தமிழ் ஆசிரியர்',
    location: 'சென்னை',
    rating: 5,
    commentTa: 'மனுஷ்யபுத்திரனின் தாக்கத்தோடு தன் சொந்தக் குரலையும் அழுத்தமாகப் பதிவு செய்திருக்கிறார் ஈரோடு கவிஞர் ராகுல் செபாஸ்டியன்.',
    commentEn: 'With subtle inspiration from Manushyaputhiran, Erode poet Rahul Sebastian presents an unmistakable, powerful voice of his own.',
    date: '2026',
  },
];

export const ReaderReviews: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sampleReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sampleReviews.length) % sampleReviews.length);
  };

  const current = sampleReviews[currentIndex];

  return (
    <section className="bg-slate-900 text-white py-12 sm:py-16 border-t border-[#DC2626] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DC2626] bg-black/60 text-[10px] sm:text-xs font-mono text-[#DC2626] uppercase font-extrabold">
            <MessageCircle className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>{language === 'ta' ? 'வாசகர்களின் கருத்துக்கள்' : 'READER REVIEWS & CRITIQUES'}</span>
          </div>

          <h2 className="font-slanted text-2xl sm:text-4xl uppercase text-white tracking-tight">
            WHAT READERS <span className="text-[#DC2626]">SAY</span>
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-slate-400">
            "எண்ணங்களின் குப்பைக் கூடம் கவிதைத் தொகுதி பற்றிய வாசகர்கள் மற்றும் விமர்சகர்களின் பார்வைகள்..."
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-3xl mx-auto bg-slate-950 p-6 sm:p-10 rounded border border-slate-800 shadow-2xl relative">
          <Quote className="w-10 h-10 text-[#DC2626]/20 absolute top-4 left-4" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 relative z-10"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#DC2626] text-[#DC2626]" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-base sm:text-lg italic text-slate-200 leading-relaxed">
                "{language === 'ta' ? current.commentTa : current.commentEn}"
              </blockquote>

              {/* Reviewer Info */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-white text-sm font-sans uppercase">
                    {current.name}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400">
                    {current.role} • {current.location}
                  </p>
                </div>

                <span className="text-[10px] font-mono text-[#DC2626] uppercase font-bold">
                  {current.date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              {sampleReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-[#DC2626] w-6' : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded bg-slate-900 border border-slate-700 text-white hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="p-2 rounded bg-slate-900 border border-slate-700 text-white hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                aria-label="Next Review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
