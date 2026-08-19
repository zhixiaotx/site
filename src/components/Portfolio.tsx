import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/mockData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { motion } from 'motion/react';

interface PortfolioProps {
  darkMode: boolean;
}

export const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'tool' | 'opensource' | 'content'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: '全部项目' },
    { id: 'ai', label: 'AI 应用' },
    { id: 'opensource', label: '开源项目' },
    { id: 'tool', label: '效率工具' },
    { id: 'content', label: '创作分享' },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className={`py-20 md:py-32 border-t ${darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-amber-500/10 text-amber-600 dark:text-amber-400">
            Portfolio
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            项目与开源作品
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            精选独立开发、AI 应用与开源组件项目。
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : darkMode
                  ? 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className={`group rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col ${
                darkMode
                  ? 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700'
                  : 'bg-white border-neutral-200/80 hover:border-neutral-300 shadow-sm'
              }`}
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900/80 text-white backdrop-blur-md">
                    {project.categoryLabel}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-900/80 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-bold mb-3 group-hover:text-indigo-500 transition-colors ${
                    darkMode ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${
                          darkMode
                            ? 'bg-neutral-800/80 border-neutral-700 text-neutral-300'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200/80 dark:border-neutral-800">
                    <span className={`text-xs ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                      {project.date}
                    </span>
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1 group-hover:underline">
                      查看详情 <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          darkMode={darkMode}
        />
      </div>
    </section>
  );
};
