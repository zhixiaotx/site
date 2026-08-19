import React from 'react';
import { PERSONAL_INFO } from '../data/mockData';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200/80 dark:border-neutral-800 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
              <img src="./favicon.png" alt="Sky" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="font-bold text-neutral-900 dark:text-white tracking-tight text-sm">
              {PERSONAL_INFO.name} — Mysite
            </span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. | By Sky.
          </p>
        </div>

        <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
