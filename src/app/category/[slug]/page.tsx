

// Mock data for demonstration
const categoryPosts = {
  react: {
    name: "React",
    description: "Latest articles and tutorials about React, React Server Components, and the React ecosystem.",
    posts: [
      {
        title: "Understanding React Server Components",
        description: "A deep dive into React Server Components and how they revolutionize web development by enabling server-side rendering with client-side interactivity.",
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
        title: "Advanced React Hooks Patterns",
        description: "Learn advanced patterns and best practices for using React Hooks in your applications.",
        category: "React",
        publishDate: new Date("2024-03-14"),
        author: {
          name: "John Doe",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
          id: "john-doe"
        },
        slug: "advanced-react-hooks-patterns"
      }
    ]
  },
  nextjs: {
    name: "Next.js",
    description: "Explore the latest features, tips, and best practices for building applications with Next.js.",
    posts: [
      {
        title: "Next.js 15 Features You Need to Know",
        description: "Explore the latest features in Next.js 15 and how they can improve your development workflow and application performance.",
        category: "Next.js",
        publishDate: new Date("2024-03-14"),
        author: {
          name: "John Doe",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
          id: "john-doe"
        },
        slug: "nextjs-15-features"
      }
    ]
  },
  backend: {
    name: "Backend",
    description: "Articles about backend development, APIs, databases, and server-side architecture.",
    posts: [
      {
        title: "Building Scalable APIs with Node.js",
        description: "Learn best practices for building scalable and maintainable APIs using Node.js and modern backend technologies.",
        category: "Backend",
        publishDate: new Date("2024-03-13"),
        author: {
          name: "Alex Johnson",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
          id: "alex-johnson"
        },
        slug: "building-scalable-apis"
      }
    ]
  }
} as const

type Params = Promise<{slug:string}>

export default async function CategoryPage(props:{params:Params}) {
 const params = await props.params
 const slug = params.slug
 console.log(slug)
 console.log(categoryPosts)

  
    return (
      <main className="min-h-screen py-12">
        <div className="container max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Category Not Found</h1>
          <p className="text-muted-foreground">
            The category you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </main>
    )


  // return (
  //   <main className="min-h-screen py-12">
  //     <div className="container max-w-4xl mx-auto px-6">
  //       <header className="mb-12">
  //         <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
  //         <p className="text-xl text-muted-foreground">
  //           {category.description}
  //         </p>
  //       </header>

  //       <div className="grid grid-cols-1 gap-8">
  //         {category.posts.map((post) => (
  //           <BlogCard key={post.slug} post={post} />
  //         ))}
  //       </div>
  //     </div>
  //   </main>
  // )
} 