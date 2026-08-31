import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ShoppingBag, ExternalLink, BookOpen } from 'lucide-react';
import { Book } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface InteractiveBookModalProps {
  book: Book | null;
  onClose: () => void;
}

export const InteractiveBookModal: React.FC<InteractiveBookModalProps> = ({ book, onClose }) => {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);

  if (!book) return null;

  const title = language === 'ta' ? book.titleTa : book.titleEn;
  const subtitle = language === 'ta' ? book.subtitleTa : book.subtitleEn;
  const publisher = language === 'ta' ? book.publisherTa : book.publisherEn;
  const desc = language === 'ta' ? book.descriptionTa : book.descriptionEn;
  const toc = language === 'ta' ? book.tableOfContentsTa : book.tableOfContentsEn;
  const sampleExcerpt = language === 'ta' ? book.sampleExcerptTa : book.sampleExcerptEn;

  const pages = [
    { type: 'cover', title, subtitle, publisher, year: book.year },
    { type: 'toc', title: language === 'ta' ? 'பொருளடக்கம்' : 'Table of Contents', content: toc },
    { type: 'excerpt', title: language === 'ta' ? 'மாதிரிப் பத்தி' : 'Sample Excerpt', content: sampleExcerpt },
  ];

  const nextPage = () => setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(0, prev - 1));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-3xl w-full bg-white border-2 border-slate-900 rounded-sm shadow-2xl text-slate-900 p-8 md:p-12 space-y-6 overflow-hidden card-notch"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-800 hover:bg-[#FF3B00] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Book Header */}
          <div className="flex items-center gap-3 text-xs font-mono text-[#FF3B00] border-b border-slate-200 pb-4 font-bold uppercase">
            <BookOpen className="w-4 h-4" />
            <span>BOOK INSPECTION</span>
            <span>•</span>
            <span>PAGE {currentPage + 1} OF {pages.length}</span>
          </div>

          {/* Content Body */}
          <div className="min-h-[280px] flex flex-col justify-center font-serif space-y-6 bg-slate-50 p-8 rounded border border-slate-200 relative">
            {currentPage === 0 && (
              <div className="text-center space-y-3 py-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] font-bold">
                  {book.year} • {publisher}
                </span>
                <h2 className="font-slanted text-3xl md:text-4xl uppercase text-slate-900">
                  {title}
                </h2>
                {subtitle && <p className="italic text-slate-600 text-base">{subtitle}</p>}
                <p className="text-xs font-mono text-slate-500 pt-4 uppercase font-bold">
                  AUTHOR: RAHUL SEBASTIAN (B.E EEE)
                </p>
              </div>
            )}

            {currentPage === 1 && (
              <div className="space-y-4">
                <h3 className="font-extrabold uppercase text-xl text-slate-900 border-b border-slate-200 pb-2">
                  {pages[1].title}
                </h3>
                <ul className="space-y-2.5 font-serif text-sm text-slate-700">
                  {toc.map((chap, idx) => (
                    <li key={idx} className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
                      <span>{chap}</span>
                      <span className="text-xs font-mono text-[#FF3B00] font-bold">0{idx + 1}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {currentPage === 2 && (
              <div className="space-y-4">
                <h3 className="font-extrabold uppercase text-xl text-slate-900 border-b border-slate-200 pb-2">
                  {pages[2].title}
                </h3>
                <p className="italic text-base md:text-lg text-slate-800 leading-relaxed whitespace-pre-line p-4 border-l-4 border-[#FF3B00] bg-white">
                  "{sampleExcerpt}"
                </p>
              </div>
            )}
          </div>

          {/* Controls Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4">
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 0}
                onClick={prevPage}
                className="flex items-center gap-1 px-4 py-2 rounded border border-slate-300 text-xs font-mono font-bold disabled:opacity-30 hover:border-[#FF3B00] hover:text-[#FF3B00] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>PREV</span>
              </button>
              <button
                disabled={currentPage === pages.length - 1}
                onClick={nextPage}
                className="flex items-center gap-1 px-4 py-2 rounded border border-slate-300 text-xs font-mono font-bold disabled:opacity-30 hover:border-[#FF3B00] hover:text-[#FF3B00] transition-all"
              >
                <span>NEXT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {book.buyLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#FF3B00] text-white font-mono text-xs font-extrabold uppercase hover:bg-[#E03300] transition-all shadow-sm"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{language === 'ta' ? link.labelTa : link.labelEn}</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
