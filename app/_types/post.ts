export interface MicroCmsPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  categories: {
    id: string;
    name: string;
  }[];
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
}
export interface PostListResponse {
  contents: MicroCmsPost[];
  totalCount: number;
  offset: number;
  limit: number;
}

export type PostListProps = {
  posts: Post[];
};

export type PostDetailProps = {
  post: PostDetailResponse;
};

export type Post = MicroCmsPost;
export type PostDetailResponse = MicroCmsPost;
