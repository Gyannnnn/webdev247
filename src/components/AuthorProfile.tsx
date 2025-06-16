"use client";

import Image from "next/image";
import Link from "next/link";

import { BlogCard } from "@/components/BlogCard";



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
  author:author
}

interface Author {
  authorName: string;
  authorAvatar: string;
  authorBio: string;
  authorLocation: string;
  joinDate: string;
  authorLinkedin: string; // Make sure this is a URL
  authorX: string;        // Make sure this is a URL
  blogs: blog[];
}

interface AuthorProfileProps {
  author: Author;
}

export function AuthorProfile({ author }: AuthorProfileProps) {
  if (!author) return <h1 className="text-center mt-10">Loading...</h1>;

  return (
    <main className="min-h-screen py-12">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Author Header */}
        <div className="flex flex-col md:flex-row items-center  gap-8 mb-12">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-muted shadow-md bg-gray-200">
            <Image
              src={author.authorAvatar}
              alt={`${author.authorName}'s avatar`}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-1">{author.authorName}</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{author.authorLocation}</span>
                  <span>•</span>
                  <span>Joined {author.joinDate}</span>
                </div>
              </div>
              
            </div>

            <p className="text-base text-muted-foreground mb-6">
              {author.authorBio}
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              {author.authorLinkedin && (
                <Link
                  href={author.authorLinkedin}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  🔗 LinkedIn
                </Link>
              )}
              {author.authorX && (
                <Link
                  href={author.authorX}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  🐦 X (Twitter)
                </Link>
              )}
              <div>
                <span className="font-semibold">{author.blogs?.length ?? 0}</span>
                <span className="text-muted-foreground ml-1">Posts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Author's Posts */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {author.blogs.map((post) => (
              <BlogCard key={post.blogId} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
