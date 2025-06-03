'use client';

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/BlogCard"

type Author = {
  name: string;
  avatar: string;
  bio: string;
  location: string;
  joinDate: Date;
  followers: number;
  following: number;
  posts: Array<{
    title: string;
    description: string;
    category: string;
    publishDate: Date;
    author: {
      name: string;
      avatar: string;
      id: string;
    };
    slug: string;
  }>;
};

interface AuthorProfileProps {
  author: Author;
}

export function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <main className="min-h-screen py-12">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Author Header */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-background shadow-xl">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{author.location}</span>
                  <span>•</span>
                  <span>Joined {author.joinDate.toLocaleDateString()}</span>
                </div>
              </div>
              <Button>Follow</Button>
            </div>
            <p className="text-lg mb-6">{author.bio}</p>
            <div className="flex gap-6">
              <div>
                <span className="font-semibold">{author.followers.toLocaleString()}</span>
                <span className="text-muted-foreground ml-1">Followers</span>
              </div>
              <div>
                <span className="font-semibold">{author.following.toLocaleString()}</span>
                <span className="text-muted-foreground ml-1">Following</span>
              </div>
              <div>
                <span className="font-semibold">{author.posts.length}</span>
                <span className="text-muted-foreground ml-1">Posts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Author's Posts */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 gap-8">
            {author.posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 