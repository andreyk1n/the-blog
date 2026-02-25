import Link from "next/link";
import "./Related.scss";

type Post = {
  id: number;
  title: string;
  url: string;
  image: any;
  categories: string[];
  content: string;
  author: string;
  publishedAt: string;
};

type RelatedProps = {
  posts: Post[];
  limit?: number;
};

export default function Related({ posts, limit = 4 }: RelatedProps) {
  const truncate = (text: string, maxLength: number) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <section className="related">
      <div className="related__container">
        <h2 className="related__title">Recent blog posts</h2>

        <div className="related__grid">
          {posts.slice(0, limit).map((post, index) => (
            <article
              key={post.id}
              className={`related__card related__card--${index + 1}`}
            >
              <Link href={post.url} className="related__image">
                <img src={post.image} alt={post.title} />
              </Link>

              <div className="related__content">
                <div className="related__meta">
                  <span className="related__author">{post.author}</span>
                  <span className="related__dot">•</span>
                  <span className="related__date">{post.publishedAt}</span>
                </div>

                <h3 className="related__card-title">
                  <Link href={post.url}>{post.title}</Link>
                </h3>

                <p className="related__excerpt">
                  {truncate(post.content, 140)}
                </p>

                <div className="related__categories">
                  {post.categories.map((cat, index) => (
                    <span key={index} className="related__category">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
