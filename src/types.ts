export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'AI' | 'Full-Stack' | 'Design' | 'Open Source';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  stars?: number;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  organization: string;
  description: string;
  type: 'work' | 'education' | 'milestone';
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; iconName: string }[];
}
