import { BlogCard } from "@/components/BlogCard"
import { getLiveBlogs } from "@/lib/blogs/blogs"

export default async function BlogPage() {
  const blogData = await getLiveBlogs()
  
  return (
    <main className="container py-6 lg:py-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Latest insights, updates, and stories from our team.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.liveBlogs.map((blog) => (
            <BlogCard
              key={blog.blogTitle}
              post={blog}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
