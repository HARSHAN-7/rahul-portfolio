import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Type, Moon, Sun, BookOpen, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sampleWritings } from '../data/writingsData';
import { ReadingProgressBar } from '../components/ReadingProgressBar';

export const WritingDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const writing = sampleWritings.find((w) => w.slug === slug) || sampleWritings[0];
  const currentIndex = sampleWritings.findIndex((w) => w.slug === writing.slug);
  const prevWriting = currentIndex > 0 ? sampleWritings[currentIndex - 1] : null;
  const nextWriting = currentIndex < sampleWritings.length - 1 ? sampleWritings[currentIndex + 1] : null;

  // Customization Reading Controls
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('lg');
  const [themeMode, setThemeMode] = useState<'paper' | 'dark' | 'sepia'>('paper');
  const [copied, setCopied] = useState(false);

  const title = language === 'ta' ? writing.titleTa : writing.titleEn;
  const category = language === 'ta' ? writing.categoryTa : writing.categoryEn;
  const content = language === 'ta' ? writing.contentTa : writing.contentEn;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: writing.excerptTa,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Font size mapping
  const fontSizeClasses = {
    sm: 'text-base leading-relaxed',
    base: 'text-lg leading-loose',
    lg: 'text-xl leading-loose',
    xl: 'text-2xl leading-loose',
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      themeMode === 'dark'
        ? 'reading-theme-dark'
        : themeMode === 'sepia'
        ? 'reading-theme-sepia'
        : 'bg-[#FAF7F2] text-[#1C1A17]'
    }`}>
      {/* Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Floating Reader Controls Bar */}
      <div className="sticky top-20 z-40 max-w-4xl mx-auto px-6 py-3 my-4">
        <div className="flex items-center justify-between p-3 rounded-full border border-[#8C6D46]/30 bg-[#FAF7F2]/90 backdrop-blur-md shadow-md text-xs font-mono text-[#1C1A17] paper-card">
          <button
            onClick={() => navigate('/writings')}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full hover:bg-[#8C6D46]/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#8C6D46]" />
            <span className="hidden sm:inline">{language === 'ta' ? 'திரும்பு' : 'Back'}</span>
          </button>

          {/* Controls: Font size & Theme */}
          <div className="flex items-center gap-4">
            {/* Font Size Toggle */}
            <div className="flex items-center gap-1 border-r border-[#8C6D46]/20 pr-3">
              <Type className="w-3.5 h-3.5 text-[#8C6D46] mr-1" />
              {(['sm', 'base', 'lg', 'xl'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`w-6 h-6 rounded text-[11px] font-bold transition-colors ${
                    fontSize === size ? 'bg-[#8C6D46] text-white' : 'hover:bg-stone-200/50'
                  }`}
                >
                  {size === 'sm' ? 'S' : size === 'base' ? 'M' : size === 'lg' ? 'L' : 'XL'}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setThemeMode('paper')}
                className={`w-6 h-6 rounded-full border border-[#8C6D46] bg-[#FAF7F2] ${themeMode === 'paper' ? 'ring-2 ring-[#8C6D46]' : ''}`}
                title="Paper Mode"
              />
              <button
                onClick={() => setThemeMode('sepia')}
                className={`w-6 h-6 rounded-full border border-[#8C6D46] bg-[#F3EBDD] ${themeMode === 'sepia' ? 'ring-2 ring-[#8C6D46]' : ''}`}
                title="Sepia Mode"
              />
              <button
                onClick={() => setThemeMode('dark')}
                className={`w-6 h-6 rounded-full border border-stone-600 bg-[#161513] ${themeMode === 'dark' ? 'ring-2 ring-[#8C6D46]' : ''}`}
                title="Dark Mode"
              />
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#8C6D46]/10 text-[#8C6D46] hover:bg-[#8C6D46]/20 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? (language === 'ta' ? 'நகலெடுக்கப்பட்டது' : 'Copied') : (language === 'ta' ? 'பகிர்' : 'Share')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        {/* Article Meta Header */}
        <header className="space-y-6 border-b border-[#8C6D46]/20 pb-8 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-[#8C6D46]">
            <span className="px-3 py-1 rounded-full bg-[#8C6D46]/10 uppercase font-semibold">
              {category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {writing.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {writing.readingTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight">
            {title}
          </h1>

          <div className="flex items-center justify-center sm:justify-start gap-3 pt-2 text-sm font-mono text-stone-500">
            <span className="w-8 h-[1px] bg-[#8C6D46]" />
            <span>எழுதியவர்: <strong className="text-[#8C6D46]">{t('authorName')}</strong></span>
          </div>
        </header>

        {/* Content Body */}
        <div className={`font-serif space-y-6 ${fontSizeClasses[fontSize]}`}>
          {writing.isPoem ? (
            <div className="p-8 md:p-12 border-l-2 border-[#8C6D46] bg-[#8C6D46]/5 rounded-xs space-y-4 italic whitespace-pre-line leading-relaxed">
              {content.join('\n')}
            </div>
          ) : (
            content.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? 'tamil-dropcap text-justify' : 'text-justify'}
              >
                {paragraph}
              </p>
            ))
          )}
        </div>

        {/* Article Footer & Author Signature */}
        <footer className="pt-12 border-t border-[#8C6D46]/20 space-y-12">
          <div className="p-6 bg-[#8C6D46]/10 rounded-xs flex items-center justify-between font-serif">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#8C6D46]">
                {t('authorName')} Digital Archive
              </p>
              <p className="text-sm text-stone-600 italic">
                வாசித்தமைக்கு நன்றி.
              </p>
            </div>
            <div className="font-serif text-xl font-bold italic text-[#8C6D46]">
              அரவிந்தன்
            </div>
          </div>

          {/* Next / Previous Writing Pagination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-serif">
            {prevWriting ? (
              <Link
                to={`/writings/${prevWriting.slug}`}
                className="p-4 border border-[#8C6D46]/30 rounded-xs hover:border-[#8C6D46] transition-colors space-y-1 group"
              >
                <span className="text-xs font-mono text-[#8C6D46] block uppercase">
                  ← முந்தைய படைப்பு
                </span>
                <span className="font-bold block group-hover:text-[#8C6D46] transition-colors">
                  {language === 'ta' ? prevWriting.titleTa : prevWriting.titleEn}
                </span>
              </Link>
            ) : <div />}

            {nextWriting ? (
              <Link
                to={`/writings/${nextWriting.slug}`}
                className="p-4 border border-[#8C6D46]/30 rounded-xs hover:border-[#8C6D46] transition-colors space-y-1 text-right group"
              >
                <span className="text-xs font-mono text-[#8C6D46] block uppercase">
                  அடுத்த படைப்பு →
                </span>
                <span className="font-bold block group-hover:text-[#8C6D46] transition-colors">
                  {language === 'ta' ? nextWriting.titleTa : nextWriting.titleEn}
                </span>
              </Link>
            ) : <div />}
          </div>
        </footer>
      </article>
    </div>
  );
};
