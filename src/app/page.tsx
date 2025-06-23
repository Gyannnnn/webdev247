import Link from "next/link";
import { ArrowRight, Code, Newspaper, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogCard } from "@/components/BlogCard";

import { getLiveBlogs } from "@/lib/blogs/blogs";
import Newsletter from "@/components/Newsletter";

const features = [
  {
    title: "Modern Tech Stack",
    description:
      "Built with Next.js 15, React Server Components, and TypeScript for optimal performance.",
    icon: Code,
  },
  {
    title: "Latest Updates",
    description:
      "Stay informed with the newest developments in web technology and best practices.",
    icon: Newspaper,
  },
  {
    title: "Expert Insights",
    description:
      "Learn from experienced developers sharing their knowledge and real-world experiences.",
    icon: Sparkles,
  },
  {
    title: "Quick Tips",
    description:
      "Discover practical tips and tricks to enhance your development workflow.",
    icon: Zap,
  },
];

export default async function Home() {
  const blogData = await getLiveBlogs();
  const blogs = Array.isArray(blogData.liveBlogs) ? blogData.liveBlogs : [];
  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Modern Web Development
                <span className="block text-primary">Made Simple</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Discover the latest insights, tutorials, and best practices in
                web development. Stay ahead with cutting-edge technologies and
                expert guidance.
              </p>
            </div>
            <div className="space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/blog">
                  Start Reading
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="group relative overflow-hidden border bg-background/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background text-primary transform group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold tracking-tight">Recent Posts</h2>
            <Button asChild variant="ghost">
              <Link href="/blog">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          {blogs.length === 0 ? (
            <div className="text-center text-red-500 py-10">
              No blog posts available at the moment. Please try again later.
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((post) => (
                <BlogCard key={post.blogId} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
