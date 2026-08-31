import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CustomCursor } from './components/CustomCursor';
import { LoadingPage } from './components/LoadingPage';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WritingsPage } from './pages/WritingsPage';
import { WritingDetailPage } from './pages/WritingDetailPage';
import { BooksPage } from './pages/BooksPage';
import { BookDetailPage } from './pages/BookDetailPage';
import { AwardsPage } from './pages/AwardsPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <LoadingPage />
        <ScrollToTop />
        <CustomCursor />
        <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#FF3B00] selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/writings" element={<WritingsPage />} />
              <Route path="/writings/:slug" element={<WritingDetailPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/books/:slug" element={<BookDetailPage />} />
              <Route path="/awards" element={<AwardsPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};
