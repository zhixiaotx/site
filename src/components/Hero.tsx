import React from 'react';
import { Sparkles, ArrowRight, Code, Cpu, Terminal, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from '../assets/logo.jpg';

interface HeroProps {
  darkMode: boolean;
  onExplore: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onExplore, onContact }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/15 to-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border transition-colors shadow-sm bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>1 人 + AI = 个人超级团队</span>
            </div>

            {/* Main Title */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15] ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}>
              Hi, 我是 <span className="bg-gradient-to-r from-amber-500 to-indigo-600 bg-clip-text text-transparent">Sky</span> <br />
              全栈开发者 & AI 创造者
            </h1>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed ${
              darkMode ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              热衷于探索大语言模型（LLM）与现代化前端技术的融合。在这里，我分享独立开发实践、AI 工作流心得与数字游民的生活哲学。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExplore}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>探索项目作品</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContact}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium border transition-all ${
                  darkMode
                    ? 'border-neutral-700 bg-neutral-800/60 text-white hover:bg-neutral-800'
                    : 'border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50 shadow-sm'
                }`}
              >
                <span>与我取得联系</span>
              </button>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="mt-12 pt-8 border-t grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 border-neutral-200/80 dark:border-neutral-800">
              <div>
                <div className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  5+
                </div>
                <div className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  开源 AI 项目
                </div>
              </div>
              <div>
                <div className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  10k+
                </div>
                <div className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  技术文章阅读
                </div>
              </div>
              <div>
                <div className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  2年+
                </div>
                <div className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  独立开发经验
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className={`relative rounded-3xl p-6 sm:p-8 border shadow-xl overflow-hidden backdrop-blur-xl ${
              darkMode ? 'bg-neutral-900/90 border-neutral-800' : 'bg-white/90 border-neutral-200/80 shadow-indigo-500/5'
            }`}>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-200/60 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={logoImg}
                      alt="Sky Avatar"
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      Sky
                    </h3>
                    <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      AI Builder & Architect
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  在线构建中
                </span>
              </div>

              {/* Interactive Terminal / Code Snippet Simulation */}
              <div className={`rounded-2xl p-4 font-mono text-xs sm:text-sm mb-6 ${
                darkMode ? 'bg-neutral-950 text-neutral-300' : 'bg-neutral-900 text-neutral-100'
              }`}>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-neutral-400 text-xs">sky-agent.ts</span>
                </div>
                <p className="text-amber-400">// 1人 + AI 个人超级团队工作台</p>
                <p className="text-indigo-300">const <span className="text-white">skyTeam</span> = &#123;</p>
                <p className="pl-4 text-emerald-300">human: <span className="text-neutral-200">'Sky (Product & Vision)'</span>,</p>
                <p className="pl-4 text-emerald-300">aiAgents: <span className="text-neutral-200">['Gemini 2.5', 'Cursor CLI', 'Vite']</span>,</p>
                <p className="pl-4 text-emerald-300">mission: <span className="text-neutral-200">'Build the future of software'</span></p>
                <p className="text-indigo-300">&#125;;</p>
              </div>

              {/* Skills Tags */}
              <div className="space-y-3">
                <div className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  核心技术栈
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React 19', 'TypeScript', 'Tailwind v4', 'Gemini API', 'Node.js', 'Vite'].map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                        darkMode
                          ? 'bg-neutral-800/80 border-neutral-700 text-neutral-300'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
