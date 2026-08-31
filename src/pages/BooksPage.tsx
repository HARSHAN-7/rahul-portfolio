import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ShoppingBag, ExternalLink, Eye, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sampleBooks } from '../data/booksData';
import { BookCover3D } from '../components/BookCover3D';
import { InteractiveBookModal } from '../components/InteractiveBookModal';
import { Book } from '../types';

export const BooksPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedModalBook, setSelectedModalBook] = useState<Book | null>(null);

  return (
    <div className="pt-36 pb-28 max-w-7xl mx-auto px-6 md:px-12 space-y-16 bg-white text-slate-900">
      
      <InteractiveBookModal book={selectedModalBook} onClose={() => setSelectedModalBook(null)} />

      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[2px] bg-[#FF3B00]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] font-extrabold">
            PUBLISHED VOLUMES —
          </span>
        </div>
        <h1 className="font-slanted text-4xl md:text-6xl uppercase text-slate-900 tracking-tight">
          {t('navBooks')}
        </h1>
        <p className="font-serif italic text-lg text-slate-600 max-w-2xl">
          {t('booksSubtitle')}
        </p>
      </div>

      {/* Book List */}
      <div className="space-y-16">
        {sampleBooks.map((book) => {
          const title = language === 'ta' ? book.titleTa : book.titleEn;
          const subtitle = language === 'ta' ? book.subtitleTa : book.subtitleEn;
          const publisher = language === 'ta' ? book.publisherTa : book.publisherEn;
          const desc = language === 'ta' ? book.descriptionTa : book.descriptionEn;
          const toc = language === 'ta' ? book.tableOfContentsTa : book.tableOfContentsEn;

          return (
            <div
              key={book.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 md:p-12 bg-slate-900 text-white rounded-sm border-t-4 border-[#FF3B00] shadow-xl card-notch"
            >
              {/* Cover Column */}
              <div className="lg:col-span-5 flex justify-center">
                <BookCover3D book={book} onClick={() => setSelectedModalBook(book)} />
              </div>

              {/* Book Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#FF3B00] font-bold uppercase">
                    <span className="px-3 py-1 rounded bg-[#FF3B00]/20 border border-[#FF3B00]/40">
                      {book.year}
                    </span>
                    <span>•</span>
                    <span>{publisher}</span>
                    <span>•</span>
                    <span>ISBN: {book.isbn}</span>
                  </div>

                  <h2 className="font-slanted text-3xl md:text-5xl uppercase text-white tracking-tight pt-1">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="font-serif italic text-base text-slate-300">
                      {subtitle}
                    </p>
                  )}
                </div>

                <p className="font-serif text-base text-slate-300 whitespace-pre-line leading-relaxed">
                  {desc}
                </p>

                {/* Table of Contents Sample */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF3B00] font-extrabold">
                    SELECTED CHAPTERS & SECTIONS —
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif text-slate-300">
                    {toc.map((chap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00]" />
                        <span>{chap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-800">
                  <button
                    onClick={() => setSelectedModalBook(book)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#FF3B00] text-white font-mono text-xs font-extrabold uppercase hover:bg-[#E03300] transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>3D PREVIEW ↓</span>
                  </button>

                  {book.buyLinks.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-3 rounded-sm border border-slate-700 text-white font-mono text-xs font-bold uppercase hover:border-[#FF3B00] hover:text-[#FF3B00] transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{language === 'ta' ? link.labelTa : link.labelEn}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
