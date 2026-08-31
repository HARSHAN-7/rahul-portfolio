import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, ShoppingBag, ExternalLink, Calendar, Layers, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sampleBooks } from '../data/booksData';
import { BookCover3D } from '../components/BookCover3D';

export const BookDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const book = sampleBooks.find((b) => b.slug === slug) || sampleBooks[0];

  const title = language === 'ta' ? book.titleTa : book.titleEn;
  const subtitle = language === 'ta' ? book.subtitleTa : book.subtitleEn;
  const publisher = language === 'ta' ? book.publisherTa : book.publisherEn;
  const desc = language === 'ta' ? book.descriptionTa : book.descriptionEn;
  const toc = language === 'ta' ? book.tableOfContentsTa : book.tableOfContentsEn;
  const sampleExcerpt = language === 'ta' ? book.sampleExcerptTa : book.sampleExcerptEn;

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
      {/* Back Button */}
      <button
        onClick={() => navigate('/books')}
        className="inline-flex items-center gap-2 text-xs font-mono text-[#8C6D46] hover:text-[#1C1A17] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{language === 'ta' ? 'நூல்கள் பட்டியலுக்குத் திரும்பு' : 'Back to All Books'}</span>
      </button>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Cover Left */}
        <div className="lg:col-span-5 flex justify-center">
          <BookCover3D book={book} />
        </div>

        {/* Info Right */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3 border-b border-[#8C6D46]/20 pb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8C6D46]">
              <span className="px-3 py-1 rounded-full bg-[#8C6D46]/10 font-bold uppercase">
                {book.year}
              </span>
              <span>•</span>
              <span>ISBN: {book.isbn}</span>
              <span>•</span>
              <span>{book.pages} பக்கங்கள்</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1A17]">
              {title}
            </h1>
            {subtitle && (
              <p className="font-serif italic text-lg text-[#8C6D46]">
                {subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#8C6D46] font-bold">
              {language === 'ta' ? 'நூல் விவரம்' : 'Book Synopsis'}
            </h3>
            <p className="font-serif text-base md:text-lg text-[#5A5650] leading-relaxed">
              {desc}
            </p>
          </div>

          {/* Sample Excerpt */}
          <div className="p-6 bg-[#FAF7F2] border-l-4 border-[#8C6D46] space-y-2 rounded-r-xs shadow-xs">
            <span className="text-xs font-mono uppercase text-[#8C6D46] font-bold">
              {language === 'ta' ? 'நூலிலிருந்து ஒரு பத்தி' : 'Featured Excerpt'}
            </span>
            <p className="font-serif italic text-base md:text-lg text-[#1C1A17] whitespace-pre-line leading-relaxed">
              "{sampleExcerpt}"
            </p>
          </div>

          {/* Table of Contents */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#8C6D46] font-bold">
              {language === 'ta' ? 'பொருளடக்கம்' : 'Table of Contents'}
            </h3>
            <ul className="space-y-2 font-serif text-sm text-[#5A5650]">
              {toc.map((chapter, i) => (
                <li key={i} className="flex items-center justify-between p-2 rounded bg-[#FAF7F2] border border-[#8C6D46]/10">
                  <span>{chapter}</span>
                  <span className="text-xs font-mono text-[#8C6D46]">Chapter {i + 1}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Publisher Specs */}
          <div className="p-4 rounded border border-[#8C6D46]/20 bg-[#FAF7F2] text-xs font-mono text-stone-600 flex flex-wrap justify-between gap-4">
            <div>
              <span className="block text-stone-400">பதிப்பகம் / Publisher:</span>
              <strong className="text-[#1C1A17]">{publisher}</strong>
            </div>
            <div>
              <span className="block text-stone-400">ஆண்டு / Year:</span>
              <strong className="text-[#1C1A17]">{book.year}</strong>
            </div>
            <div>
              <span className="block text-stone-400">ஆசிரியர் / Author:</span>
              <strong className="text-[#8C6D46]">அரவிந்தன்</strong>
            </div>
          </div>

          {/* Order Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {book.buyLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-[#1C1A17] text-[#FAF7F2] font-serif text-sm hover:bg-[#8C6D46] transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-[#8C6D46]" />
                <span>{language === 'ta' ? link.labelTa : link.labelEn}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
