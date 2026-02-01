"use client";
import Image from "next/image";
import type { PostDetailProps } from "../../../_types/post";
import { formatDate, sanitizeContent } from "../../../_utils";

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <section className="max-w-[800px] w-10/12 mx-auto mt-10 space-y-6">
      <figure>
        <Image
          width={post.thumbnail.width}
          height={post.thumbnail.height}
          src={post.thumbnail.url}
          alt={post.title}
          className="rounded-lg w-full"
        />
      </figure>
      <div className="flex justify-between items-start">
        <time className="text-sm text-gray-500">
          {formatDate(post.createdAt)}
        </time>
        <div className="flex gap-2">
          {post.categories.map(category => (
            <span
              key={category.id}
              className="border border-gray-300 text-blue-600 rounded px-2 py-1 text-xs"
            >
              {category.name}
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
