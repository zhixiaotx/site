import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, Github, Send } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: '首页' },
    { id: 'about', label: '关于我' },
    { id: 'portfolio', label: '项目作品' },
    { id: 'garden', label: '数字笔记' },
    { id: 'contact', label: '联系方式' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-neutral-900/85 backdrop-blur-md border-b border-neutral-800 shadow-lg'
            : 'bg-white/85 backdrop-blur-md border-b border-neutral-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 group text-left cursor-pointer"
        >
          <div className="w-12 h-12 group-hover:scale-105 transition-transform flex items-center justify-center">
            <img
              src="./logo.jpg"
              alt="Sky Logo"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div>
            <span className={`font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Sky
            </span>
            <span className={`block text-xs font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
              1 人 + AI 超级个体
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-100/60 dark:bg-neutral-800/60 p-1.5 rounded-full border border-neutral-200/60 dark:border-neutral-700/60 backdrop-blur-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSection === link.id
                  ? darkMode
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-white text-neutral-900 shadow-sm'
                  : darkMode
                  ? 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/40'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors border cursor-pointer ${
              darkMode
                ? 'bg-neutral-800 border-neutral-700 text-amber-400 hover:bg-neutral-700'
                : 'bg-neutral-50 border-neutral-200 text-amber-600 hover:bg-neutral-100'
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Github Link */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all border shadow-sm ${
              darkMode
                ? 'bg-neutral-800 border-neutral-700 text-white hover:bg-neutral-700'
                : 'bg-neutral-900 border-neutral-900 text-white hover:bg-neutral-800'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center border cursor-pointer ${
              darkMode
                ? 'bg-neutral-800 border-neutral-700 text-white'
                : 'bg-neutral-100 border-neutral-200 text-neutral-900'
            }`}
            aria-label="Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden absolute top-20 left-0 right-0 border-b p-5 shadow-xl transition-all ${
            darkMode
              ? 'bg-neutral-900 border-neutral-800 text-white'
              : 'bg-white border-neutral-200 text-neutral-900'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? darkMode
                      ? 'bg-neutral-800 text-amber-400 font-semibold'
                      : 'bg-amber-50 text-amber-700 font-semibold'
                    : darkMode
                    ? 'text-neutral-300 hover:bg-neutral-800'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-xl font-medium text-sm border ${
                darkMode
                  ? 'bg-neutral-800 border-neutral-700 text-white'
                  : 'bg-neutral-900 border-neutral-900 text-white'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>访问 GitHub 仓库</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
