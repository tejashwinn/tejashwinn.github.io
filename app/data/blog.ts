import { BlogPost } from "./schema";

const samplePost: BlogPost = {
  id: 1,
  title: "My First Blog Post",
  date: "2025-10-01",
  summary: "First blog",
  url: "/blog/first-post",
  uri: "first-post",
  isActive: true
};

const hiddenPost: BlogPost = {
  id: 2,
  title: "My First hidden Blog Post",
  date: "2025-10-01",
  summary: "Hidden blog",
  url: "/blog/hidden-blog-post",
  uri: "hidden-blog-post",
  isActive: false
};

export const BLOG_POSTS: BlogPost[]
  = [
    samplePost,
    hiddenPost
  ].filter(post => post.isActive)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());



export const BLOG_POSTS_GROUPED_BY_YEAR: Record<string, BlogPost[]>
  = BLOG_POSTS
    .reduce<Record<string, BlogPost[]>>((acc, post) => {
      const year = new Date(post.date).getFullYear().toString();
      acc[year] = acc[year] || [];
      acc[year].push(post);
      return acc;
    }, {});
