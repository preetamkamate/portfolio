export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  features?: string[];
  result?: string;
  githubUrl: string;
  featured: boolean;
  highlightStat?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  metricLabel: string;
  metricValue: string;
  description?: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  updated: string;
  loading: boolean;
}
