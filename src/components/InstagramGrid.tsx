import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InstagramIcon } from './SocialIcons';

interface SocialPost {
  id: string;
  image: string;
  captionTa: string;
  captionEn: string;
  likes: number;
}

const posts: SocialPost[] = [
  {
    id: '1',
    image: '/rahul_book_launch.jpg',
    captionTa: 'நேர்படப் பேசு பதிப்பகத்தின் மூலம் "எண்ணங்களின் குப்பைக் கூடம்" நூல் வெளியீட்டு விழா தருணம்.',
    captionEn: 'Book launch ceremony of "Ennangalin Kuppai Koodam" published by Nerpadapesu Publication.',
    likes: 482,
  },
  {
    id: '2',
    image: '/rahul_world_record_stage.jpg',
    captionTa: 'சர்வதேச உலக சாதனை விருது 2026 வழங்கும் விழா மேடை தருணம்.',
    captionEn: 'International Winner World Records for Book 2026 award ceremony stage moment.',
    likes: 620,
  },
  {
    id: '3',
    image: '/rahul_best_engineering_student_award.jpg',
    captionTa: 'ஈரோடு சிவில் இன்ஜினியர்ஸ் சங்கம் வழங்கிய 2019 சிறந்த மாணவர் விருது கொண்டாட்டம்.',
    captionEn: 'Best Engineering Student Award 2019 by Erode Civil Engineers Association.',
    likes: 395,
  },
  {
    id: '4',
    image: '/rahul_hero_bg.jpg',
    captionTa: 'கவிதையும் வாழ்க்கையும் ஒன்றிணையும் தருணங்கள்.',
    captionEn: 'Moments where poetry and life synthesize into verse.',
    likes: 512,
  },
];

export const InstagramGrid: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-slate-950 text-white py-12 sm:py-16 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-4 mb-8 gap-3">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#DC2626] font-extrabold flex items-center gap-2">
              <InstagramIcon className="w-3.5 h-3.5 text-[#DC2626]" />
              INSTAGRAM & SOCIAL MEDIA — @rahul_sebastian1418
            </span>
            <h2 className="font-slanted text-2xl sm:text-4xl uppercase text-white tracking-tight">
              LITERARY <span className="text-[#DC2626]">FEED & MOMENTS</span>
            </h2>
          </div>

          <a
            href="https://instagram.com/rahul_sebastian1418"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#DC2626] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#B91C1C] transition-all shadow-md w-fit"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW ON INSTAGRAM →</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/rahul_sebastian1418"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className="group relative rounded overflow-hidden bg-slate-900 border border-slate-800 shadow-lg block"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={post.image}
                  alt="Rahul Sebastian Social Post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 z-10">
                  <div className="flex items-center justify-between text-xs font-mono text-[#DC2626] font-bold">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-[#DC2626] text-[#DC2626]" />
                      {post.likes}
                    </span>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>

                  <p className="font-serif italic text-xs text-white leading-relaxed line-clamp-3">
                    "{language === 'ta' ? post.captionTa : post.captionEn}"
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-900 border-t border-slate-800">
                <p className="text-[11px] font-sans text-slate-300 truncate">
                  {language === 'ta' ? post.captionTa : post.captionEn}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
