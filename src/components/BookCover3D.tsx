import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface BookCover3DProps {
  book: Book;
  onClick?: () => void;
}

export const BookCover3D: React.FC<BookCover3DProps> = ({ book, onClick }) => {
  const { language } = useLanguage();

  const title = language === 'ta' ? book.titleTa : book.titleEn;
  const publisher = language === 'ta' ? book.publisherTa : book.publisherEn;
  const authorName = language === 'ta' ? 'செ. ராகுல் பி.இ' : 'Rahul Sebastian B.E';

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="cursor-pointer group relative max-w-[280px] mx-auto w-full"
    >
      {/* Real Book Cover Container */}
      <div className="relative bg-slate-950 text-white rounded-sm shadow-2xl border-2 border-slate-800 overflow-hidden card-notch group-hover:border-[#FF3B00] transition-all">
        {/* Real Cover Photo */}
        <div className="relative aspect-[2/3] w-full overflow-hidden">
          <img
            src={book.coverImage || '/ennangalin_kuppai_koodam_real_cover.jpg'}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        {/* Bottom Specs Bar */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-300">
          <span className="text-[#FF3B00] font-extrabold">{book.year}</span>
          <span className="truncate uppercase font-bold">{publisher}</span>
        </div>
      </div>
    </motion.div>
  );
};
