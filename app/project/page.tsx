import Link from 'next/link';
import { BLOG_POSTS } from '../data/blog';

export default function ProjectList() {

    return (
        <div className="prose lg:prose-xl">
            <Link href="/" className="text-2xl font-bold hover:text-blue-600">Home</Link>
            <ul>
                {
                    BLOG_POSTS.map((blogPost) => {
                        return (
                            <li key={blogPost.uri}>
                                <Link href={`/blog/${blogPost.uri}`}>{blogPost.title}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}