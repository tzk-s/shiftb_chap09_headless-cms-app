"use client";
import PostList from "./_components/posts/PostList";
import { usePosts } from "./_hooks/usePosts";

export default function Home() {
  const { posts, error, isLoading } = usePosts();
  return (
    <main>
      <h1 className="sr-only">Blog</h1>
      {isLoading ? (
        <p className="text-center mt-10">読み込み中...</p>
      ) : error ? (
        <p className="text-center mt-10 text-red-500">{error}</p>
      ) : (
        <PostList posts={posts} />
      )}
    </main>
  );
}
