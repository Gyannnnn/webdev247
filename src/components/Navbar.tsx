"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import * as Sheet from "@radix-ui/react-dialog"
import { Button } from "./ui/button"

const categories = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextjs" },
  { name: "Backend", slug: "backend" },
  { name: "Coding Tools", slug: "tools" },
  { name: "Coding Tips", slug: "tips" },
  { name: "Tech News", slug: "news" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center max-sm:justify-between">
        <div className="mr-4 flex items-center justify-center ">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">TechBlog</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <Sheet.Root open={isOpen} onOpenChange={setIsOpen}>
          <Sheet.Trigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </Sheet.Trigger>
          <Sheet.Portal>
            <Sheet.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <Sheet.Content className="fixed inset-y-0 right-0 z-50 h-full w-3/4 border-l bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:animate-slide-out-to-right data-[state=open]:animate-slide-in-from-right sm:max-w-sm">
              <div className="flex flex-col space-y-4">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </Sheet.Content>
          </Sheet.Portal>
        </Sheet.Root>
      </div>
    </nav>
  )
}