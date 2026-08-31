import React from 'react';
import { Link } from 'react-router-dom';
import { Feather, Heart, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white border-t-4 border-[#DC2626]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-800">
          
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#DC2626] text-white flex items-center justify-center font-mono font-bold text-xs rounded-sm">
                RS
              </div>
              <span className="font-slanted text-xl uppercase tracking-tight text-white font-bold">
                RAHUL SEBASTIAN
              </span>
            </div>

            <p className="text-xs font-serif italic text-slate-400 max-w-md leading-relaxed">
              "எழுத்தில் பிறக்கும் உலகங்கள். வார்த்தைகளில் வாழும் உணர்வுகள்."
            </p>

            <div className="pt-2 text-xs font-mono text-[#DC2626] uppercase font-bold tracking-wider">
              {language === 'ta' ? 'எழுத்தாளர் • கவிஞர் • பாடலாசிரியர்' : 'Writer • Poet • Lyricist'}
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[10px] text-[#DC2626] uppercase font-extrabold tracking-widest block">
              QUICK LINKS
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link to="/about" className="hover:text-[#DC2626] transition-colors">
                  {language === 'ta' ? 'என்னைப் பற்றி' : 'About Rahul'}
                </Link>
              </li>
              <li>
                <Link to="/books" className="hover:text-[#DC2626] transition-colors">
                  {language === 'ta' ? 'நூல்கள் (புத்தகங்கள்)' : 'Books & Publications'}
                </Link>
              </li>
              <li>
                <Link to="/writings" className="hover:text-[#DC2626] transition-colors">
                  {language === 'ta' ? 'தேர்ந்தெடுக்கப்பட்ட கவிதைகள்' : 'Featured Poems'}
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-[#DC2626] transition-colors">
                  {language === 'ta' ? 'விருதுகள் & சாதனைகள்' : 'Awards & Honours'}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[10px] text-[#DC2626] uppercase font-extrabold tracking-widest block">
              PUBLISHER & CONTACT
            </span>
            <p className="text-slate-300 text-xs">
              நேர்படப் பேசு பதிப்பகம் (Nerpadapesu Publication)
            </p>
            <div className="space-y-1.5 text-slate-400 text-xs pt-1">
              <p>Email: rahulsebastian.official@example.com</p>
              <p>WhatsApp: +91 94881 74434</p>
              <p>Instagram: @rahul_sebastian1418</p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© 2026 Rahul Sebastian. All rights reserved.</p>
          <p className="text-[11px] text-[#DC2626] font-bold">
            Designed by PHANIX TECH
          </p>
        </div>
      </div>
    </footer>
  );
};
