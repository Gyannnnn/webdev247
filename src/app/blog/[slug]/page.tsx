import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { Button } from "@/components/ui/button"
import { Heart, MessageSquare } from "lucide-react"

// Mock data for demonstration
const blogPost = {
  title: "Understanding React Server Components",
  content: `
# Understanding React Server Components

React Server Components (RSC) represent a paradigm shift in how we build React applications. They allow components to be rendered on the server, reducing the JavaScript bundle size and improving performance.

## What are Server Components?

Server Components are regular React components that run on the server. They can:

- Access server-side resources directly
- Reduce client-side JavaScript
- Improve initial page load
- Keep sensitive data and logic on the server

## Key Benefits

1. **Improved Performance**
   - Smaller JavaScript bundles
   - Faster page loads
   - Better server utilization

2. **Better Developer Experience**
   - Simplified data fetching
   - Reduced client-server code duplication
   - More intuitive mental model

3. **Enhanced Security**
   - Keep sensitive data on the server
   - Reduce attack surface
   - Better access control

## Getting Started

To use Server Components in Next.js:

\`\`\`jsx
// app/page.tsx
async function BlogPost() {
  const data = await fetchData() // Server-side only
  return <div>{data.title}</div>
}
\`\`\`

## Best Practices

- Use Server Components for data fetching
- Keep client components minimal
- Leverage streaming for better UX
`,
  category: "React",
  publishDate: new Date("2024-03-15"),
  author: {
    name: "Jane Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    id: "jane-smith",
    bio: "Senior Frontend Developer with 5+ years of experience in React and modern web technologies."
  },
  likes: 42,
  comments: [
    {
      id: 1,
      author: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      content: "Great article! Really helped me understand Server Components better.",
      date: new Date("2024-03-15T10:00:00")
    },
    {
      id: 2,
      author: "Alice Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
      content: "Would love to see more examples of real-world use cases.",
      date: new Date("2024-03-15T11:30:00")
    }
  ],
  relatedTags: ["Next.js", "Performance", "JavaScript"],
  relatedPosts: [
    {
      title: "Next.js 15 Features You Need to Know",
      slug: "nextjs-15-features",
      category: "Next.js"
    },
    {
      title: "Building Scalable APIs with Node.js",
      slug: "building-scalable-apis",
      category: "Backend"
    }
  ]
}

export default function BlogPost() {
  return (
    <main className="min-h-screen py-12">
      <article className="container max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <Link
              href={`/category/${blogPost.category.toLowerCase()}`}
              className="text-primary hover:underline"
            >
              {blogPost.category}
            </Link>
            <span>•</span>
            <time>{formatDistanceToNow(blogPost.publishDate, { addSuffix: true })}</time>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-6">{blogPost.title}</h1>
          <div className="flex items-center space-x-4">
            <Link href={`/author/${blogPost.author.id}`} className="flex items-center space-x-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{blogPost.author.name}</p>
                <p className="text-sm text-muted-foreground">Author</p>
              </div>
            </Link>
            <Button variant="outline" className="ml-auto">
              Follow
            </Button>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </div>

        {/* Interactions */}
        <div className="flex items-center space-x-4 mb-8 border-t border-b py-4">
          <Button variant="ghost" className="space-x-2">
            <Heart className="h-5 w-5" />
            <span>{blogPost.likes} likes</span>
          </Button>
          <Button variant="ghost" className="space-x-2">
            <MessageSquare className="h-5 w-5" />
            <span>{blogPost.comments.length} comments</span>
          </Button>
        </div>

        {/* Author Card */}
        <div className="rounded-lg border bg-card p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{blogPost.author.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{blogPost.author.bio}</p>
              <Button variant="outline" size="sm">
                Follow
              </Button>
            </div>
          </div>
        </div>

        {/* Comments */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Comments</h2>
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
                      {formatDistanceToNow(comment.date, { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>

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
        </section>

        {/* Related Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-4">Related Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.relatedTags.map((tag) => (
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
              {blogPost.relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{post.category}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  )
} 