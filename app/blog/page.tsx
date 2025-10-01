
import Link from 'next/link';
import { BLOG_POSTS_GROUPED_BY_YEAR } from '../data/blog';

export default function BlogList() {
  return (
    <div className="space-y-8">
      {Object
        .entries(BLOG_POSTS_GROUPED_BY_YEAR)
        .map(([year, yearPosts]) => (
          <section key={year}>
            <h2 className="text-2xl font-bold mb-4">{year}</h2>
            <ul className="space-y-4">
              {yearPosts.map((post) => (
                <li key={post.id} className="border-b pb-4">
                  <Link
                    href={post.url}
                    className="text-lg font-semibold hover:underline"
                  >
                    {post.title}
                  </Link>
                  <p className="text-sm text-gray-500">
                    {post.date}
                  </p>
                  <p className="text-gray-700">{post.summary}</p>
                  {post.tags && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
    </div>
  );
}
