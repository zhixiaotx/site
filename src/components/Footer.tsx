import React from 'react';
import { Sparkles } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/zhixiaotx/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'Twitter/X',
      url: 'https://twitter.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: '知乎',
      url: 'https://zhihu.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M5.596 15.443c.465 1.09 1.134 2.062 2.008 2.917 1.341 1.31 3.186 2.037 5.219 2.072l-.37 2.115c-3.79-.176-6.611-1.745-8.31-4.608-1.71-2.883-2.112-6.505-1.13-10.395l2.12.502c-.37 1.48-.316 3.084.143 4.542.274.877.689 1.654 1.23 2.355zM12.986 3.25h2.245v3.428h3.385v2.09h-3.385v3.633h-2.245V8.768H8.816V6.678h4.17V3.25zm5.72 6.678c-.28 3.326-1.503 6.075-3.615 8.136-1.488 1.442-3.376 2.378-5.711 2.768l-.42-2.12c1.97-.333 3.498-1.077 4.67-2.185 1.76-1.666 2.75-4.015 2.96-6.6l2.116.101z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className={`py-12 border-t ${darkMode ? 'bg-neutral-950 border-neutral-800 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-600'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="./logo.jpg"
                alt="Footer Logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <span className={`font-bold text-base ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Sky Personal Website
            </span>
          </div>

          {/* Social Media Icons with Hover Zoom */}
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 transform hover:scale-110 shadow-sm ${
                  darkMode
                    ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
                    : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:text-black hover:border-neutral-300'
                }`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-center md:text-left flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Sky. Crafted with React 19 & Tailwind CSS.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
