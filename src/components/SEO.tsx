import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  article?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Rahul Sebastian | #1 Tamil Author, Poet & Best Erode Writer | ராகுல் செபாஸ்டியன் ஈரோடு",
  description = "Official Portfolio of Rahul Sebastian (Rahul Erode / ராகுல் செபாஸ்டியன்) — Renowned Tamil Author, Poet & Best Erode Writer, B.E (EEE) Engineer, World Record Holder, and Author of 'Ennangalin Kuppai Koodam'. WhatsApp: +91 94881 74434, Instagram: @rahul_sebastian1418.",
  keywords = "Rahul Sebastian, Rahul Sebastian author, Rahul Sebastian poet, Rahul Sebastian Erode, Rahul Erode, Best Erode Writer, Best Tamil Poet Erode, Rahul Sebastian WhatsApp 9488174434, Rahul Sebastian Instagram rahul_sebastian1418, ராகுல் செபாஸ்டியன், ராகுல் ஈரோடு, ராகுல் செபாஸ்டியன் ஈரோடு, ஈரோடு சிறந்த எழுத்தாளர், Ennangalin Kuppai Koodam, எண்ணங்களின் குப்பைக் கூடம்",
  ogImage = "https://rahulsebastian.online/rahul_hero_bg.jpg",
  article = false,
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Dynamic Page Title
    document.title = title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // 3. Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // 4. OpenGraph Meta Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', ogImage);

    let ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute('content', article ? 'article' : 'profile');

    // 5. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const cleanPath = location.pathname.endsWith('/') && location.pathname !== '/'
        ? location.pathname.slice(0, -1)
        : location.pathname;
      canonical.setAttribute('href', `https://rahulsebastian.online${cleanPath}`);
    }
  }, [title, description, keywords, ogImage, article, location]);

  return null;
};
