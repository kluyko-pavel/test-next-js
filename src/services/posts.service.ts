import { POSTS_URL } from "@/constants";

export const PostsService = {
  async getPosts() {
    const res: Response = await fetch(POSTS_URL, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  },
};
