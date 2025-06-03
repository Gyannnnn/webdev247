import { blogs } from "@/data/blogs"
import { BlogCard } from "@/components/BlogCard"

export default function BlogPage() {
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
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              post={{
                title: blog.title,
                description: blog.excerpt,
                category: blog.category,
                publishDate: new Date(blog.date),
                slug: blog.slug,
                author: {
                  name: blog.author.name,
                  avatar: blog.author.avatar,
                  id: blog.author.name.toLowerCase().replace(/\s+/g, "-"), // mock id
                },
              }}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
