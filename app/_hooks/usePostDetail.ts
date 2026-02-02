import { useState, useEffect } from "react";
import type { PostDetailResponse, Post } from "../_types/post";
import { handleApiError } from "../_utils";
import { API_BASE_URL, MICROCMS_API_KEY } from "../_constants/api";

export const usePostDetail = (id: string | undefined) => {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/${id}`, {
          headers: {
            "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
          },
        });
        if (!res.ok)
          throw new Error(
            res.status === 404 ? "記事が見つかりません" : "サーバーエラー",
          );
        const data: PostDetailResponse = await res.json();
        setPost(data);
      } catch (err) {
        setError(handleApiError(err));
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  return { post, error, isLoading };
};
