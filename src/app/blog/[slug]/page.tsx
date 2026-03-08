import posts from "@/data/posts.json";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params; 

  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <article>
      <h1>{post.title}</h1>

      <img src={`/images/posts/${post.image}.jpg`} alt={post.title} />

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}