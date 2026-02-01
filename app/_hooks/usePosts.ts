import { useState, useEffect } from "react";
import type { Post, PostListResponse } from "../_types/post";
import { handleApiError } from "../_utils";
import { API_BASE_URL, MICROCMS_API_KEY } from "../_constants/api";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(API_BASE_URL, {
          headers: {
            "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
          },
        });
        if (!res.ok) throw new Error("データの取得に失敗しました。");
        const data: PostListResponse = await res.json();
        setPosts(data.contents);
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
