export interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  url: string;
  uri: string;
  isActive: boolean
  tags ?: string[];
}

export interface Project {
  title: string;
  description: string;
  url: string;
  github: string;
  isActive?: boolean;
} 
