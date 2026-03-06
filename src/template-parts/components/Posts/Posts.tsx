"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import "./Posts.scss";

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

type PostsProps = {
    posts: Post[];
    perPage?: number;
};

export default function Posts({ posts, perPage = 6 }: PostsProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const sortedPosts = useMemo(() => {
        return [...posts].sort((a, b) => {
            return (
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            );
        });
    }, [posts]);

    const totalPages = Math.ceil(sortedPosts.length / perPage);

    const currentPosts = sortedPosts.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );

    const truncate = (text: string, maxLength: number) => {
        if (!text) return "";
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength).trim() + "...";
    };

    return (
        <section className="posts">
            <div className="posts__container">
                <h2 className="posts__title">All blog posts</h2>

                <div className="posts__grid">
                    {currentPosts.map((post) => (
                        <article key={post.id} className="posts__card">
                            <Link className="posts__card-image" href={post.url}>
                                <img
                                    src={`/images/posts/${post.image}.jpg`}
                                    alt={post.title}
                                />
                            </Link>
                            <div className="posts__meta">
                                <span>{post.author}</span>
                                <span className="posts__dot">•</span>
                                <span>{post.publishedAt}</span>
                            </div>
                            <h3 className="posts__card-title">
                                <Link href={post.url}>{post.title}</Link>
                            </h3>
                            <p className="posts__excerpt">
                                {truncate(post.content, 120)}
                            </p>
                            <div className="posts__categories">
                                {post.categories.map((cat, index) => (
                                    <span key={index} className="posts__category">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
                <div className="posts__pagination">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                        className="posts__nav"
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`posts__page ${currentPage === page ? "is-active" : ""
                                    }`}
                            >
                                {page}
                            </button>
                        )
                    )}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                        className="posts__nav"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}