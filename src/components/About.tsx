import React, { useState } from 'react';
import { SKILL_CATEGORIES, TIMELINE, PERSONAL_INFO } from '../data/mockData';
import { Code2, FileCode, Palette, Sparkles, Server, Cpu, Bot, Database, GitBranch, Layout, Cloud, Zap, Briefcase, GraduationCap } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4" />,
  FileCode: <FileCode className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
  Bot: <Bot className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  GitBranch: <GitBranch className="w-4 h-4" />,
  Layout: <Layout className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />
};

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'timeline'>('skills');

  return (
    <section id="about" className="py-24 bg-neutral-50/50 dark:bg-neutral-900/40 border-y border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 uppercase block mb-2">背景与专业技能</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            秉持匠心与实用主义的工程实践。
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
            {PERSONAL_INFO.bio} 我深信干净的代码、严谨的设计标准以及能够真正解决真实痛点的产品价值。
          </p>
        </div>

        {/* Toggle between Skills and Timeline */}
        <div className="flex items-center gap-2 mb-10 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'skills'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            技术栈与能力
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'timeline'
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            职业经历与教育
          </button>
        </div>

        {/* Skills View */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-5 flex items-center justify-between">
                  <span>{cat.name}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono">
                    {cat.skills.length} 项核心
                  </span>
                </h3>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-medium text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                          <span className="text-neutral-500 dark:text-neutral-400">
                            {iconMap[skill.iconName] || <Sparkles className="w-4 h-4" />}
                          </span>
                          {skill.name}
                        </span>
                        <span className="font-mono text-neutral-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-neutral-900 dark:bg-white rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Timeline View */}
        {activeTab === 'timeline' && (
          <div className="max-w-3xl space-y-6 animate-in fade-in duration-300">
            {TIMELINE.map((item) => (
              <div 
                key={item.id}
                className="relative pl-8 pb-8 border-l border-neutral-200 dark:border-neutral-800 last:pb-0"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white flex items-center justify-center text-neutral-900 dark:text-white shadow-xs">
                  {item.type === 'work' ? <Briefcase className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
                </div>

                <div className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl p-6 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {item.year}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">
                      {item.organization}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
                    {item.role}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
