export type Blog = {
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  slug: string
  author: {
    name: string
    avatar: string
    role: string
  }
  readingTime: number
  tags: string[]
}

export const blogs: Blog[] = [
  {
    title: "Understanding React Server Components",
    excerpt: "Learn how React Server Components work and when to use them in your Next.js applications.",
    content: "React Server Components represent a paradigm shift in how we build React applications...",
    category: "React",
    date: "2024-03-15",
    slug: "understanding-react-server-components",
    author: {
      name: "Jane Smith",
      avatar: "/avatars/jane.jpg",
      role: "Senior Frontend Developer"
    },
    readingTime: 8,
    tags: ["React", "Next.js", "Server Components"]
  },
  {
    title: "Building Modern UIs with Tailwind CSS",
    excerpt: "A comprehensive guide to creating beautiful user interfaces using Tailwind CSS.",
    content: "Tailwind CSS has revolutionized how we style web applications...",
    category: "CSS",
    date: "2024-03-12",
    slug: "building-modern-uis-with-tailwind",
    author: {
      name: "Alex Chen",
      avatar: "/avatars/alex.jpg",
      role: "UI/UX Developer"
    },
    readingTime: 12,
    tags: ["CSS", "Tailwind", "Design"]
  },
  {
    title: "Next.js 15 Features You Should Know",
    excerpt: "Explore the latest features and improvements in Next.js 15 and how to use them.",
    content: "Next.js 15 brings significant improvements to the developer experience...",
    category: "Next.js",
    date: "2024-03-10",
    slug: "nextjs-15-features",
    author: {
      name: "John Doe",
      avatar: "/avatars/john.jpg",
      role: "Full Stack Developer"
    },
    readingTime: 10,
    tags: ["Next.js", "Web Development", "JavaScript"]
  },
  {
    title: "TypeScript Best Practices in 2024",
    excerpt: "Stay up-to-date with the latest TypeScript best practices and patterns.",
    content: "As TypeScript continues to evolve, new patterns and practices emerge...",
    category: "TypeScript",
    date: "2024-03-08",
    slug: "typescript-best-practices-2024",
    author: {
      name: "Sarah Wilson",
      avatar: "/avatars/sarah.jpg",
      role: "Technical Lead"
    },
    readingTime: 15,
    tags: ["TypeScript", "JavaScript", "Best Practices"]
  },
  {
    title: "Advanced Git Workflows for Teams",
    excerpt: "Master advanced Git techniques to improve your team's development workflow.",
    content: "Effective Git workflows are crucial for team collaboration...",
    category: "Tools",
    date: "2024-03-05",
    slug: "advanced-git-workflows",
    author: {
      name: "Mike Brown",
      avatar: "/avatars/mike.jpg",
      role: "DevOps Engineer"
    },
    readingTime: 12,
    tags: ["Git", "DevOps", "Collaboration"]
  },
  {
    title: "API Design Patterns in Node.js",
    excerpt: "Learn how to design scalable and maintainable APIs using Node.js.",
    content: "Good API design is fundamental to building successful applications...",
    category: "Backend",
    date: "2024-03-03",
    slug: "api-design-patterns-nodejs",
    author: {
      name: "Emily Chen",
      avatar: "/avatars/emily.jpg",
      role: "Backend Developer"
    },
    readingTime: 14,
    tags: ["Node.js", "API", "Backend"]
  }
] 