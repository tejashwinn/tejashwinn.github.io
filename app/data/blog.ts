import { BlogPost } from "./schema";
import { monthAndDate } from "./util";

const samplePost: BlogPost = {
  id: 1,
  title: "My First Blog Post",
  date: "2025-10-01",
  summary: "First blog",
  url: "/blog/first-post",
  uri: "first-post",
  isActive: true,
  filePath: "content/blog/first-post.mdx"
};

export const BLOG_POSTS: BlogPost[]
  = [
    samplePost
  ].filter(post => post.isActive)
    .map(post => ({
      ...post,
      formattedDate: monthAndDate(post.date)
    })
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());



export const BLOG_POSTS_GROUPED_BY_YEAR: Record<string, BlogPost[]>
  = BLOG_POSTS
    .reduce<Record<string, BlogPost[]>>((acc, post) => {
      const year = new Date(post.date).getFullYear().toString();
      acc[year] = acc[year] || [];
      acc[year].push(post);
      return acc;
    }, {});
