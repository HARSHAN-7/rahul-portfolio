import React from 'react';
import { Mail, Phone, MapPin, Sparkles, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InstagramIcon } from '../components/SocialIcons';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-6 md:px-12 space-y-12 bg-white text-slate-900">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#DC2626] font-extrabold flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          தொடர்பு / CONTACT
        </span>
        <h1 className="font-slanted text-4xl md:text-5xl uppercase text-slate-900 tracking-tight">
          {t('contactTitle')}
        </h1>
        <p className="font-serif italic text-sm text-slate-600 max-w-2xl">
          {t('contactSubtitle')}
        </p>
      </div>

      {/* Direct Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
        
        {/* Email Card */}
        <a
          href="mailto:rahulsebastian.official@example.com"
          className="p-8 bg-slate-950 text-white rounded-sm border-t-4 border-[#DC2626] shadow-xl flex flex-col items-center justify-center gap-4 hover:bg-slate-900 transition-all text-center group card-notch"
        >
          <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
            <Mail className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
              மின்னஞ்சல் / EMAIL
            </span>
            <p className="font-bold text-white text-sm break-all">
              rahulsebastian.official@example.com
            </p>
          </div>
        </a>

        {/* WhatsApp Card */}
        <a
          href="https://wa.me/919488174434"
          target="_blank"
          rel="noreferrer"
          className="p-8 bg-slate-950 text-white rounded-sm border-t-4 border-[#DC2626] shadow-xl flex flex-col items-center justify-center gap-4 hover:bg-slate-900 transition-all text-center group card-notch"
        >
          <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
            <Phone className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
              வாட்ஸ்அப் / WHATSAPP / PHONE
            </span>
            <p className="font-bold text-[#DC2626] text-sm">
              +91 94881 74434
            </p>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href="https://instagram.com/rahul_sebastian1418"
          target="_blank"
          rel="noreferrer"
          className="p-8 bg-slate-950 text-white rounded-sm border-t-4 border-[#DC2626] shadow-xl flex flex-col items-center justify-center gap-4 hover:bg-slate-900 transition-all text-center group card-notch"
        >
          <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
            <InstagramIcon className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
              இன்ஸ்டாகிராம் / INSTAGRAM
            </span>
            <p className="font-bold text-white text-sm">
              @rahul_sebastian1418
            </p>
          </div>
        </a>

      </div>

      {/* Publisher Details Box */}
      <div className="p-8 bg-slate-100 rounded-sm border-l-4 border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <MapPin className="w-8 h-8 text-[#DC2626]" />
          <div>
            <span className="text-[11px] font-mono text-[#DC2626] uppercase font-extrabold block">
              பதிப்பகத் தகவல் / OFFICIAL PUBLISHER
            </span>
            <h3 className="font-slanted text-xl text-slate-900 uppercase font-bold">
              நேர்படப் பேசு பதிப்பகம் (Nerpadapesu Publication)
            </h3>
          </div>
        </div>
        <a
          href="https://nerpadapesu.com"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-sm bg-[#DC2626] text-white font-mono text-xs font-extrabold uppercase hover:bg-[#B91C1C] transition-colors whitespace-nowrap self-start sm:self-center"
        >
          VISIT PUBLISHER WEBSITE →
        </a>
      </div>
    </div>
  );
};
