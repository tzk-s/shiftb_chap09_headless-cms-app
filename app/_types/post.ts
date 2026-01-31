import { z } from "zod";

export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  thumbnailUrl: z.url(),
  createdAt: z.string(),
  categories: z.array(z.string()),
  content: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

export const PostListResponseSchema = z.object({
  posts: z.array(PostSchema),
});

export const PostDetailResponseSchema = z.object({
  post: PostSchema,
});
