import dynamic from "next/dynamic";
import { BLOG_POSTS } from '../../data/blog';
import { BlogPost as BlogPostData } from '../../data/schema';

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const Post = dynamic(() => import(`@/content/blog/${params.slug}.mdx`));

  return (
    <article className="prose lg:prose-xl mx-auto py-10">
      <Post />
    </article>
  );
}


export async function generateStaticParams() {
  return BLOG_POSTS.map((file: BlogPostData) => {
    console.log("Generating static params for slug:", file.uri);
    return { slug: file.uri };
  });
}

