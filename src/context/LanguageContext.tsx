import React, { createContext, useContext, useState } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  writerTitle: { ta: 'எழுத்தாளர்', en: 'WRITER' },
  authorName: { ta: 'ராகுல் செபாஸ்டியன்', en: 'Rahul Sebastian' },
  navHome: { ta: 'முகப்பு', en: 'Home' },
  navAbout: { ta: 'என்னைப் பற்றி', en: 'About' },
  navWritings: { ta: 'படைப்புகள்', en: 'Writings' },
  navBooks: { ta: 'நூல்கள்', en: 'Books' },
  navAwards: { ta: 'விருதுகள்', en: 'Awards' },
  navPublications: { ta: 'வெளியீடுகள்', en: 'Publications' },
  navGallery: { ta: 'காட்சியகம்', en: 'Gallery' },
  navContact: { ta: 'தொடர்பு', en: 'Contact' },

  // Hero Section
  heroTitle: {
    ta: 'மனதை நிரப்ப அல்ல, அதை வெறுமையாக்க எழுதப்பட்ட சொற்கள்.',
    en: 'Not written to fill your mind, but to help you set down its burdens.'
  },
  heroSubtitle: {
    ta: 'எழுத்தாளர் • கவிஞர் • பொறியாளர் (B.E EEE)',
    en: 'Writer • Poet • Engineer (B.E EEE)'
  },
  heroIntro: {
    ta: 'வாழ்க்கையின் அனுபவங்கள், வலிகள், கேள்விகள் மற்றும் உணர்வுகளின் கவித்துவக் குரல்.',
    en: 'A poetic chronicle recording the hidden pain, love, philosophy, and unvoiced dimensions of life.'
  },
  heroBtnRead: { ta: 'படைப்புகளைப் படிக்க', en: 'Read Works' },
  heroBtnAbout: { ta: 'எழுத்தாளரைப் பற்றி', en: 'About Writer' },
  heroJourneyTag: { ta: 'எழுத்துப் பயணம் • 2019 — தற்போது', en: 'Literary Journey • 2019 — Present' },

  // Introduction Section
  introLargeQuote: {
    ta: 'எண்ணங்களின் குப்பைக் கூடம் — மனதை நிரப்ப அல்ல, அதை வெறுமையாக்க எழுதப்பட்ட புத்தகம்.',
    en: 'ENNANGALIN KUPPAI KOODAM — Not a book written to fill your mind, but one written to empty it.'
  },
  introBioSnippet: {
    ta: 'ராகுல் செபாஸ்டியன் (B.E EEE) — தத்துவம், அன்பு, வலி, மகிழ்ச்சி மற்றும் வாழ்க்கையின் மறைக்கப்பட்ட பார்வைகளை கவிதைகளாக வடித்து வரும் தமிழ் படைப்பாளி. எழுத்தாளர் மனுஷ்யபுத்திரனின் எழுத்துக்களால் ஈர்க்கப்பட்டு இலக்கியப் பயணம் மேற்கொள்பவர்.',
    en: 'Rahul Sebastian is a B.E. (EEE) engineer and contemporary Tamil poet whose literature explores philosophy, love, existential pain, joy, and the hidden subterranean views of life, deeply inspired by writer Manushyaputhiran.'
  },
  readMore: { ta: 'மேலும் அறிய', en: 'Read More' },

  // Featured Writings
  featuredWritingsTitle: { ta: 'தேர்ந்தெடுக்கப்பட்ட படைப்புகள்', en: 'Selected Poems & Writings' },
  featuredWritingsSubtitle: {
    ta: 'வாழ்க்கை கற்பித்த அனுபவங்கள், வலிகள் மற்றும் உணர்வுகளின் பதிவுகள்.',
    en: 'Records of experiences, pain, questions, and realizations taught by life.'
  },
  viewAllWritings: { ta: 'அனைத்துப் படைப்புகளையும் காண்க', en: 'Explore All Writings' },
  readBtn: { ta: 'படிக்க', en: 'Read' },
  readTime: { ta: 'வாசிக்கும் நேரம்', en: 'Read time' },

  // Featured Poem
  featuredPoemTitle: { ta: 'தேர்ந்தெடுக்கப்பட்ட கவிதை', en: 'Featured Poetry' },
  featuredPoemContent: {
    ta: 'மனதில் தேங்கியிருக்கும்\nதேவையற்ற சுமைகளை இறக்கி வைத்து,\nபுதிய எண்ணங்களுக்கு\nஇடம் கொடுக்கும் ஒரு மௌனக் குரல்...',
    en: 'Setting down unnecessary burdens\naccumulated within the mind,\nmaking peaceful room for new\nthoughts and unwritten horizons...'
  },
  readFullPoem: { ta: 'முழுமையாக வாசிக்க', en: 'Read Full Poem' },

  // Books
  booksTitle: { ta: 'நூல்கள்', en: 'Published Book' },
  booksSubtitle: { ta: 'அச்சில் வெளிவந்த இலக்கிய படைப்பு', en: 'Official Printed Literary Publication' },
  aboutBook: { ta: 'நூலைப் பற்றி', en: 'About Book' },
  viewAllBooks: { ta: 'அனைத்து நூல்களையும் காண்க', en: 'Browse Book Details' },

  // Timeline
  timelineTitle: { ta: 'எழுத்துப் பயணம்', en: 'Literary & Academic Journey' },
  timelineSubtitle: { ta: 'பொறியியல் விருதுகள் முதல் சர்வதேச உலக சாதனை வரை', en: 'From Best Engineering Student Award to World Records' },

  // Awards
  awardsTitle: { ta: 'விருதுகள் & சாதனைகள்', en: 'Awards & Achievements' },
  awardsSubtitle: { ta: 'கல்வி மற்றும் இலக்கியப் பங்களிப்பிற்காகப் பெற்ற கௌரவங்கள்', en: 'Honours conferred for engineering excellence & literature' },

  // Publications
  publicationsTitle: { ta: 'வெளியீடுகள் & ஊடகங்கள்', en: 'Publications & Media Features' },
  publicationsSubtitle: { ta: 'நேர்படப் பேசு பதிப்பகம், இதழ்கள் மற்றும் இணைய ஊடக அம்சங்கள்', en: 'Features in Nerpadapesu Publication, press & media' },
  sampleNotice: { ta: 'பிரசுரத் தகவல் / OFFICIAL PUBLICATION DATA', en: 'OFFICIAL PUBLICATION DATA' },

  // Gallery
  galleryTitle: { ta: 'காட்சியகம்', en: 'Photo Gallery' },
  gallerySubtitle: { ta: 'எழுத்து வாழ்க்கை, நூல் வெளியீடு மற்றும் விருது நிகழ்வுகளின் தருணங்கள்', en: 'Moments from book launches, writing sanctuary & award ceremonies' },

  // Quote Section
  quoteTitle: {
    ta: 'ஒரு கவிதையாவது உங்கள் வாழ்க்கையின் ஒரு தருணத்தை நினைவூட்டினால், அதுவே என் எழுத்திற்கு கிடைக்கும் உயரிய அங்கீகாரம்.',
    en: 'If even one poem reminds you of a moment in your life, that will be the greatest recognition my writing could ever receive.'
  },

  // Contact Section
  contactTitle: { ta: 'ஒரு உரையாடலைத் தொடங்குவோம்.', en: 'Initiate a Dialogue.' },
  contactSubtitle: {
    ta: 'இலக்கியம், புத்தகங்கள், நிகழ்வுகள் அல்லது ஒத்துழைப்புகள் குறித்து தொடர்பு கொள்ளலாம்.',
    en: 'For literary discussions, book purchases, keynote invitations, or creative collaborations.'
  },

  // Footer
  footerTagline: { ta: 'தத்துவம் • அன்பு • வலி • மகிழ்ச்சி', en: 'Philosophy • Love • Pain • Happiness' },
  copyright: { ta: '© 2026 ராகுல் செபாஸ்டியன். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை', en: '© 2026 Rahul Sebastian. All Rights Reserved' },
  developedBy: { ta: 'Designed & Developed by PHANIX TECH', en: 'Designed & Developed by PHANIX TECH' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ta');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ta' ? 'en' : 'ta'));
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
