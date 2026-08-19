import React from 'react';
import { X, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
  if (!project) return null;

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

          {/* Project Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 bg-indigo-500 text-white">
                {project.categoryLabel}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.date}
              </span>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                项目详情
              </h3>
              <p className={`leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {project.longDescription}
              </p>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                技术栈
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border ${
                      darkMode ? 'bg-neutral-800 border-neutral-700 text-neutral-200' : 'bg-neutral-100 border-neutral-200 text-neutral-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-200/80 dark:border-neutral-800">
              {(project.demoUrl || project.liveUrl) && (
                <a
                  href={project.demoUrl || project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>访问在线演示</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border transition-colors ${
                    darkMode ? 'border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700' : 'border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>查看源码</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
