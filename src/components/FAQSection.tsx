import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FAQItem {
  id: string;
  questionTa: string;
  questionEn: string;
  answerTa: string;
  answerEn: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    questionTa: 'ராகுல் செபாஸ்டியன் யார்?',
    questionEn: 'Who is Rahul Sebastian?',
    answerTa: 'ராகுல் செபாஸ்டியன் (ராகுல் ஈரோடு) தமிழ்நாட்டின் ஈரோடு மாவட்டத்தைச் சேர்ந்த பிரபல தமிழ் கவிஞர், எழுத்தாளர் மற்றும் மின் மற்றும் மின்னணு பொறியாளர் (B.E EEE). இவர் 2026-ஆம் ஆண்டில் "எண்ணங்களின் குப்பைக் கூடம்" நூலை வெளியிட்டு சர்வதேச உலக சாதனை விருது பெற்றவர்.',
    answerEn: 'Rahul Sebastian (Rahul Erode) is an acclaimed contemporary Tamil author, poet, storyteller, and electrical engineer (B.E EEE) based in Erode, Tamil Nadu, India. He is the author of the award-winning book "Ennangalin Kuppai Koodam".',
  },
  {
    id: '2',
    questionTa: '"எண்ணங்களின் குப்பைக் கூடம்" புத்தகத்தை எங்கு வாங்கலாம்?',
    questionEn: 'Where can I buy "Ennangalin Kuppai Koodam"?',
    answerTa: 'நேர்படப் பேசு பதிப்பகம் (Nerpadapesu Publication) அதிகாரப்பூர்வ இணையதளம் (nerpadapesu.com) மூலமாகவோ அல்லது வாட்ஸ்அப் (+91 94881 74434) மூலமாக நேரடியாகத் தொடர்புகொண்டோ வாங்கலாம்.',
    answerEn: 'You can purchase "Ennangalin Kuppai Koodam" directly through Nerpadapesu Publication (nerpadapesu.com) or by messaging Rahul Sebastian via WhatsApp (+91 94881 74434).',
  },
  {
    id: '3',
    questionTa: 'ராகுல் செபாஸ்டியனின் கவிதை நடை மற்றும் தாக்கம் என்ன?',
    questionEn: 'What is Rahul Sebastian\'s poetic style & inspiration?',
    answerTa: 'இவர் தமிழ் இலக்கிய உலகின் முன்னணி கவிஞர் மனுஷ்யபுத்திரனின் படைப்புகளால் ஆழமாக ஈர்க்கப்பட்டவர். வாழ்க்கையின் மறைக்கப்பட்ட பார்வைகளையும் தத்துவங்களையும் எளிமையான, அழுத்தமான கவிதை வரிகளில் வடித்து தருகிறார்.',
    answerEn: 'He is deeply inspired by legendary Tamil poet Manushyaputhiran. His poetry synthesizes analytical engineering precision with deep existential philosophy and simple yet striking verse.',
  },
  {
    id: '4',
    questionTa: 'கவிதை நிகழ்வுகள் அல்லது உரையாடல்களுக்கு எவ்வாறு தொடர்பு கொள்வது?',
    questionEn: 'How to contact Rahul Sebastian for events or speaking engagements?',
    answerTa: 'இலக்கிய கூட்டங்கள், கல்லூரி நிகழ்வுகள் அல்லது புத்தகக் கலந்துரையாடல்களுக்கு வாட்ஸ்அப் (+91 94881 74434) அல்லது இன்ஸ்டாகிராம் (@rahul_sebastian1418) மூலம் நேரடியாகத் தொடர்பு கொள்ளலாம்.',
    answerEn: 'For literary festivals, college events, poetry workshops, or press interviews, contact him via WhatsApp (+91 94881 74434) or Instagram (@rahul_sebastian1418).',
  },
];

export const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white text-slate-900 py-12 sm:py-16 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DC2626] bg-red-50 text-[10px] sm:text-xs font-mono text-[#DC2626] uppercase font-extrabold">
            <HelpCircle className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>FAQ — அடிக்கடி கேட்கப்படும் கேள்விகள்</span>
          </div>

          <h2 className="font-slanted text-2xl sm:text-4xl uppercase text-slate-900 tracking-tight">
            FREQUENTLY ASKED <span className="text-[#DC2626]">QUESTIONS</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded bg-slate-50 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-serif font-bold text-sm sm:text-base text-slate-900 hover:text-[#DC2626] transition-colors"
                >
                  <span>{language === 'ta' ? faq.questionTa : faq.questionEn}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#DC2626] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-4 sm:p-5 pt-0 border-t border-slate-200 font-sans text-xs sm:text-sm text-slate-700 leading-relaxed bg-white">
                        {language === 'ta' ? faq.answerTa : faq.answerEn}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
