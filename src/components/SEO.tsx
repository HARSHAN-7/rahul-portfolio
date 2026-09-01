import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Rahul Sebastian | Best Erode Author, Poet & Storyteller | ராகுல் செபாஸ்டியன் ஈரோடு",
  description = "Official Website of Rahul Sebastian (Rahul Erode / ராகுல் செபாஸ்டியன்) — Best Erode Writer, Author of 'Ennangalin Kuppai Koodam' published by Nerpadapesu Publication.",
  keywords = "Rahul, Rahul Erode, Rahul Sebastian Erode, Best Erode Writer, Rahul Sebastian, ராகுல், ராகுல் ஈரோடு, ராகுல் செபாஸ்டியன் ஈரோடு, ஈரோடு சிறந்த எழுத்தாளர், Ennangalin Kuppai Koodam, எண்ணங்களின் குப்பைக் கூடம், Tamil Poet Erode",
  ogImage = "https://rahulsebastian.com/rahul_hero_bg.jpg",
}) => {
  const location = useLocation();

  useEffect(() => {
    // Dynamic Title Update (SXO / UX)
    document.title = title;

    // Dynamic Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Dynamic Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Dynamic OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // Dynamic OpenGraph Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Dynamic OpenGraph Image
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute('content', ogImage);
    }

    // Dynamic Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://rahulsebastian.com${location.pathname}`);
    }
  }, [title, description, keywords, ogImage, location]);

  return null;
};
