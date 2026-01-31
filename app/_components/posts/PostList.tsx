"use client";
import { formatDate, sanitizeContent } from "../../_utils";
import type { Post } from "../../_types/post";
import Link from "next/link";

export type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <ul className="max-w-[800px] w-10/12 mx-auto mt-10 space-y-6">
      {posts.map((post: Post) => (
        <li
          key={post.id}
          className="text-left border border-gray-200 p-5 hover:shadow-md transition duration-300"
        >
          <Link href={`/posts/${post.id}`}>
            <div className="flex justify-between items-start">
              <time className="text-[0.8rem] text-[#888]">
                {formatDate(post.createdAt)}
              </time>
              <div className="flex gap-2 flex-wrap justify-end">
                {post.categories.map(category => (
                  <span
                    key={category.id}
                    className="border border-[#06c] text-[#06c] rounded-sm px-2 py-1 text-[0.8rem]"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-[1.5rem] mt-2 text-gray-800">
              {`APIで取得した${post.title}`}
            </h2>
            <div
              className="text-[1rem] mt-2 text-gray-600 line-clamp-2"
              dangerouslySetInnerHTML={{
                __html: sanitizeContent(post.content),
              }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
