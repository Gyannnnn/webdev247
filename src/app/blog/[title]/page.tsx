"use server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare } from "lucide-react";
import axios from "axios";

import { getBlogByTitle } from "@/lib/notion";
import { NotionRenderer } from "@/lib/plugin/plugin";

import { getAuthor } from "@/lib/author";

// Mock data for demonstration
const blogPost = {
  comments: [
    {
      id: 1,
      author: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      content:
        "Great article! Really helped me understand Server Components better.",
      date: new Date("2024-03-15T10:00:00"),
    },
    {
      id: 2,
      author: "Alice Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
      content: "Would love to see more examples of real-world use cases.",
      date: new Date("2024-03-15T11:30:00"),
    },
  ],
  relatedTags: ["Next.js", "Performance", "JavaScript"],
  relatedPosts: [
    {
      title: "Next.js 15 Features You Need to Know",
      slug: "nextjs-15-features",
      category: "Next.js",
    },
    {
      title: "Building Scalable APIs with Node.js",
      slug: "building-scalable-apis",
      category: "Backend",
    },
  ],
};

interface Blog {
  blogId: string;
  blogNotionId: string;
  blogTitle: string;
  thumbnail: string;
  blogContent: any[];
  likes: number;
  blogStatus: string;
  blogAuthor: string;
  relatedTags: string[];
  mainTag: string;
  relatedBlogs: string[];
  blogDate: string;
  blogCatagory: string;
}

interface BlogResponse {
  message: string;
  blog: Blog;
}

type Params = Promise<{ title: string }>;

export default async function BlogPost(props: { params: Params }) {
  try {
    const params = await props.params;
    const Blogtitle = decodeURIComponent(params.title);
    console.log(Blogtitle);

    // Fetch blog data
    let blog;
    try {
      const res = await axios.get<BlogResponse>(
        `https://webdev247-backend.vercel.app/api/v1/blogs/title/${Blogtitle}`
      );
      if (res.status !== 200 || !res.data?.blog) return notFound();
      blog = res.data.blog;
    } catch (err) {
      console.error("Axios fetch failed:", err);
      return notFound();
    }

    // Fetch Notion data
    let recordMap;
    try {
      recordMap = await getBlogByTitle(blog.blogNotionId);
      if (!recordMap) return notFound();
    } catch (err) {
      console.error("Failed to fetch from Notion:", err);
      return notFound();
    }

    // const blogData = dataBlocks.results as BlockObjectResponse[];
    const authorData = await getAuthor(blog.blogAuthor).catch(() => ({
      authorAvatar: "/default-avatar.png",
      authorBio: "Author information not available",
      authorLinkedin: "#",
    }));
    if (!authorData) {
      return <div>Nu;;</div>;
    }

    const publishedDate = new Date(blog.blogDate);

    return (
      <div>
        <main className="min-h-screen">
          <article className="container max-w-4xl mx-auto px-6">
            {/* Header */}
            <header className="">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground px-10 mt-6">
                <Link
                  href={`/category/${blog.blogCatagory.toLowerCase()}`}
                  className="text-primary hover:underline"
                >
                  {blog.blogCatagory}
                </Link>
                <span>/</span>
                <time>
                  {formatDistanceToNow(publishedDate, { addSuffix: true })}
                </time>
              </div>
            </header>

            {/* Content */}
            <div className="prose  dark:prose-invert max-w-none mb-12">
              {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
              <NotionRenderer
                recordMap={recordMap}
                fullPage={false}
                darkMode={true}
              />
            </div>

            {/* Interactions */}
            <div className="flex items-center space-x-4 mb-8 border-t border-b py-4">
              <Button variant="ghost" className="space-x-2">
                <Heart className="h-5 w-5" />
                <span>{blog.likes} likes</span>
              </Button>
              <Button variant="ghost" className="space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>{blogPost.comments.length} comments</span>
              </Button>
            </div>

            {/* Related Content */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Related Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.relatedTags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tag/${tag.toLowerCase()}`}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-secondary"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {blog.relatedBlogs.map((post) => (
                    <Link
                      key={post}
                      href={`/blog/${post}`}
                      className="block group"
                    >
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {post}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
            {/* Author Card */}
            <div className="rounded-lg border bg-card p-6 my-8">
              <div className="flex items-start space-x-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={authorData.authorAvatar}
                    alt={blog.blogAuthor}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{blog.blogAuthor}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {authorData.authorBio}
                  </p>
                  <Link href={authorData.authorLinkedin} target="_blank">
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Comments */}
            <section className="my-8">
              {/* Comment Form */}
              <form className="mt-6 space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="comment" className="text-sm font-medium">
                    Add a comment
                  </label>
                  <textarea
                    id="comment"
                    rows={3}
                    className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Write your comment..."
                  />
                </div>
                <Button>Post Comment</Button>
              </form>
              <h2 className="text-2xl font-semibold my-6">Comments</h2>
              <div className="space-y-6">
                {blogPost.comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={comment.avatar}
                        alt={comment.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-sm text-muted-foreground">
                          {formatDistanceToNow(comment.date, {
                            addSuffix: true,
                          })}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error in BlogPost:", error);
    return notFound();
  }
}
