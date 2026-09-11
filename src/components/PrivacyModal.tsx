import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white text-slate-900 max-w-2xl w-full p-6 sm:p-8 rounded border-t-4 border-[#DC2626] shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-[#DC2626] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#DC2626] font-mono text-xs font-bold uppercase">
          <ShieldCheck className="w-5 h-5" />
          <span>PRIVACY POLICY & TERMS OF USE</span>
        </div>

        <h3 className="font-slanted text-2xl uppercase text-slate-900">
          TERMS & <span className="text-[#DC2626]">PRIVACY GUIDELINES</span>
        </h3>

        <div className="space-y-3 font-sans text-xs text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
          <p>
            <strong>1. Copyright & Intellectual Property:</strong> All original poetry, written works, book excerpts, quotes, audio preview tracks, and photographs on this official website are protected by copyright under Indian copyright laws and belong exclusively to <strong>Rahul Sebastian</strong> (Erode, Tamil Nadu) and <strong>Nerpadapesu Publication</strong> (நேர்படப் பேசு பதிப்பகம்).
          </p>

          <p>
            <strong>2. Use of Content:</strong> You are free to share short quotes and excerpts for non-commercial educational or literary discussion provided full attribution is credited to <em>Rahul Sebastian (rahulsebastian.online)</em>. Commercial republication without written permission is strictly prohibited.
          </p>

          <p>
            <strong>3. Personal Data Privacy:</strong> No personal user data is sold or shared. Any information submitted via direct contact forms or WhatsApp chats is used solely to respond to your literary inquiries or book purchase requests.
          </p>

          <p>
            <strong>4. Publisher Details:</strong> Published books are printed and distributed by Nerpadapesu Publication (https://nerpadapesu.com).
          </p>
        </div>

        <div className="pt-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-slate-900 text-white font-mono text-xs font-bold uppercase hover:bg-[#DC2626] transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
