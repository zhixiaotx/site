import { Project, Article, SkillItem } from '../types';

export const projectsData: Project[] = [
  {
    id: "nexus-ai",
    title: "Newtab",
    description: "newtab，极简导航",
    longDescription: "NewTab — 现代化多端同步起始页与仪表盘（全网最详尽保姆级专业指南）",
    category: "AI",
    tags: ["TypeScript", "React", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
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
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
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
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1000",
    liveUrl: "https://aurora-tab.rainsky.cc.cd/",
    githubUrl: "https://github.com/zhixiaotx/aurora-tab",
    featured: true,
    stars: 92,
    date: "2026-07"
  },
  {
    id: "ether-notes",
    title: "skysite",
    description: "Sky 个人 IP 与作品集网站",
    longDescription: "欢迎来到 Sky 个人 IP 与作品集网站！这是一个基于 React 19 + TypeScript + Vite + Tailwind CSS 精心打造的现代化、极简主义个人主页与开源作品展示平台。",
    category: "Full-Stack",
    tags: ["Node.js", "Express", "Vite", "React 19", "Tailwind CSS v4"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000",
    liveUrl: "https://skysite.rainsky.cc.cd/",
    githubUrl: "https://github.com/zhixiaotx/skysite",
    featured: false,
    stars: 135,
    date: "2026-07"
  },
];

export const articlesData: Article[] = [
  {
    id: '1-person-ai-team',
    title: '1人 + AI = 超级个体：我是如何构建一人公司的',
    summary: '深度复盘我是如何利用大语言模型和现代化开发工具，将个人生产力放大 10 倍的全过程。',
    content: `在人工智能迅猛发展的今天，传统的“公司组织形态”正在被解构。作为一个独立开发者，我深切体会到了“1人 + AI = 超级团队”的震撼威力。\n\n### 1. 为什么选择超级个体路线？\n过去，构建一个完整的 SaaS 产品需要前端、后端、设计师、运营、文案等多个角色协同。而现在，通过精细的 Prompt Engineering、Cursor 代码助手以及自动化工作流，一个人可以轻松胜任原本需要 5-10 人的工作负载。\n\n### 2. 我的日常 AI 工作流\n- **产品规划**：与 Gemini 进行头脑风暴，产出 PRD 与用户故事。\n- **架构设计**：快速生成前后端骨架代码，省去繁琐的样板代码编写。\n- **内容创作**：利用 AI 辅助提炼文章核心观点并进行多平台排版。\n\n### 3. 核心心法：保持好奇心与审美\n工具越强大，个人的审美和问题定义能力就越发重要。AI 负责执行和加速，而人类负责方向盘和灵魂。`,
    category: 'AI 实践',
    readTime: '6 分钟阅读',
    date: '2026-02-15',
    views: 3420,
  },
  {
    id: 'react-19-modern-patterns',
    title: 'React 19 + Vite 现代化前端工程实践指南',
    summary: '探讨 React 19 最新特性、Server Actions 带来的架构变革以及高性能单页应用构建技巧。',
    content: `React 19 的正式发布为前端开发带来了全新的设计范式。本文将结合实际项目，详细剖析如何利用 Vite 和 Tailwind CSS 构建极速、轻量且高度可维护的现代 Web 应用。\n\n### 主要改进点\n1. **Actions 与 useActionState**：彻底简化了表单提交与异步状态管理。\n2. **ref 作为 Prop**：不再需要复杂的 forwardRef，组件封装更加直观。\n3. **资源预加载优化**：提升首屏加载性能与用户体验。`,
    category: '前端开发',
    readTime: '8 分钟阅读',
    date: '2026-01-20',
    views: 2150,
  },
  {
    id: 'digital-nomad-lifestyle',
    title: '数字游民的自由与自律：远程工作 2 年的心得',
    summary: '从大厂走向独立，谈谈数字游民的生活方式、时间管理与心理建设。',
    content: `摆脱物理办公室的束缚，在咖啡馆、海边或者山野中带着笔记本工作，是许多人的梦想。但自由的背面是极高的自律要求。\n\n### 打造你的异步工作系统\n- 明确每日的交付目标而非工作时长。\n- 建立健康的作息与运动习惯。\n- 持续输出，建立属于自己的数字资产与影响力。`,
    category: '数字游民',
    readTime: '5 分钟阅读',
    date: '2025-12-10',
    views: 1890,
  },
];

export const skillsData: SkillItem[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend', iconName: 'Code' },
  { name: 'TypeScript', level: 90, category: 'Frontend', iconName: 'FileCode' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend', iconName: 'Layout' },
  { name: 'Node.js & Express', level: 85, category: 'Frontend', iconName: 'Server' },
  { name: 'Gemini / LLM Integration', level: 92, category: 'AI & LLM', iconName: 'Cpu' },
  { name: 'Prompt Engineering', level: 90, category: 'AI & LLM', iconName: 'Terminal' },
  { name: 'UI/UX Design & Figma', level: 88, category: 'Design', iconName: 'Palette' },
  { name: 'Git & GitHub Actions', level: 90, category: 'Workflow', iconName: 'GitBranch' },
];
