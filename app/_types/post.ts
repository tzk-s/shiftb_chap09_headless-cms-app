import { z } from "zod";

export const MicroCmsPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.string(),
  thumbnail: z.object({
    url: z.url(),
    height: z.number(),
    width: z.number(),
  }),
  categories: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    }),
  ),
});

export const PostListResponseSchema = z.object({
  contents: z.array(MicroCmsPostSchema),
  totalCount: z.number(),
  offset: z.number(),
  limit: z.number(),
});

export type Post = z.infer<typeof MicroCmsPostSchema>;

export const PostDetailResponseSchema = MicroCmsPostSchema;
