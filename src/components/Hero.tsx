import React from 'react';
import { ArrowRight, Github, Twitter, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/mockData';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>接受优质全栈与 AI 项目咨询合作</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6">
              你好，我是 <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>。<br />
              致力于打造智能软件与美学交互。
            </h1>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed mb-8 max-w-xl">
              {PERSONAL_INFO.tagline} {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium text-sm hover:opacity-95 transition-all shadow-sm group"
              >
                <span>浏览作品集</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200/80 dark:border-neutral-700"
              >
                <Mail className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                <span>与我联系</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mr-2">社交主页:</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Visual Column / Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-neutral-200 to-neutral-400 dark:from-neutral-800 dark:to-neutral-700 opacity-50 blur-xl"></div>

              <div className="relative rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-xl">
                {/* Header terminal bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>sky@studio ~ v2.6</span>
                  </div>
                </div>

                {/* Avatar & Quick Bio */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-16 h-16 rounded-xl object-cover border-2 border-neutral-200 dark:border-neutral-700 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white text-base">Sky</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{PERSONAL_INFO.title}</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">📍 {PERSONAL_INFO.location}</p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                    <span className="text-2xl font-bold text-neutral-900 dark:text-white block">{PERSONAL_INFO.stats.yearsExperience}</span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">从业经验年限</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                    <span className="text-2xl font-bold text-neutral-900 dark:text-white block">{PERSONAL_INFO.stats.projectsShipped}</span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">交付高质量项目</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                    <span className="text-2xl font-bold text-neutral-900 dark:text-white block">{PERSONAL_INFO.stats.openSourceRepos}</span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">开源贡献仓库</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                    <span className="text-2xl font-bold text-neutral-900 dark:text-white block">100%</span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">客户好评率</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <span>技术栈: React, TS, AI, Node</span>
                  <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-amber-500" /> 独立开发者</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
