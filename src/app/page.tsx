"use client"

import Link from "next/link"
import { ArrowRight, Code, Newspaper, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BlogCard } from "@/components/BlogCard"
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const features = [
  {
    title: "Modern Tech Stack",
    description: "Built with Next.js 15, React Server Components, and TypeScript for optimal performance.",
    icon: Code,
  },
  {
    title: "Latest Updates",
    description: "Stay informed with the newest developments in web technology and best practices.",
    icon: Newspaper,
  },
  {
    title: "Expert Insights",
    description: "Learn from experienced developers sharing their knowledge and real-world experiences.",
    icon: Sparkles,
  },
  {
    title: "Quick Tips",
    description: "Discover practical tips and tricks to enhance your development workflow.",
    icon: Zap,
  },
]

const recentPosts = [
  {
    title: "Understanding React Server Components",
    description: "Learn how React Server Components work and when to use them in your Next.js applications.",
    category: "React",
    publishDate: new Date("2024-03-15"),
    author: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      id: "jane-smith"
    },
    slug: "understanding-react-server-components"
  },
  {
    title: "Building Modern UIs with Tailwind CSS",
    description: "A comprehensive guide to creating beautiful user interfaces using Tailwind CSS.",
    category: "CSS",
    publishDate: new Date("2024-03-12"),
    author: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      id: "john-doe"
    },
    slug: "building-modern-uis-with-tailwind"
  },
  {
    title: "Next.js 15 Features You Should Know",
    description: "Explore the latest features and improvements in Next.js 15 and how to use them.",
    category: "Next.js",
    publishDate: new Date("2024-03-10"),
    author: {
      name: "Alex Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      id: "alex-johnson"
    },
    slug: "nextjs-15-features"
  },
]

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function Home() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    })
    form.reset()
  }

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
                Discover the latest insights, tutorials, and best practices in web development.
                Stay ahead with cutting-edge technologies and expert guidance.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
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
              const Icon = feature.icon
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
              )
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Card className="">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Stay Updated
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                    Subscribe to our newsletter for the latest articles, tutorials, and tech news.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex space-x-2">
                                <Input
                                  placeholder="Enter your email"
                                  type="email"
                                  {...field}
                                />
                                <Button type="submit">Subscribe</Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
