import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/mockData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: '精选项目' },
    { id: 'about', label: '关于我' },
    { id: 'articles', label: '技术文章' },
    { id: 'playground', label: 'AI 实验室' },
    { id: 'contact', label: '联系合作' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode ? 'bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 py-3' : 'bg-white/80 backdrop-blur-md border-b border-neutral-200/80 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm transition-transform group-hover:scale-105">
            <img src="./favicon.png" alt="Sky" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <span className="font-semibold text-neutral-900 dark:text-white tracking-tight text-base block leading-none">
              {PERSONAL_INFO.name}
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-100/80 dark:bg-neutral-800/60 p-1.5 rounded-full border border-neutral-200/60 dark:border-neutral-700/60 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="切换主题"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>与我交流</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            aria-label="切换移动端菜单"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-xl px-6 py-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-2 w-full py-2.5 rounded-xl text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>与我交流</span>
          </button>
        </div>
      )}
    </header>
  );
};
