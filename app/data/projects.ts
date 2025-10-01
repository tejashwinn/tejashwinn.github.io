// TODO: Implement projects functionality

import { Project } from "./schema";

const personalProject: Project = {
  title: "Personal Website",
  description: "A personal portfolio website built with Next.js and Tailwind CSS.",
  url: "https://www.tejashwinn.com",
  github: "https://github.com/tejashwinn/tejashwinn.github.io",
  isActive: true
};

export const projects: Project[] = [
  personalProject
]