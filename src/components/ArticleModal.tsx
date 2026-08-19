import React from 'react';
import { X, Calendar, Clock, Eye, Sparkles } from 'lucide-react';
import { Article } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, darkMode }) => {
  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl ${
            darkMode ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
          }`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center border transition-colors cursor-pointer ${
              darkMode ? 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:text-white' : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:text-black'
            }`}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="p-6 sm:p-10 pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                {article.category}
              </span>
              <span className={`text-xs flex items-center gap-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className={`text-xs flex items-center gap-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              {article.title}
            </h2>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className={`prose max-w-none leading-relaxed whitespace-pre-line ${
              darkMode ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              {article.content}
            </div>

            <div className="pt-8 mt-8 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>感谢阅读 Sky 的数字笔记</span>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-sm font-medium bg-neutral-900 text-white dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
              >
                关闭文章
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
