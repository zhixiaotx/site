import React, { useState } from 'react';
import { ARTICLES } from '../data/mockData';
import { Article } from '../types';
import { Clock, Calendar, ArrowRight, X, Sparkles } from 'lucide-react';

export const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="articles" className="py-24 bg-neutral-50/50 dark:bg-neutral-900/40 border-y border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 uppercase block mb-2">深度思考与技术文章</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            文章与工程洞察
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
            探讨 AI 工程化、极简软件架构以及产品设计美学的深度思考。
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900/80 backdrop-blur-md text-white">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-semibold text-neutral-900 dark:text-white">
                  <span>阅读全文</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 md:p-10">
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                aria-label="关闭弹窗"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 inline-block mb-3">
                  {selectedArticle.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}</span>
                </div>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden mb-8 bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 space-y-4 text-sm md:text-base leading-relaxed">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={idx} className="text-lg font-bold text-neutral-900 dark:text-white mt-6 mb-2">{paragraph.replace('### ', '')}</h3>;
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>

              <div className="mt-10 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-500">作者: Sky</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-medium"
                >
                  关闭文章
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
