"use server";

import axios from "axios";


interface blog {
  blogId: string;
  blogNotionId: string;
  blogTitle: string;
  blogCatagory: string;
  blogDescription: string;
  thumbnail: string;
  likes: number;
  blogStatus: string;
  blogAuthor: string;
  blogDate: string;
  relatedTags: string[];
  authorId: string;
  relatedBlogs: string[];
  author:Author
}

interface Author {
  id:string;
  authorName: string;
  authorAvatar: string;
  authorBio: string;
  authorLocation: string;
  joinDate: string;
  authorLinkedin: string;
  authorX: string;
  blogs: blog[];
}

interface AuthorResponse {
  author: Author;
}

export async function getAuthor(name: string) {
  const decodedName = name.replace(/-/g, " ");

  // "gyanaranjan-patra" => "gyanaranjan patra"

  try {
    const adata = await axios.get<AuthorResponse>(
      `https://webdev247-backend.vercel.app/api/v1/author/get/${decodedName}`
    );
    console.log(adata)
    return adata.data.author as Author;
  } catch (error) {
    const err = error as Error
    console.log(err.message)

     return null;
  }
}
