import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Feather, BookOpen, User, Award, Mail, Download, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('[PWA] User accepted install prompt');
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  const navLinks = [
    { path: '/', label: t('navHome'), icon: Feather },
    { path: '/about', label: t('navAbout'), icon: User },
    { path: '/books', label: t('navBooks'), icon: BookOpen },
    { path: '/writings', label: t('navWritings'), icon: Feather },
    { path: '/awards', label: t('navAwards'), icon: Award },
    { path: '/contact', label: t('navContact'), icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo Emblem */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#DC2626] text-white flex items-center justify-center font-mono font-extrabold text-sm rounded-sm group-hover:bg-[#B91C1C] transition-colors shadow-md">
              RS
            </div>
            <div className="flex flex-col">
              <span className="font-slanted text-lg md:text-xl uppercase font-bold text-slate-900 tracking-tight group-hover:text-[#DC2626] transition-colors">
                RAHUL SEBASTIAN
              </span>
              <span className="text-[10px] font-mono text-[#DC2626] uppercase font-extrabold tracking-widest -mt-1">
                {language === 'ta' ? 'எழுத்தாளர் • கவிஞர்' : 'Writer • Poet'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-mono text-xs uppercase font-extrabold tracking-wider transition-colors relative py-1 ${
                    isActive(link.path)
                      ? 'text-[#DC2626]'
                      : 'text-slate-700 hover:text-[#DC2626]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#DC2626] rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* PWA App Install Button for Desktop */}
            {isInstallable && (
              <button
                onClick={handleInstallPWA}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#DC2626] text-white font-mono text-xs font-extrabold hover:bg-[#B91C1C] transition-all shadow-sm animate-pulse"
                title="Install Application on Desktop/Mobile"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{language === 'ta' ? 'ஆப் நிறுவ 📲' : 'INSTALL APP 📲'}</span>
              </button>
            )}

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-100 border border-slate-200 text-slate-900 font-mono text-xs font-extrabold hover:bg-[#DC2626] hover:text-white hover:border-[#DC2626] transition-all shadow-xs"
              title="Switch Language / மொழியை மாற்றவும்"
            >
              <Globe className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>{language === 'ta' ? 'ENGLISH' : 'தமிழ்'}</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {isInstallable && (
              <button
                onClick={handleInstallPWA}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm bg-[#DC2626] text-white font-mono text-[10px] font-extrabold"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>INSTALL</span>
              </button>
            )}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm bg-slate-100 border border-slate-200 text-slate-900 font-mono text-xs font-bold"
            >
              <Globe className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>{language === 'ta' ? 'EN' : 'தமிழ்'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900 hover:text-[#DC2626] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 font-mono text-xs uppercase font-extrabold tracking-wider p-2 rounded-sm transition-colors ${
                  isActive(link.path)
                    ? 'bg-red-50 text-[#DC2626]'
                    : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4 text-[#DC2626]" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};
