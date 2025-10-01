interface BlogPost {
  title: string;
  date: string;
  summary: string;
  url: string;
  uri: string;
  isActive: boolean
}

const samplePost: BlogPost = {
  title: "My First Blog Post",
  date: "2025-08-01",
  summary: "",
  url: "/blog/my-first-post",
  uri: "my-first-post" ,
  isActive: true
};

export const BLOG_POSTS: BlogPost[] = [
  samplePost
];  