"use client";
import Image from "next/image";
import type { Post } from "../../../_types/post";
import { formatDate, sanitizeContent } from "../../../_utils";

export type PostDetailProps = { post: Post };

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <section className="max-w-[800px] w-10/12 mx-auto mt-10 space-y-6">
      <figure>
        <Image
          width={800}
          height={450}
          src={post.thumbnailUrl}
          alt={post.title}
          className="rounded-lg w-full"
        />
      </figure>
      <div className="flex justify-between items-start">
        <time className="text-sm text-gray-500">
          {formatDate(post.createdAt)}
        </time>
        <div className="flex gap-2">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="border border-gray-300 text-blue-600 rounded px-2 py-1 text-xs"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: sanitizeContent(post.content) }}
      />
    </section>
  );
}
