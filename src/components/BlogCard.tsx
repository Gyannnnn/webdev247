import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface author {
  id: string;
  authorName: string;
  authorBio: string;
  authorLocation: string;
  joinDate: string;
  authorAvatar: string;
  authorLinkedin: string;
  authorX: string;
}
interface Post {
  blogId: string
  blogNotionId: string
  blogTitle: string
  thumbnail: string
  likes:number
  blogStatus: string
  blogAuthor:string
  blogDate:string
  relatedTags:string[]
  mainTag?:string
  relatedBlogs:string[],
  blogDescription:string,
  blogCatagory:string,
  author:author
}

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <Link
          href={`/blog/${post.blogTitle}`}
          className="block relative aspect-[1.9/1] w-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/0 z-10" />
          <Image
            src={post.thumbnail}
            alt={post.blogTitle}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary" className="rounded-full">
            {post.blogCatagory}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            {new Date(post.blogDate).toLocaleDateString()}
          </div>
        </div>
        <Link href={`/blog/${post.blogTitle}`} className="block group-hover:text-primary">
          <h3 className="text-2xl font-bold mb-2 line-clamp-2">{post.blogTitle}</h3>
        </Link>
        <p className="text-muted-foreground line-clamp-2">{post.blogDescription}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Link
              href={`/author/${post.blogAuthor}`}

              className="flex items-center gap-2 text-sm"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.authorAvatar} alt={post.blogAuthor} />
                <AvatarFallback>{post.blogAuthor}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{post.blogAuthor}</span>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={post.author.authorAvatar} alt={post.blogAuthor} />
                <AvatarFallback>{post.blogAuthor}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{post.blogAuthor}</h4>
                <p className="text-sm text-muted-foreground">
                  Author of various articles about {post.mainTag}
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Click to view profile
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </CardFooter>
    </Card>
  )
} 