import React from 'react';
import { User, Code, Cpu, Layout, Server, Terminal, Palette, GitBranch, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/mockData';
import { motion } from 'motion/react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 md:py-32 border-t ${darkMode ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50/50 border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            About Me
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            关于我与数字游民之路
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            用代码构筑数字世界，借助 AI 放大个体创造力。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio and Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className={`p-8 rounded-3xl border shadow-sm ${
              darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-300' : 'bg-white border-neutral-200/80 text-neutral-700'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                你好，我是 Sky。一名全栈开发者与独立创造者。
              </h3>
              <p className="leading-relaxed mb-4">
                我深信 AI 时代让“超级个体”成为了可能。过去需要庞大团队才能完成的项目，现在通过精心规划和与大模型的协同，一个人也能打造出极具价值的精致产品。
              </p>
              <p className="leading-relaxed mb-6">
                我的技术栈涵盖 React、TypeScript、Node.js 以及现代 AI 代理应用开发。在工作之外，我热爱摄影、阅读与数字游民生活方式，乐于将所思所想分享给开源社区。
              </p>

              <div className="space-y-3 pt-4 border-t border-neutral-200/80 dark:border-neutral-800">
                {[
                  '1人 + AI 超级团队实践者',
                  '专注极简美学与流畅的用户体验',
                  '热衷开源与知识分享（数字花园）',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span className={`font-medium ${darkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className={`p-8 rounded-3xl border shadow-sm ${
              darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200/80'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                核心技能与掌握度
              </h3>

              <div className="space-y-6">
                {skillsData.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className={darkMode ? 'text-neutral-200' : 'text-neutral-800'}>
                        {skill.name}
                      </span>
                      <span className="text-indigo-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className={`w-full h-2.5 rounded-full overflow-hidden ${
                      darkMode ? 'bg-neutral-800' : 'bg-neutral-100'
                    }`}>
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-indigo-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
