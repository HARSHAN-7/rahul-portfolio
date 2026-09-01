import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Feather, Award, Newspaper, Image as ImageIcon, Sparkles, Flame, Eye, Download, GraduationCap, Heart, Mail, Phone, Volume2, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AuthorPortrait } from '../components/AuthorPortrait';
import { BookCover3D } from '../components/BookCover3D';
import { InteractiveBookModal } from '../components/InteractiveBookModal';
import { QuotesSection } from '../components/QuotesSection';
import { SEO } from '../components/SEO';
import { sampleWritings } from '../data/writingsData';
import { sampleBooks } from '../data/booksData';
import { sampleTimeline } from '../data/timelineData';
import { sampleAwards } from '../data/awardsData';
import { samplePublications } from '../data/publicationsData';
import { sampleGallery } from '../data/galleryData';
import { Book } from '../types';
import { InstagramIcon } from '../components/SocialIcons';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedModalBook, setSelectedModalBook] = useState<Book | null>(null);
  const [isPlayingAudioPoem, setIsPlayingAudioPoem] = useState(false);

  const toggleAudioReading = () => {
    setIsPlayingAudioPoem(!isPlayingAudioPoem);
  };

  return (
    <div className="space-y-0 pb-0 relative z-10 bg-white text-slate-900 overflow-x-hidden">
      
      {/* Dynamic SEO Meta Tag Injector for Top Search & AI Rankings */}
      <SEO
        title="Rahul Sebastian | Best Erode Writer & Poet | ராகுல் செபாஸ்டியன் ஈரோடு"
        description="Official Website of Rahul Sebastian (Rahul Erode / ராகுல் செபாஸ்டியன்) — Renowned Author & Poet from Erode, Author of 'Ennangalin Kuppai Koodam' published by Nerpadapesu Publication."
        keywords="Rahul, Rahul Erode, Rahul Sebastian Erode, Best Erode Writer, Rahul Sebastian, ராகுல், ராகுல் ஈரோடு, ராகுல் செபாஸ்டியன் ஈரோடு, ஈரோடு சிறந்த எழுத்தாளர், Ennangalin Kuppai Koodam"
      />

      {/* 3D Book Inspection Modal */}
      <InteractiveBookModal book={selectedModalBook} onClose={() => setSelectedModalBook(null)} />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (OPTIMIZED FOR MOBILE & DESKTOP) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] sm:min-h-screen bg-white text-slate-900 pt-20 sm:pt-24 pb-12 flex items-center overflow-hidden border-b border-slate-200">
        
        {/* Full Screen Image Canvas Layer - Optimized Mobile Fitting */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src="/rahul_hero_bg.jpg"
            alt="Rahul Sebastian Hero Background Artwork"
            className="w-full h-full object-cover object-top sm:object-center bg-white"
          />
        </div>

        {/* Soft Mobile & Desktop White Gradient Overlay for Perfect Contrast */}
        <div className="absolute inset-0 sm:inset-y-0 sm:left-0 w-full sm:w-2/3 md:w-3/5 lg:w-1/2 bg-gradient-to-b sm:bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-20 w-full">
          <div className="max-w-xs sm:max-w-lg space-y-3 sm:space-y-4">
            
            {/* Top Ribbon */}
            <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-mono text-[#DC2626] font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>{language === 'ta' ? 'எழுத்து · சிந்தனை · தாக்கம்' : 'WORDS · IDEAS · IMPACT'}</span>
            </div>

            {/* Main Tamil / English Headlines */}
            <div className="space-y-0.5">
              {language === 'ta' ? (
                <>
                  <h2 className="font-serif text-sm sm:text-xl lg:text-2xl font-bold leading-snug text-slate-900">
                    எழுத்தில் பிறக்கும் உலகங்கள்.
                  </h2>
                  <h2 className="font-serif text-sm sm:text-xl lg:text-2xl font-bold leading-snug text-[#DC2626]">
                    வார்த்தைகளில் வாழும் உணர்வுகள்.
                  </h2>
                </>
              ) : (
                <>
                  <h2 className="font-serif text-sm sm:text-xl lg:text-2xl font-bold leading-snug text-slate-900">
                    WORLDS BORN IN WRITING.
                  </h2>
                  <h2 className="font-serif text-sm sm:text-xl lg:text-2xl font-bold leading-snug text-[#DC2626]">
                    EMOTIONS LIVING IN WORDS.
                  </h2>
                </>
              )}
              <div className="w-10 sm:w-12 h-[2.5px] bg-[#DC2626] mt-1" />
            </div>

            {/* Author Name Heading */}
            <div className="space-y-0 pt-1">
              <h1 className="font-serif font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-[0.9] text-slate-900 uppercase">
                {language === 'ta' ? 'ராகுல்' : 'RAHUL'}
              </h1>
              <h1 className="font-serif font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-[0.9] text-[#DC2626] uppercase">
                {language === 'ta' ? 'செபாஸ்டியன்' : 'SEBASTIAN'}
              </h1>
              <div className="pt-1 text-[8px] sm:text-[10px] font-mono tracking-[0.18em] text-[#DC2626] font-extrabold uppercase">
                {language === 'ta'
                  ? 'எழுத்தாளர்  ·  கவிஞர்  ·  ஈரோடு'
                  : 'WRITER  ·  POET  ·  ERODE'}
              </div>
            </div>

            {/* Subtext Quote */}
            <p className="font-serif italic text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xs sm:max-w-sm">
              {language === 'ta'
                ? '"சொற்கள் என்பது வெறும் எழுத்துக்கள் அல்ல, அவை உணர்ச்சிகளின் வாழ்க்கை."'
                : '"Words are not just letters, They are the life of emotions."'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <RouterLink
                to="/books"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#DC2626] text-white font-sans text-xs font-bold tracking-wide hover:bg-[#B91C1C] transition-all shadow-md"
              >
                <span>{language === 'ta' ? 'படைப்புகளைப் பார்க்க' : 'Explore My Works'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </RouterLink>

              <RouterLink
                to="/writings"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-900 text-slate-900 bg-white/90 backdrop-blur-xs font-sans text-xs font-bold tracking-wide hover:bg-slate-900 hover:text-white transition-all shadow-xs"
              >
                <span>{language === 'ta' ? 'கவிதைகளைப் படிக்க 📖' : 'Read My Poems 📖'}</span>
              </RouterLink>
            </div>

            {/* Signature & Motto Bar */}
            <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[9px] sm:text-[10px] font-mono text-slate-600 max-w-xs sm:max-w-sm">
              <span className="font-serif italic text-xs sm:text-base font-bold text-[#DC2626]">
                {language === 'ta' ? 'ராகுல் செபாஸ்டியன் (ஈரோடு)' : 'Rahul Sebastian (Erode)'}
              </span>
              <span className="tracking-widest font-bold uppercase text-[7px] sm:text-[8px]">
                BETTER WORDS • BRIGHTER TOMORROW
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT / என்னைப் பற்றி */}
      {/* ========================================================================= */}
      <section className="bg-slate-100 py-12 md:py-16 relative clip-angled-right border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#DC2626] font-extrabold">
                  ABOUT ME — என்னைப் பற்றி (ERODE WRITER)
                </span>
              </div>

              <h2 className="font-slanted text-3xl sm:text-4xl uppercase text-slate-900 tracking-tight">
                RAHUL <span className="text-[#DC2626]">SEBASTIAN</span>
              </h2>

              <p className="font-sans text-sm text-slate-700 leading-relaxed">
                {t('introBioSnippet')}
              </p>

              <div className="p-4 bg-white rounded border-l-4 border-[#DC2626] space-y-1 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-[#DC2626] font-bold">
                  WRITING PHILOSOPHY — எழுத்துத் தத்துவம்
                </span>
                <p className="font-serif italic text-xs text-slate-900">
                  "எண்ணங்களின் குப்பைக் கூடம் — மனதை நிரப்ப அல்ல, அதை வெறுமையாக்க எழுதப்பட்ட புத்தகம்."
                </p>
              </div>

              <div className="pt-1">
                <RouterLink
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-slate-900 text-white font-mono text-xs font-extrabold uppercase tracking-wider hover:bg-[#DC2626] transition-colors shadow-sm"
                >
                  <span>மேலும் அறிய / FULL BIOGRAPHY →</span>
                </RouterLink>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-sm shadow-sm border-t-4 border-[#DC2626] space-y-1.5 card-notch">
                <div className="w-7 h-7 rounded bg-red-50 text-[#DC2626] flex items-center justify-center font-bold text-xs font-mono">
                  01
                </div>
                <h4 className="font-extrabold uppercase text-slate-900 text-xs">
                  ERODE AUTHOR & B.E (EEE)
                </h4>
                <p className="text-[11px] text-slate-600">
                  Engineer & contemporary Erode Tamil poet synthesizing analytical precision with verse.
                </p>
              </div>

              <div className="p-5 bg-white rounded-sm shadow-sm border-t-4 border-slate-900 space-y-1.5">
                <div className="w-7 h-7 rounded bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-xs font-mono">
                  02
                </div>
                <h4 className="font-extrabold uppercase text-slate-900 text-xs">
                  WRITING JOURNEY
                </h4>
                <p className="text-[11px] text-slate-600">
                  Literary voyage from 2019 student awards to 2026 World Record releases.
                </p>
              </div>

              <div className="p-5 bg-white rounded-sm shadow-sm border-t-4 border-slate-900 space-y-1.5">
                <div className="w-7 h-7 rounded bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-xs font-mono">
                  03
                </div>
                <h4 className="font-extrabold uppercase text-slate-900 text-xs">
                  INSPIRATION
                </h4>
                <p className="text-[11px] text-slate-600">
                  Deeply inspired by legendary Tamil writer Manushyaputhiran (மனுஷ்யபுத்திரன்).
                </p>
              </div>

              <div className="p-5 bg-white rounded-sm shadow-sm border-t-4 border-[#DC2626] space-y-1.5 card-notch">
                <div className="w-7 h-7 rounded bg-red-50 text-[#DC2626] flex items-center justify-center font-bold text-xs font-mono">
                  04
                </div>
                <h4 className="font-extrabold uppercase text-slate-900 text-xs">
                  BEST ERODE WRITER
                </h4>
                <p className="text-[11px] text-slate-600">
                  Exploring philosophy, love, pain, happiness, and hidden views of life.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED POEM */}
      {/* ========================================================================= */}
      <section className="bg-slate-950 text-white py-14 md:py-18 relative overflow-hidden border-b border-[#DC2626]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DC2626] bg-black/60 text-[11px] font-mono text-[#DC2626] uppercase font-extrabold">
            <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>தேர்ந்தெடுக்கப்பட்ட கவிதை / FEATURED POEM</span>
          </div>

          <div className="space-y-1">
            <h2 className="font-slanted text-3xl md:text-4xl uppercase text-white tracking-tight">
              எண்ணங்களின் <span className="text-[#DC2626]">குப்பைக் கூடம்</span>
            </h2>
            <p className="font-serif italic text-xs text-slate-400 max-w-xl mx-auto">
              "மனதில் தேங்கியிருக்கும் தேவையற்ற சுமைகளை இறக்கி வைத்து, புதிய எண்ணங்களுக்கும் பார்வைகளுக்கும் இடம் கொடுக்கும் ஒரு மௌனக் குரல்..."
            </p>
          </div>

          <div className="font-serif text-lg sm:text-3xl md:text-4xl text-white font-bold leading-relaxed whitespace-pre-line italic tracking-wide p-4 sm:p-6 border-l-4 border-[#DC2626] bg-slate-900/90 rounded text-left my-4 shadow-2xl">
            {sampleWritings[0].contentTa.join('\n')}
          </div>

          <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-widest font-bold">
            — ராகுல் செபாஸ்டியன் (ஈரோடு, "எண்ணங்களின் குப்பைக் கூடம்", 2026)
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <RouterLink
              to="/writings/ennangalin-kuppai-koodam-extract"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-sm bg-[#DC2626] text-white font-mono text-xs font-extrabold uppercase hover:bg-[#B91C1C] transition-colors shadow-md"
            >
              <span>முழுமையாக வாசிக்க / FULL READING →</span>
            </RouterLink>

            <button
              onClick={toggleAudioReading}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-sm border-2 text-xs font-mono font-extrabold uppercase transition-all ${
                isPlayingAudioPoem
                  ? 'border-[#DC2626] bg-[#DC2626]/20 text-[#DC2626]'
                  : 'border-slate-700 text-slate-300 hover:border-[#DC2626] hover:text-[#DC2626]'
              }`}
            >
              <Volume2 className={`w-4 h-4 ${isPlayingAudioPoem ? 'animate-pulse text-[#DC2626]' : ''}`} />
              <span>{isPlayingAudioPoem ? 'AUDIO PLAYING...' : 'AUDIO POEM PREVIEW'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BOOKS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 space-y-8 bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4 gap-3">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#DC2626] font-extrabold">
              PUBLISHED BOOKS / நூல்கள் —
            </span>
            <h2 className="font-slanted text-3xl md:text-4xl uppercase text-slate-900 tracking-tight">
              BOOKS & <span className="text-[#DC2626]">VOLUMES</span>
            </h2>
          </div>

          <RouterLink
            to="/books"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#DC2626] hover:text-slate-900 font-extrabold transition-colors whitespace-nowrap"
          >
            <span>VIEW BOOK DETAILS →</span>
          </RouterLink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-10 bg-slate-950 text-white rounded-sm border-t-4 border-[#DC2626] shadow-xl card-notch">
          
          <div className="lg:col-span-5 flex justify-center">
            <BookCover3D book={sampleBooks[0]} onClick={() => setSelectedModalBook(sampleBooks[0])} />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#DC2626] font-extrabold uppercase">
                <span className="px-2.5 py-0.5 rounded bg-[#DC2626]/20 border border-[#DC2626] text-white">
                  YEAR {sampleBooks[0].year}
                </span>
                <span>•</span>
                <span>PUBLISHER: {sampleBooks[0].publisherTa}</span>
                <span>•</span>
                <span>ISBN: {sampleBooks[0].isbn}</span>
              </div>

              <h3 className="font-slanted text-2xl md:text-4xl uppercase text-white tracking-tight pt-1">
                {sampleBooks[0].titleTa}
              </h3>
              <p className="font-serif italic text-xs text-slate-300">
                ({sampleBooks[0].titleEn})
              </p>
            </div>

            <p className="font-serif text-sm text-slate-300 whitespace-pre-line leading-relaxed">
              {sampleBooks[0].descriptionTa}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3 border-t border-slate-800">
              <button
                onClick={() => setSelectedModalBook(sampleBooks[0])}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#DC2626] text-white font-mono text-xs font-extrabold uppercase hover:bg-[#B91C1C] transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>3D PREVIEW & EXCERPTS ↓</span>
              </button>

              <a
                href="https://nerpadapesu.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-slate-700 text-white font-mono text-xs font-extrabold uppercase hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
              >
                <span>நேர்படப் பேசு தளத்தில் வாங்க / BUY NOW →</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BEST TOPICS & QUOTES */}
      {/* ========================================================================= */}
      <QuotesSection />

      {/* ========================================================================= */}
      {/* 6. WRITING JOURNEY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 space-y-8 bg-white">
        <div className="border-b border-slate-200 pb-4 space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#DC2626] font-extrabold">
            WRITING JOURNEY / எழுத்துப் பயணம் —
          </span>
          <h2 className="font-slanted text-3xl md:text-4xl uppercase text-slate-900 tracking-tight">
            LITERARY & ACADEMIC <span className="text-[#DC2626]">TIMELINE</span>
          </h2>
        </div>

        <div className="relative border-l-2 border-[#DC2626] ml-4 md:ml-8 space-y-8 pl-6 md:pl-10">
          {sampleTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="relative space-y-1 group"
            >
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-sm bg-[#DC2626] group-hover:scale-125 transition-transform" />

              <span className="text-[11px] font-mono uppercase tracking-widest text-[#DC2626] font-extrabold">
                {item.year}
              </span>
              <h3 className="font-slanted text-xl uppercase text-slate-900 group-hover:text-[#DC2626] transition-colors">
                {language === 'ta' ? item.titleTa : item.titleEn}
              </h3>
              <p className="font-sans text-xs text-slate-700 max-w-2xl leading-relaxed">
                {language === 'ta' ? item.descriptionTa : item.descriptionEn}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. AWARDS & ACHIEVEMENTS */}
      {/* ========================================================================= */}
      <section className="bg-slate-100 py-12 md:py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-300 pb-4 gap-3">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#DC2626] font-extrabold">
                HONOURS & CERTIFICATES —
              </span>
              <h2 className="font-slanted text-3xl md:text-4xl uppercase text-slate-900 tracking-tight">
                AWARDS & <span className="text-[#DC2626]">ACHIEVEMENTS</span>
              </h2>
            </div>

            <RouterLink
              to="/awards"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#DC2626] hover:text-slate-900 font-extrabold transition-colors whitespace-nowrap"
            >
              <span>VIEW ALL CERTIFICATES & PROOFS →</span>
            </RouterLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleAwards.map((award) => (
              <div
                key={award.id}
                className="p-6 bg-slate-950 text-white rounded-sm border-t-4 border-[#DC2626] shadow-xl space-y-4 card-notch flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#DC2626] font-bold">
                    <Award className="w-5 h-5 text-[#DC2626]" />
                    <span className="px-2.5 py-0.5 bg-[#DC2626] text-white rounded-sm text-[10px]">YEAR {award.year}</span>
                  </div>
                  <h3 className="font-slanted text-xl uppercase text-white">
                    {language === 'ta' ? award.titleTa : award.titleEn}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400 uppercase font-bold">
                    ORGANIZATION: {language === 'ta' ? award.organizationTa : award.organizationEn}
                  </p>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {language === 'ta' ? award.descriptionTa : award.descriptionEn}
                  </p>
                </div>

                {award.imageUrl && (
                  <div className="pt-3 border-t border-slate-800 space-y-1">
                    <span className="text-[10px] font-mono text-[#DC2626] uppercase font-bold block">
                      OFFICIAL STAGE CEREMONY PROOF:
                    </span>
                    <div className="aspect-[16/9] rounded overflow-hidden border border-slate-800">
                      <img src={award.imageUrl} alt="Stage Ceremony" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CONTACT */}
      {/* ========================================================================= */}
      <section className="bg-slate-950 text-white py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="p-8 md:p-12 bg-slate-900 rounded-sm border-2 border-[#DC2626] shadow-2xl space-y-8 card-notch">
            
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#DC2626] font-extrabold">
                DIRECT CONTACT — தொடர்பு (ERODE, TAMIL NADU)
              </span>
              <h2 className="font-slanted text-3xl sm:text-5xl uppercase tracking-tight text-white">
                ஒரு உரையாடலைத் <br className="sm:hidden" /> <span className="text-[#DC2626]">தொடங்குவோம்</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                இலக்கியம், புத்தகங்கள், நிகழ்வுகள் அல்லது உரையாடல்கள் குறித்து நேரடியாகத் தொடர்பு கொள்ளலாம்.
              </p>
            </div>

            {/* Direct Interactive Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto font-mono text-xs font-extrabold">
              <a
                href="mailto:rahulsebastian.official@example.com"
                className="p-5 bg-slate-950 border border-slate-800 rounded-sm flex flex-col items-center justify-center gap-2 hover:border-[#DC2626] hover:bg-[#DC2626]/20 transition-all text-center group"
              >
                <Mail className="w-6 h-6 text-[#DC2626] group-hover:scale-110 transition-transform" />
                <span className="text-slate-400 text-[10px] uppercase">EMAIL ME</span>
                <span className="text-white text-xs truncate max-w-full">rahulsebastian.official@example.com</span>
              </a>

              <a
                href="https://wa.me/919488174434"
                target="_blank"
                rel="noreferrer"
                className="p-5 bg-slate-950 border border-slate-800 rounded-sm flex flex-col items-center justify-center gap-2 hover:border-[#DC2626] hover:bg-[#DC2626]/20 transition-all text-center group"
              >
                <Phone className="w-6 h-6 text-[#DC2626] group-hover:scale-110 transition-transform" />
                <span className="text-slate-400 text-[10px] uppercase">WHATSAPP / PHONE</span>
                <span className="text-[#DC2626] text-xs">+91 94881 74434</span>
              </a>

              <a
                href="https://instagram.com/rahul_sebastian1418"
                target="_blank"
                rel="noreferrer"
                className="p-5 bg-slate-950 border border-slate-800 rounded-sm flex flex-col items-center justify-center gap-2 hover:border-[#DC2626] hover:bg-[#DC2626]/20 transition-all text-center group"
              >
                <InstagramIcon className="w-6 h-6 text-[#DC2626] group-hover:scale-110 transition-transform" />
                <span className="text-slate-400 text-[10px] uppercase">INSTAGRAM</span>
                <span className="text-white text-xs">@rahul_sebastian1418</span>
              </a>
            </div>

            <div className="text-center pt-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase font-bold">
                PUBLISHER: NERPADAPESU PUBLICATION (நேர்படப் பேசு பதிப்பகம்)
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
