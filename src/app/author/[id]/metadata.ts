import { Metadata } from "next"

// Mock data for demonstration
const authors = {
  "jane-smith": {
    name: "Jane Smith",
    bio: "Senior Frontend Developer with 5+ years of experience in React and modern web technologies. Passionate about building performant and accessible web applications.",
  },
  "john-doe": {
    name: "John Doe",
    bio: "Full-stack developer specializing in Next.js and Node.js. Creator of various open-source tools and libraries.",
  },
} as const

type AuthorId = keyof typeof authors;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const author = authors[params.id as AuthorId];
  if (!author) {
    return {
      title: "Author Not Found",
    };
  }
  return {
    title: author.name,
    description: author.bio,
  };
} 