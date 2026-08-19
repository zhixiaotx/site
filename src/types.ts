export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel?: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  featured: boolean;
  stars?: number;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'AI 实践' | '前端开发' | '独立思考' | '数字游民';
  readTime: string;
  date: string;
  views: number;
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  category: 'Frontend' | 'AI & LLM' | 'Design' | 'Workflow';
  iconName: string;
}
