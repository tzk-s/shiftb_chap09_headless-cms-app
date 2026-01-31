"use client";
import { usePostDetail } from "@/app/_hooks/usePostDetail";
import { useParams } from "next/navigation";
import PostDetail from "./_components/PostDetail";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { post, error, isLoading } = usePostDetail(id);

  if (isLoading) return <p className="text-center mt-10">読み込み中...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!post) return null;

  return <PostDetail post={post} />;
}
