# Sky 的个人网站 (Sky Personal Website)

> 🌟 **1 人 + AI = 个人超级团队**
> 这是一个基于 **React 19 + TypeScript + Vite + Tailwind CSS** 构建的现代化个人 IP 中文网站。无论你是想建立自己的个人作品集、数字花园，还是学习现代前端开发与 AI 时代独立开发者的工作流，这个项目都是为你量身打造的开源模板！

---

## 🛠️ 技术栈简介

- **React 19**: 现代前端 UI 库，负责高效的组件化渲染与状态管理。
- **TypeScript**: 强类型 JavaScript 语言，提供极佳的代码提示与安全检查。
- **Vite 6**: 极速的前端构建与开发服务器工具。
- **Tailwind CSS (v4)**: 实用优先的原子化 CSS 框架，轻松实现响应式设计与深色/浅色模式切换。
- **Lucide React**: 现代化图标库。
- **Motion (Framer Motion)**: 优雅流畅的页面与弹窗动画。

---

## 📂 文件目录与详细功能介绍（小白必读）

为了让零基础的新手也能完全看懂并学会修改，下面为您详细拆解本项目中**每一个文件**的功能和作用：

```text
├── .github/
│   └── workflows/
│       └── deploy.yml       # [GitHub Actions 自动化部署配置] 每次推送到主分支时，自动打包并部署到 GitHub Pages
├── assets/                  # [静态资源目录] 存放上传的图片或头像等素材
├── src/
│   ├── components/          # [UI 组件目录] 存放网站拆分出来的各个独立积木块
│   │   ├── About.tsx        # 「关于我」组件：展示个人背景、心路历程与技能雷达/进度条
│   │   ├── ArticleModal.tsx # 「文章阅读弹窗」组件：当点击数字笔记文章时弹出阅读全文的窗口
│   │   ├── Contact.tsx      # 「联系方式」组件：聚合社交触点（GitHub, 小红书, 邮箱）与在线留言表单
│   │   ├── DigitalGarden.tsx# 「数字笔记/文章」组件：支持关键词搜索、分类筛选的文章列表卡片
│   │   ├── Footer.tsx       # 「页脚」组件：包含品牌 Logo、版权说明以及带有悬停缩放动画的社交媒体图标（GitHub, Twitter/X, 知乎）
│   │   ├── Hero.tsx         # 「首页横幅」组件：主打标语（1人+AI超级团队）、CTA 引导按钮与终端模拟卡片
│   │   ├── Navbar.tsx       # 「顶部导航栏」组件：自适应导航、移动端折叠菜单与白天/黑夜模式切换开关
│   │   ├── Portfolio.tsx    # 「项目作品」组件：展示开源项目、AI应用、效率工具，支持分类标签筛选
│   │   └── ProjectModal.tsx # 「项目详情弹窗」组件：展示项目的详细长文本、技术栈与外部链接
│   ├── data/
│   │   └── mockData.ts      # [数据仓库] 集中管理所有的项目作品数据、文章内容与技能列表。你可以直接在这里修改文字来替换成你自己的经历！
│   ├── App.tsx              # [根组件] 统筹全局，管理白天/黑夜模式状态 (`darkMode`)，并将 Navbar、Hero、About 等所有页面板块按顺序组装在一起
│   ├── index.css            # [全局样式文件] 引入 Tailwind CSS 核心配置
│   └── main.tsx             # [应用入口文件] 将根组件 `<App />` 挂载到 HTML 页面中的 `#root` 节点上
├── .env.example             # [环境变量示例文件] 记录项目所需的各类 API Key 占位符
├── .gitignore               # [Git 忽略文件] 告诉 Git 哪些临时文件夹（如 node_modules、dist）不需要上传
├── index.html               # [HTML 主页面] 网站的根 HTML 模板，包含网页标题、SEO 描述等元数据
├── metadata.json            # [应用元数据] 定义 AI Studio 框架识别的名称、描述与权限
├── package.json             # [项目配置文件] 记录项目的名称、版本、运行脚本（`npm run dev` 等）及第三方依赖库
├── tsconfig.json            # [TypeScript 配置文件] 规定 TypeScript 的编译规则
└── vite.config.ts           # [Vite 构建配置文件] 配置路径别名（`@/`）以及相对路径支持（`base: './'`，确保部署在 GitHub Pages 时路径不失效）
```

---

## 🚀 零基础本地运行指南（小白手把手教程）

如果你想在自己的电脑上运行和修改这个网站，只需照着以下 3 步操作：

### 第一步：安装 Node.js 环境
确保电脑已安装 Node.js（建议版本 `v18` 或以上）。可在终端运行：
```bash
node -v
```

### 第二步：下载源码并安装依赖
在终端中进入项目根目录，运行以下命令安装项目所需的第三方依赖包：
```bash
npm install
```

### 第三步：启动本地开发服务器
运行以下命令启动本地预览：
```bash
npm run dev
```
终端会输出一个访问地址（通常是 `http://localhost:3000`）。复制并在浏览器中打开，你就能实时看到这个精美的个人网站了！当你修改 `src/data/mockData.ts` 中的文字时，网页会自动刷新。

---

## 📦 部署上线指南（免费发布到 GitHub Pages）

本项目已经为你配好了自动化部署流水线，小白也可以轻松将网站发布到互联网上：

1. **在 GitHub 上创建一个新仓库**（例如命名为 `my-website`）。
2. **将代码推送到 GitHub**：
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Sky personal website"
   git branch -M main
   git remote add origin https://github.com/你的GitHub用户名/你的仓库名.git
   git push -u origin main
   ```
3. **开启 GitHub Pages 自动部署**：
   - 进入你的 GitHub 仓库页面，点击 **Settings** -> **Pages**。
   - 在 **Build and deployment** 下的 **Source**，选择 **GitHub Actions**。
   - 推送代码后，GitHub 会自动运行 `.github/workflows/deploy.yml` 工作流。几分钟后，你就会得到一个公开访问的在线网址（如 `https://你的用户名.github.io/仓库名/`）！

---

## 📄 License
MIT License
