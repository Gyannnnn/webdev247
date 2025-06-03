import { AuthorProfile } from "@/components/AuthorProfile"
import { notFound } from "next/navigation"
import { generateMetadata } from "./metadata"

// Mock data for demonstration
const authors = {
  "jane-smith": {
    name: "Jane Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    bio: "Senior Frontend Developer with 5+ years of experience in React and modern web technologies. Passionate about building performant and accessible web applications.",
    location: "San Francisco, CA",
    joinDate: new Date("2023-01-01"),
    followers: 1234,
    following: 567,
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
        title: "Building Type-safe APIs with tRPC",
        description: "Learn how to build end-to-end type-safe APIs using tRPC and TypeScript.",
        category: "Backend",
        publishDate: new Date("2024-03-10"),
        author: {
          name: "Jane Smith",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
          id: "jane-smith"
        },
        slug: "building-type-safe-apis-trpc"
      }
    ]
  },
  "john-doe": {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    bio: "Full-stack developer specializing in Next.js and Node.js. Creator of various open-source tools and libraries.",
    location: "London, UK",
    joinDate: new Date("2023-02-15"),
    followers: 892,
    following: 345,
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
  }
} as const

type AuthorId = keyof typeof authors;

export async function generateStaticParams() {
  return Object.keys(authors).map((id) => ({
    id,
  }));
}

export { generateMetadata };

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const author = authors[id as AuthorId];

  if (!author) {
    notFound();
  }

  return <AuthorProfile author={author} />;
} 