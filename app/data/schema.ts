export interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  url: string;
  uri: string;
  filePath: string;
  isActive: boolean
  tags ?: string[];
  formattedDate ?: string;
}

export interface Project {
  title: string;
  description: string;
  url: string;
  github: string;
  isActive?: boolean;
} 
