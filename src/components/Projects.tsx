import React, { useState } from 'react';
import { PROJECTS } from '../data/mockData';
import { Project } from '../types';
import { ExternalLink, Github, Star, Sparkles, X, Calendar } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('全部');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['全部', 'AI', 'Full-Stack', 'Design', 'Open Source'];

  const filteredProjects = filter === '全部' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 uppercase block mb-2">精选作品集</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              代表作品与开源项目
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800/60 p-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900/80 backdrop-blur-md text-white">
                    {project.category}
                  </span>
                </div>
                {project.stars && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-neutral-800 dark:text-neutral-200 shadow-xs">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.date}
                    </span>
                    <span className="text-neutral-900 dark:text-white font-semibold group-hover:underline flex items-center gap-1">
                      查看详情 →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 md:p-8">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                aria-label="关闭弹窗"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 inline-block mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-neutral-500">
                  <span>发布时间: {selectedProject.date}</span>
                  {selectedProject.stars && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {selectedProject.stars} GitHub Star
                    </span>
                  )}
                </div>
              </div>

              {/* Image in Modal */}
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Description */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">项目概述与架构</h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-3">技术栈</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action links */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium text-sm hover:opacity-95 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>在线预览</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border font-medium text-sm transition-colors ${
                      selectedProject.liveUrl
                        ? 'border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                        : 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>源码仓库</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
