import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, Search } from 'lucide-react';
import { articlesData } from '../data/mockData';
import { Article } from '../types';
import { ArticleModal } from './ArticleModal';
import { motion } from 'motion/react';

interface DigitalGardenProps {
  darkMode: boolean;
}

export const DigitalGarden: React.FC<DigitalGardenProps> = ({ darkMode }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articlesData.filter(
    (art) =>
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="garden" className={`py-20 md:py-32 border-t ${darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-50/60 border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            Digital Garden
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            数字笔记与深度思考
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            记录 AI 时代下的技术探索、独立开发实战与个人成长心得。
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className={`relative flex items-center rounded-2xl border shadow-sm transition-all ${
            darkMode ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
          }`}>
            <Search className="absolute left-4 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="搜索文章、关键词或分类..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-transparent rounded-2xl focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedArticle(article)}
              className={`group p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700'
                  : 'bg-white border-neutral-200/80 hover:border-neutral-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    {article.category}
                  </span>
                  <span className={`text-xs flex items-center gap-1 ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-3 group-hover:text-indigo-500 transition-colors line-clamp-2 ${
                  darkMode ? 'text-white' : 'text-neutral-900'
                }`}>
                  {article.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${
                  darkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between">
                <span className={`text-xs flex items-center gap-1 ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  阅读全文 <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Article Reader Modal */}
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          darkMode={darkMode}
        />
      </div>
    </section>
  );
};
