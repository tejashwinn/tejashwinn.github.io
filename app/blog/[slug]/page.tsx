import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const blog = await params.slug;
  const filePath = path.join(process.cwd(), 'content/blog', `${blog}.mdx`);
  const source = fs.readFileSync(filePath, 'utf-8');
  const mdxSource = await serialize(source);

  return (
    <article className="prose lg:prose-xl">
      <MDXRemote {...mdxSource} 
      />
    </article>
  );
}
