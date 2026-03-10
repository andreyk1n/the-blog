import posts from "@/data/posts.json";
import { notFound } from "next/navigation";
import Header from "@/template-parts/partials/Header/Header";
import Footer from "@/template-parts/partials/Footer/Footer";
import './single.scss';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <html lang="en">
      <body>
        <Header />
        <article className="single">
          <h1>{post.title}</h1>

          <img src={`/images/posts/${post.image}.jpg`} alt={post.title} />

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        <Footer />
      </body>
    </html>
  );
}