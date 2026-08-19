import React, { useState } from 'react';
import { Sparkles, Terminal, Cpu, CheckCircle, RefreshCw } from 'lucide-react';

export const Playground: React.FC = () => {
  const [domain, setDomain] = useState<string>('AI 生产力');
  const [loading, setLoading] = useState<boolean>(false);
  const [generatedResult, setGeneratedResult] = useState<{
    title: string;
    stack: string[];
    architecture: string;
    milestones: string[];
  } | null>({
    title: "上下文感知知识图谱助手",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Gemini 2.5 Flash", "Vector DB"],
    architecture: "采用客户端单页应用架构，通过安全的服务端代理端点将上下文向量路由至 Gemini API。",
    milestones: [
      "搭建前端状态管理与本地高效缓存",
      "集成服务端 Gemini API 提示词编排管道",
      "构建交互式图谱可视化 Canvas 画布",
      "打包并部署到云端容器运行环境"
    ]
  });

  const ideas: Record<string, { title: string; stack: string[]; architecture: string; milestones: string[] }> = {
    "AI 生产力": {
      title: "上下文感知知识图谱助手",
      stack: ["React 19", "TypeScript", "Tailwind CSS", "Gemini API", "Vector DB"],
      architecture: "采用客户端单页应用架构，通过安全的服务端代理端点将上下文向量路由至 Gemini API。",
      milestones: [
        "搭建前端状态管理与本地高效缓存",
        "集成服务端 Gemini API 提示词编排管道",
        "构建交互式图谱可视化 Canvas 画布",
        "打包并部署到云端容器运行环境"
      ]
    },
    "开发者工具": {
      title: "零配置云端 API Mock 套件",
      stack: ["Node.js", "Express", "TypeScript", "Docker", "Vite"],
      architecture: "高性能 Express 后端服务，具备动态路由拦截与 OpenAPI 解析能力。",
      milestones: [
        "创建用于代理 Mock 请求的模块化 Express 路由",
        "构建实时请求日志检查看板",
        "增加自动化 Schema 校验与类型生成",
        "发布核心包至 npm 仓库"
      ]
    },
    "设计系统": {
      title: "Token 驱动的可访问性设计系统",
      stack: ["React", "Radix UI", "Tailwind CSS", "Storybook", "Framer Motion"],
      architecture: "基于无障碍底层原语构建，通过 Token 化 Tailwind 样式类进行完美定制。",
      milestones: [
        "定义语义化颜色、间距与排版 Design Tokens",
        "构建核心可访问性基础组件（弹窗、标签页、下拉菜单）",
        "编写详尽的组件文档与交互示例",
        "发布 1.0 版本至组件仓库"
      ]
    }
  };

  const handleGenerate = (selectedDomain: string) => {
    setDomain(selectedDomain);
    setLoading(true);
    setTimeout(() => {
      setGeneratedResult(ideas[selectedDomain] || ideas["AI 生产力"]);
      setLoading(false);
    }, 600);
  };

  return (
    <section id="playground" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 uppercase block mb-2">交互式实验室</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            Sky 的 AI 架构灵感生成器
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
            体验交互式概念生成器，探索 Sky 如何为各类现代化 Web 应用规划可扩展的 AI 架构。
          </p>
        </div>

        {/* Playground Container */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-6 md:p-10 shadow-xl">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-100 dark:border-neutral-800">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">选择业务领域</span>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">选择一个产品原型方向</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.keys(ideas).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleGenerate(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                    domain === cat
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Result Area */}
          {loading ? (
            <div className="py-16 flex flex-col items-center justify-center text-center">
              <RefreshCw className="w-8 h-8 text-neutral-400 animate-spin mb-4" />
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">正在综合规划架构与实施路线图...</p>
            </div>
          ) : generatedResult ? (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/60">
                <div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-200/70 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 inline-block mb-2">
                    {domain} 概念方案
                  </span>
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {generatedResult.title}
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-500/10 px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>架构就绪可落地</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tech Stack */}
                <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  <h5 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-neutral-500" />
                    推荐技术栈
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {generatedResult.stack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4 leading-relaxed">
                    {generatedResult.architecture}
                  </p>
                </div>

                {/* Milestones */}
                <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  <h5 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-neutral-500" />
                    执行里程碑
                  </h5>
                  <ul className="space-y-3">
                    {generatedResult.milestones.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ) : null}

        </div>

      </div>
    </section>
  );
};
