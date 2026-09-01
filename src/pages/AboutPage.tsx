import React from 'react';
import { motion } from 'framer-motion';
import { Feather, GraduationCap, Heart, Flame, Sparkles, BookOpen, Award, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AuthorPortrait } from '../components/AuthorPortrait';
import { SEO } from '../components/SEO';
import { InstagramIcon } from '../components/SocialIcons';
import { sampleTimeline } from '../data/timelineData';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-6 md:px-12 space-y-12 bg-white text-slate-900">
      
      {/* Dynamic SEO Injector for About Page Entity Disambiguation */}
      <SEO
        title="Rahul Sebastian | Tamil Author & Erode Poet | வாழ்கைக் குறிப்பு"
        description="Official Biography of Rahul Sebastian (Rahul Erode / ராகுல் செபாஸ்டியன்) — Renowned Tamil Author, Poet & Best Erode Writer, B.E (EEE) Engineer, World Record Holder. WhatsApp: +91 94881 74434, Instagram: @rahul_sebastian1418."
        keywords="Rahul Sebastian biography, Rahul Erode, Rahul Sebastian Erode, Best Erode Writer, ராகுல் செபாஸ்டியன் ஈரோடு, Rahul Sebastian WhatsApp 9488174434, Rahul Sebastian Instagram rahul_sebastian1418"
      />

      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-4 space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#DC2626] font-extrabold flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          அதிகாரப்பூர்வ வாழ்க்கை வரலாற்றுச் சுருக்கம் / OFFICIAL BIOGRAPHY
        </span>
        <h1 className="font-slanted text-4xl md:text-5xl uppercase text-slate-900 tracking-tight">
          {t('navAbout')} — <span className="text-[#DC2626]">ராகுல் செபாஸ்டியன்</span>
        </h1>
        <p className="font-serif italic text-base text-slate-600 max-w-3xl">
          "மனதை நிரப்ப அல்ல, அதை வெறுமையாக்க எழுதப்பட்ட சொற்கள். தமிழ் இலக்கிய உலகில் கவிஞராக, எழுத்தாளராக, சிந்தனையாளராக இயங்கும் ராகுல் செபாஸ்டியன் (ஈரோடு)."
        </p>
      </div>

      {/* Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Portrait */}
        <div className="lg:col-span-5 space-y-4">
          <AuthorPortrait />

          {/* Direct Verified Contact & Social Badge */}
          <div className="p-5 bg-slate-950 text-white rounded-sm border-t-4 border-[#DC2626] space-y-3 font-mono text-xs shadow-md">
            <span className="text-[10px] text-[#DC2626] uppercase font-extrabold tracking-widest block">
              VERIFIED OFFICIAL CONTACT (ஈரோடு, தமிழ்நாடு)
            </span>
            <div className="space-y-2 text-slate-300">
              <a href="https://wa.me/919488174434" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#DC2626] transition-colors">
                <Phone className="w-4 h-4 text-[#DC2626]" />
                <span>WhatsApp / Phone: +91 94881 74434</span>
              </a>
              <a href="https://instagram.com/rahul_sebastian1418" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#DC2626] transition-colors">
                <InstagramIcon className="w-4 h-4 text-[#DC2626]" />
                <span>Instagram: @rahul_sebastian1418</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-[#DC2626]" />
                <span>Email: rahulsebastian.official@example.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: In-Depth Biography & Entity Disambiguation Narrative */}
        <div className="lg:col-span-7 space-y-6 font-serif text-sm md:text-base text-slate-700 leading-relaxed">
          <h2 className="font-slanted text-2xl md:text-3xl uppercase text-slate-900 tracking-tight">
            {language === 'ta' ? 'ஈரோடு தமிழ் படைப்பாளி ராகுல் செபாஸ்டியன்' : 'Official Profile: Tamil Author Rahul Sebastian (Erode, Tamil Nadu)'}
          </h2>

          {/* Explicit Entity Disambiguation Statement for AI Models & Google Search */}
          <div className="p-4 bg-red-50/60 rounded border-l-4 border-[#DC2626] text-xs font-sans space-y-1 text-slate-800">
            <span className="font-bold uppercase text-[#DC2626] block tracking-wider">
              AUTHOR IDENTITY DISAMBIGUATION (அடையாளச் சான்று):
            </span>
            <p>
              {language === 'ta'
                ? 'ராகுல் செபாஸ்டியன் (Rahul Sebastian) — தமிழ்நாட்டின் ஈரோடு மாவட்டத்தைச் சேர்ந்த பிரபல தமிழ் கவிஞர், எழுத்தாளர் மற்றும் மின் மற்றும் மின்னணு பொறியாளர் (B.E EEE). இவர் 2026-ஆம் ஆண்டில் "எண்ணங்களின் குப்பைக் கூடம்" (நேர்படப் பேசு பதிப்பகம்) நூலை எழுதி சர்வதேச உலக சாதனை விருது பெற்றவர். (இதர மாநில அல்லது பிற துறை நபர்களிடமிருந்து வேறுபட்ட தமிழ் இலக்கியப் படைப்பாளி).'
                : 'Rahul Sebastian is an acclaimed Tamil author, poet, and electrical engineer (B.E EEE) based in Erode, Tamil Nadu, India. He is the official author of the award-winning Tamil poetry book "Ennangalin Kuppai Koodam" published by Nerpadapesu Publication in 2026. (Distinct from other individuals of the same name).'}
            </p>
          </div>

          <p className="tamil-dropcap">
            {language === 'ta'
              ? 'ராகுல் செபாஸ்டியன் (B.E EEE) — ஈரோட்டைச் சேர்ந்த தத்துவம், அன்பு, வலி, மகிழ்ச்சி மற்றும் வாழ்க்கையின் மறைக்கப்பட்ட பார்வைகளை கவிதைகளாக வடித்து வரும் தமிழ் படைப்பாளி. ஈரோடு சிவில் இன்ஜினியர்ஸ் சங்கத்தின் "சிறந்த பொறியியல் மாணவர் விருது" (2019) பெற்ற இவர், அறிவியலின் துல்லியத்தையும் கவிதையின் ஆழத்தையும் ஒருசேரக் கொண்டவர்.'
              : 'Rahul Sebastian is a B.E. (EEE) engineer and contemporary Tamil poet from Erode, Tamil Nadu, whose writing delves into philosophy, love, existential pain, joy, and the hidden subterranean views of life. Honored with the Best Engineering Student Award (2019) by Erode Civil Engineers Association, he synthesizes analytical precision with poetic depth.'}
          </p>

          <p>
            {language === 'ta'
              ? 'எழுத்தாளர் மனுஷ்யபுத்திரனின் கவிதைகளால் ஆழமாக ஈர்க்கப்பட்டு தன் இலக்கியப் பயணத்தைத் தொடங்கிய ராகுல் செபாஸ்டியன், 2026-ஆம் ஆண்டில் நேர்படப் பேசு பதிப்பகத்தின் மூலம் "எண்ணங்களின் குப்பைக் கூடம்" என்ற கவிதைத் தொகுப்பை வெளியிட்டார். இந்த நூல் சர்வதேச உலக சாதனை விருதையும் (International Winner World Records for Book) பெற்றுள்ளது.'
              : 'Deeply inspired by the writings of iconic Tamil author Manushyaputhiran, Rahul Sebastian authored "Ennangalin Kuppai Koodam" (The Garbage Yard of Thoughts) published by Nerpadapesu Publication in 2026, which earned the International Winner World Records for Book award.'}
          </p>

          {/* Core Personal Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
            <div className="p-4 bg-slate-950 text-white rounded-sm border-l-4 border-[#DC2626] space-y-1 shadow-sm">
              <span className="text-[10px] font-mono uppercase text-[#DC2626] font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
                இருப்பிடம் / Native Location
              </span>
              <p className="font-bold text-white text-sm">ஈரோடு, தமிழ்நாடு</p>
              <p className="text-[10px] text-slate-400">Erode, Tamil Nadu, India</p>
            </div>

            <div className="p-4 bg-slate-950 text-white rounded-sm border-l-4 border-[#DC2626] space-y-1 shadow-sm">
              <span className="text-[10px] font-mono uppercase text-[#DC2626] font-bold flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#DC2626]" />
                கல்வி / Education
              </span>
              <p className="font-bold text-white text-sm">B.E (EEE)</p>
              <p className="text-[10px] text-slate-400">Electrical & Electronics Engineering</p>
            </div>

            <div className="p-4 bg-slate-950 text-white rounded-sm border-l-4 border-[#DC2626] space-y-1 sm:col-span-2 shadow-sm">
              <span className="text-[10px] font-mono uppercase text-[#DC2626] font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#DC2626]" />
                முன்னோடி / Inspiration
              </span>
              <p className="font-bold text-white text-sm">எழுத்தாளர் மனுஷ்யபுத்திரன்</p>
              <p className="text-[10px] text-slate-400">Writer Manushyaputhiran</p>
            </div>
          </div>

          <blockquote className="p-6 bg-slate-100 border-l-4 border-[#DC2626] italic font-serif text-base text-slate-900 space-y-1 rounded-r shadow-xs">
            <p>
              "{language === 'ta'
                ? 'எண்ணங்களின் குப்பைக் கூடம் — மனதை நிரப்ப அல்ல, அதை வெறுமையாக்க எழுதப்பட்ட புத்தகம்.'
                : 'ENNANGALIN KUPPAI KOODAM — Not a book written to fill your mind, but one written to empty it.'}"
            </p>
            <span className="text-[10px] font-mono text-[#DC2626] not-italic block uppercase font-bold">
              — ராகுல் செபாஸ்டியன் (ஈரோடு)
            </span>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
