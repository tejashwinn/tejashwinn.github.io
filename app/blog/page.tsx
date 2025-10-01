
import Link from 'next/link';
import { BLOG_POSTS_GROUPED_BY_YEAR } from '../data/blog';

export default function BlogList() {
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
      </section>
      <div className="space-y-8">
        {Object
          .entries(BLOG_POSTS_GROUPED_BY_YEAR)
          // Sort years descending
          .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
          .map(([year, yearPosts]) => (
            <div key={year}>
              <h2 className="text-2xl font-bold mb-4">{year}</h2>
              <ul className="space-y-4">
                {yearPosts.map((post) => (
                  <li key={post.id} className="">
                    <Link
                      href={post.url}
                      className="text-lg font-semibold underline"
                    >
                      {post.title}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {post.formattedDate}
                    </p>

                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </>

  );
}
