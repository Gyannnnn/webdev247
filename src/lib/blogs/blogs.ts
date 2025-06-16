import axios from "axios";


interface author {
  id: string;
  authorName: string;
  authorBio: string;
  authorLocation: string;
  joinDate: string;
  authorAvatar: string;
  authorLinkedin: string;
  authorX: string;
}

interface blog {
  blogId: string;
  blogNotionId: string;
  blogTitle: string;
  thumbnail: string;
  likes: number;
  blogStatus: string;
  blogAuthor: string;
  blogDate: string;
  relatedTags: string[];
  mainTag: string;
  relatedBlogs: string[];
  blogCatagory: string;
  blogDescription: string;
  author:author
}

interface blogData {
  message: string;
  liveBlogs: blog[]
}

export async function getLiveBlogs() {
  const res = await axios.get<blogData>(
    "https://webdev247-backend.vercel.app/api/v1/blogs/live"
  );
  const data = res.data;

  return data;
}
