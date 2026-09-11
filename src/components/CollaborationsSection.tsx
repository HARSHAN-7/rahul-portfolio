import React from 'react';
import { Sparkles, Calendar, BookOpen, Mic, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InstagramIcon } from './SocialIcons';

export const CollaborationsSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-slate-100 py-12 sm:py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded border-t-4 border-[#DC2626] shadow-xl">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 text-[10px] font-mono text-[#DC2626] uppercase font-extrabold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLLABORATIONS & SPEAKING ENGAGEMENTS</span>
            </div>

            <h2 className="font-slanted text-2xl sm:text-4xl uppercase text-slate-900 tracking-tight">
              LITERARY MEETS, WORKSHOPS & <span className="text-[#DC2626]">SPEAKING</span>
            </h2>

            <p className="font-serif text-sm text-slate-700 leading-relaxed">
              {language === 'ta'
                ? 'கல்லூரிகள், இலக்கிய அமைப்புகள், புத்தக விழާތள் மற்றும் பட்டறைகளில் உரையாற்ற, கவிதை வாசிக்க அல்லது புத்தகக் கலந்துரையாடல்களுக்கு ராகுல் செபாஸ்டியனை நேரடியாக அழைக்கலாம்.'
                : 'Invite Rahul Sebastian for literary festivals, college keynote sessions, poetry reading workshops, book signing events, or press interviews.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-2">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded space-y-1">
                <Mic className="w-4 h-4 text-[#DC2626]" />
                <h4 className="font-bold text-slate-900 uppercase">POETRY SESSIONS</h4>
                <p className="text-[10px] text-slate-600">Live verse readings & philosophy</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded space-y-1">
                <BookOpen className="w-4 h-4 text-[#DC2626]" />
                <h4 className="font-bold text-slate-900 uppercase">BOOK LAUNCHES</h4>
                <p className="text-[10px] text-slate-600">Discussions & signing meets</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded space-y-1">
                <Calendar className="w-4 h-4 text-[#DC2626]" />
                <h4 className="font-bold text-slate-900 uppercase">WORKSHOPS</h4>
                <p className="text-[10px] text-slate-600">Engineering & creative writing</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3 bg-slate-950 p-6 rounded text-white border border-slate-800">
            <h3 className="font-extrabold uppercase text-sm font-sans text-[#DC2626]">
              BOOK AN EVENT / INQUIRE NOW
            </h3>
            
            <p className="text-xs text-slate-300 font-serif">
              Direct connection with Rahul Sebastian (Erode, Tamil Nadu):
            </p>

            <div className="space-y-2 pt-2 font-mono text-xs">
              <a
                href="https://wa.me/919488174434"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded bg-slate-900 border border-slate-800 hover:border-[#DC2626] text-[#DC2626] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#DC2626]" />
                <span>WhatsApp: +91 94881 74434</span>
              </a>

              <a
                href="https://instagram.com/rahul_sebastian1418"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded bg-slate-900 border border-slate-800 hover:border-[#DC2626] text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#DC2626]" />
                <span>Instagram: @rahul_sebastian1418</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
