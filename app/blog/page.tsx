import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const blogDir = path.join(process.cwd(), 'content/blog');

export default function BlogList() {
  const posts = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

  return (
    <div className="prose lg:prose-xl">
      <h2>Blog</h2>
      <ul>
        {posts.map((file) => {
          const slug = file.replace(/\.mdx?$/, '');
          return (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>{slug}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}