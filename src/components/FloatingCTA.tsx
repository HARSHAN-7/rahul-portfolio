import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const FloatingCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Expanded Quick Contact Menu */}
      {isOpen && (
        <div className="bg-slate-950 text-white border-2 border-[#DC2626] p-3 rounded-lg shadow-2xl space-y-2 font-mono text-xs animate-in fade-in slide-in-from-bottom-2">
          <span className="text-[10px] text-[#DC2626] uppercase font-extrabold block border-b border-slate-800 pb-1">
            QUICK CONTACT (ஈரோடு)
          </span>

          <a
            href="https://wa.me/919488174434"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 p-2 rounded bg-slate-900 hover:bg-[#DC2626] hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#DC2626] group-hover:text-white" />
            <span>WhatsApp (+91 94881 74434)</span>
          </a>

          <a
            href="tel:+919488174434"
            className="flex items-center gap-2 p-2 rounded bg-slate-900 hover:bg-[#DC2626] hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-[#DC2626]" />
            <span>Direct Call</span>
          </a>

          <a
            href="https://instagram.com/rahul_sebastian1418"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 p-2 rounded bg-slate-900 hover:bg-[#DC2626] hover:text-white transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-[#DC2626]" />
            <span>Instagram (@rahul_sebastian1418)</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#B91C1C] transition-all border-2 border-white"
        aria-label="Contact Quick Action"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6 animate-pulse" />}
      </button>
    </div>
  );
};
