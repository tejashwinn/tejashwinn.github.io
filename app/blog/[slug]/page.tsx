import fs from 'fs';
import path from 'path';
import dynamic from "next/dynamic";

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
  const postsDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(postsDir);

  return files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    return { slug };
  });
}

