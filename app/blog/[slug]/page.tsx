import fs from "fs";
import path from "path";
import matter from "gray-matter"; // for frontmatter metadata
import dynamic from "next/dynamic";

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;

  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  // Import MDX file directly as a component
  const Post = dynamic(() => import(`@/content/blog/${params.slug}.mdx`));

  return (
    <article className="prose lg:prose-xl mx-auto py-10">
      <Post />
    </article>
  );
}
