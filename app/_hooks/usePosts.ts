import { useState, useEffect } from "react";
import { PostListResponseSchema, type Post } from "../_types/post";
import { handleApiError } from "../_utils";
import { API_BASE_URL } from "../_constants/api";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/posts`);
        if (!res.ok) throw new Error("データの取得に失敗しました。");
        const json = await res.json();
        const result = PostListResponseSchema.safeParse(json);
        if (!result.success) {
          console.error("Schema validation error:", result.error);
          throw new Error("データ形式が正しくありません。");
        }
        setPosts(result.data.posts);
      } catch (err) {
        setError(handleApiError(err));
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return { posts, error, isLoading };
};
