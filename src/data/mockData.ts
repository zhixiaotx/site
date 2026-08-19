import { Project, Article, TimelineItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Sky",
  title: "全栈工程师 & AI 产品创造者",
  tagline: "专注于极简数字体验、智能 AI 代理与有温度的软件架构。",
  bio: "嗨，我是 Sky。我是一名软件工程师与产品创造者，热爱人工智能、人机交互与精炼极简设计的交汇点。我致力于打造自然、流畅、令人愉悦的高性能产品。",
  location: "旧金山 / 远程",
  email: "123456@gmail.com",
  github: "https://github.com/zhixiaotx",
  twitter: "https://twitter.com/",
  linkedin: "https://linkedin.com/in/",
  avatar: "./favicon.png",
  stats: {
    yearsExperience: "5+",
    projectsShipped: "30+",
    openSourceRepos: "15+",
    happyClients: "20+"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "nexus-ai",
    title: "Newtab",
    description: "newtab，极简导航",
    longDescription: "NewTab — 现代化多端同步起始页与仪表盘（全网最详尽保姆级专业指南）",
    category: "AI",
    tags: ["TypeScript", "React", "TailwindCSS"],
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1783959277848_【哲风壁纸】云-仙与千寻.png",
    liveUrl: "https://newtab-uqg.pages.dev/",
    githubUrl: "https://github.com/zhixiaotx/newtab",
    featured: true,
    stars: 248,
    date: "2026-08-10"
  },
  {
    id: "zenith-ui",
    title: "html渲染器",
    description: "一个基于 Cloudflare Workers 的永久HTML链接生成服务",
    longDescription: "HTML渲染器是一个轻量级的Web应用，允许用户通过三种方式上传HTML内容，并生成永久有效的短链接，方便分享和访问。所有数据存储在 Cloudflare Workers KV 中，享受全球CDN加速。",
    category: "Design",
    tags: ["Html","css","JavaScript","Shell", "js"],
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1783959269223_【哲风壁纸】云彩-夜晚-夜景.png",
    liveUrl: "https://ai2html.rainsky.cc.cd/",
    githubUrl: "https://github.com/zhixiaotx/ai2html",
    featured: true,
    stars: 512,
    date: "2026-08-06"
  },
  {
    id: "aurora-flow",
    title: "Myhub",
    description: "OmniAI Studio / 智能多模型全栈 AI 助手与创作工作台",
    longDescription: "一个功能强大的全栈 AI 交互与多模态创作工作台（React 19 + Vite + Express + Tailwind CSS v4），支持 Google Gemini、OpenAI、DeepSeek 及自定义兼容 API，集成了文本对话、多模态附件解析、AI 图像生成、AI 视频生成及高级提示词工程管理。",
    category: "Full-Stack",
    tags: ["Node.js", "Express", "Vite", "React 19", "Tailwind CSS v4"],
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1783959274191_【哲风壁纸】万里长城-写风.png",
    liveUrl: "https://zhixiaotx.github.io/myhub/",
    githubUrl: "https://github.com/zhixiaotx/myhub/",
    featured: true,
    stars: 184,
    date: "2026-08"
  },
  {
    id: "quantum-cli",
    title: "aurora-tab：星海导航",
    description: "星海导航 · AuroraTab。",
    longDescription: "一个美观、零后端依赖的「浏览器新标签页 / 网址导航首页」，对标极光 Tab 的功能与版式，品牌自研为 AuroraTab（中文名「星海导航」）。技术栈：Vite 5 + React 18 + JavaScript(JSX) + Tailwind CSS v3，纯玻璃拟态自定义 UI，不依赖任何 UI 组件库。",
    category: "Open Source",
    tags: ["JavaScript(JSX)", "Node.js", "Vite 5", "React 18", "Tailwind CSS v3"],
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1783959273017_【哲风壁纸】原野-壁纸-天空.png",
    liveUrl: "https://aurora-tab.rainsky.cc.cd/",
    githubUrl: "https://github.com/zhixiaotx/aurora-tab",
    featured: true,
    stars: 92,
    date: "2026-07"
  },
  {
    id: "ether-notes",
    title: "AI Navigator-ai导航",
    description: "AI Navigator-ai导航",
    longDescription: "这是一个基于 React, Vite 和 Tailwind CSS 构建的 AI 工具导航网站。",
    category: "Full-Stack",
    tags: ["Node.js", "Express", "Vite", "React 19", "Tailwind CSS v4"],
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1783959289720_【哲风壁纸】壁纸-度假-沙滩.png",
    liveUrl: "https://ai-navigator.wasmer.app/",
    githubUrl: "https://github.com/zhixiaotx/AI-Navigator",
    featured: false,
    stars: 135,
    date: "2026-07"
  },
  {
    id: "neural-canvas",
    title: "药研导航",
    description: "药研导航",
    longDescription: "药研导航",
    category: "AI",
    tags: ["Html", "Css", "js"],
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1783959260012_【哲风壁纸】公路-公路景观-海景.png",
    liveUrl: "https://dh-drug.wasmer.app/",
    githubUrl: "https://github.com/zhixiaotx/dh",
    featured: false,
    stars: 304,
    date: "2026-07"
  },
 {
    id: "zxsla",
    title: "zxsla",
    description: "个人主页导航",
    longDescription: "个人主页导航",
    category: "AI",
    tags: ["Html", "Css", "js"],
    image: "https://imgbed.stimi.cc.cd/file/壁纸/【哲风壁纸】帆船-沙滩-治愈系.png",
    liveUrl: "https://zxsla.wasmer.app/",
    githubUrl: "https://github.com/zhixiaotx/zxsla",
    featured: true,
    stars: 210,
    date: "2026-06-28"
  },
  {
    id: "Personal-Homepage-ui",
    title: "Personal-Homepage",
    description: "个人主页",
    longDescription: "这是一个简洁优雅的个人主页，展示了个人资料和社交链接。",
    category: "Design",
    tags: ["Html","css","TypeScript", "js"],
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1783959261661_【哲风壁纸】光影-宁静-山谷.png",
    liveUrl: "https://zhixiaotx.github.io/Personal-Homepage/",
    githubUrl: "https://github.com/zhixiaotx/Personal-Homepage",
    featured: true,
    stars: 562,
    date: "2026-06-20"
  },
  {
    id: "markhub-flow",
    title: "markhub",
    description: "MarkHub (智能书签导航与多级分类管理工具)",
    longDescription: "MarkHub 是一个现代化、功能强大的书签导航与多级分类管理应用，旨在帮助用户高效整理、搜索和管理网络书签。",
    category: "Full-Stack",
    tags: ["Node.js", "TypeScript", "Vite", "React 19", "Others", "Tailwind CSS v4"],
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1783959261392_【哲风壁纸】书架-书桌文具.png",
    liveUrl: "https://markhub-eb6.pages.dev/",
    githubUrl: "https://github.com/zhixiaotx/markhub",
    featured: true,
    stars: 196,
    date: "2026-06-23"
  },
  {
    id: "dhnav-oi",
    title: "dhnav",
    description: "极简高颜值智能导航书签大本营 (Aesthetic Navigation & Bookmark Dashboard)",
    longDescription: "本项目是一个基于 React 19 + TypeScript + Vite 6 + Tailwind CSS 精心雕琢的高颜值、模块化、响应式极简导航书签系统。系统融合了极致的动态视觉微动效，并支持多种搜索引擎快捷搜素、自定义书签卡片级管理、分类展开与折叠优化、智能拖拽自定义排序（Drag & Drop）等核心功能，帮助用户在极其简洁优雅的视觉氛围中管理自己的日常网络入口。",
    category: "Open Source",
    tags: ["TypeScript", "Vite 6", "Tailwind CSS", "React 19", "JavaScript", "CSS", "Html"],
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1783959291131_【哲风壁纸】中式建筑-北京.png",
    liveUrl: "https://dhnav.wasmer.app/",
    githubUrl: "https://github.com/zhixiaotx/dhnav",
    featured: true,
    stars: 99,
    date: "2026-06-13"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "2026 年如何设计直观的人机 AI 界面",
    excerpt: "流式 Token、主动式 Agent 与无感 UI 模式如何重塑现代软件设计。",
    content: `随着人工智能成为现代软件的底层运行时，传统的静态表单和僵化向导正让位于流式、对话式和智能代理界面。\n\n### 1. 告别加载转圈\n当用户与 AI 交互时，延迟在所难免。成功的应用通过流式 UI、骨架思维和渐进式渲染来保持用户的专注与流畅体验。\n\n### 2. 上下文的主动感知\n伟大的 AI 从不被动等待指令，而是基于当前工作流状态主动预判需求。在准确的时机呈现相关的操作，能够大幅降低用户的认知负担。`,
    category: "AI 与设计",
    readTime: "4 分钟阅读",
    date: "2026年5月14日",
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1783959273017_【哲风壁纸】原野-壁纸-天空.png",
    slug: "building-intuitive-ai-interfaces"
  },
  {
    id: "art-2",
    title: "为什么极简主义在全栈架构中永不过时",
    excerpt: "更少的代码意味着更少的缺陷。构建健壮、可维护 Web 系统的实用指南。",
    content: `在微服务泛滥和工具链极度复杂的今天，保持简单已成为一种强大的超能力。\n\n### 抽象的代价\n你引入的每一个依赖都是一项潜在的负债。通过坚持端到端强类型（如全栈 TypeScript）的单一或模块化框架，工程团队能够以减少 80% 线上事故的速度进行迭代。`,
    category: "工程实践",
    readTime: "6 分钟阅读",
    date: "2026年4月28日",
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1783959309903_【哲风壁纸】8k-风景.png",
    slug: "why-minimalism-wins"
  },
  {
    id: "art-3",
    title: "如何设计让开发者爱不释手的设计系统",
    excerpt: "零摩擦打通 Figma 设计资产与生产环境 React 代码的桥梁。",
    content: `当设计系统被视为静态 PDF 或过于庞大的组件怪兽时，往往会走向失败。要获得成功，设计Token 必须通过自动化 CI 检查无缝同步到 Tailwind 配置中。`,
    category: "设计系统",
    readTime: "5 分钟阅读",
    date: "2026年3月12日",
    image: "https://imgbed.stimi.cc.cd/file/壁纸/1784334293825_【哲风壁纸】花朵-蓝天.webp",
    slug: "design-systems-developers-love"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "tl-1",
    year: "2024 - 至今",
    role: "独立创造者 & 创始人",
    organization: "Sky Studio / 开源项目",
    description: "构建高性能 AI 工具、设计系统与全球开发者生产力软件。",
    type: "work"
  },
  {
    id: "tl-2",
    year: "2022 - 2024",
    role: "资深全栈工程师",
    organization: "Nexus 科技",
    description: "主导核心前端架构，将遗留单体应用迁移至模块化 React/Node 微前端，并优化实时数据管道。",
    type: "work"
  },
  {
    id: "tl-3",
    year: "2020 - 2022",
    role: "前端工程师 & UI 设计师",
    organization: "Vanguard 实验室",
    description: "负责设计和开发面向客户的 SaaS 数据看板、交互式数据可视化及内部组件库。",
    type: "work"
  },
  {
    id: "tl-4",
    year: "2016 - 2020",
    role: "计算机科学学士",
    organization: "加州大学",
    description: "专注于人机交互、算法设计与分布式系统。",
    type: "education"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "前端与 UI",
    skills: [
      { name: "React / Next.js", level: 95, iconName: "Code2" },
      { name: "TypeScript", level: 90, iconName: "FileCode" },
      { name: "Tailwind CSS", level: 95, iconName: "Palette" },
      { name: "Framer Motion", level: 85, iconName: "Sparkles" }
    ]
  },
  {
    name: "后端与 AI",
    skills: [
      { name: "Node.js & Express", level: 90, iconName: "Server" },
      { name: "Python & FastAPI", level: 80, iconName: "Cpu" },
      { name: "Gemini / LLM API", level: 90, iconName: "Bot" },
      { name: "PostgreSQL / SQL", level: 85, iconName: "Database" }
    ]
  },
  {
    name: "工具与设计",
    skills: [
      { name: "Git & CI/CD", level: 90, iconName: "GitBranch" },
      { name: "Figma / UI UX", level: 88, iconName: "Layout" },
      { name: "Docker & Cloud Run", level: 82, iconName: "Cloud" },
      { name: "Vite & Bundlers", level: 90, iconName: "Zap" }
    ]
  }
];
