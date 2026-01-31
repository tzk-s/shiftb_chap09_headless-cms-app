import { useState, useEffect } from "react";
import { PostDetailResponseSchema, type Post } from "../_types/post";
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
        const json = await res.json();
        const result = PostDetailResponseSchema.safeParse(json);
        if (!result.success) {
          throw new Error("記事データの取得に失敗しました。");
        }
        setPost(result.data);
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
