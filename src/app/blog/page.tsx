import { BlogCard } from "@/components/BlogCard"
import { getLiveBlogs } from "@/lib/blogs/blogs"

export default async function BlogPage() {
  const blogData = await getLiveBlogs()
  const blogs = Array.isArray(blogData.liveBlogs) ? blogData.liveBlogs : []
  
  return (
    <main className="container py-6 lg:py-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Latest insights, updates, and stories from our team.
          </p>
        </div>
        {blogs.length === 0 ? (
          <div className="text-center text-red-500 py-10">
            No blog posts available at the moment. Please try again later.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.blogTitle}
                post={blog}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
