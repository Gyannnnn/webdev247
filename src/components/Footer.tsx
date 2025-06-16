"use client"

import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { FaGithub ,FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const categories = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextjs" },
  { name: "Backend", slug: "backend" },
  { name: "Coding Tools", slug: "tools" },
  { name: "Coding Tips", slug: "tips" },
  { name: "Tech News", slug: "news" },
]

const socialLinks = [
  {
    name: "Github",
    href: "https://github.com",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
]

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 pt-12 pb-4 ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                TechBlog
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your source for modern web development insights and best practices.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Categories</h3>
            <div className="flex flex-col space-y-2">
              {categories.slice(0, 4).map((category) => (
                <Button
                  key={category.slug}
                  variant="link"
                  className="h-auto p-0 text-muted-foreground hover:text-primary justify-start"
                  asChild
                >
                  <Link href={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Button
                variant="link"
                className="h-auto p-0 text-muted-foreground hover:text-primary justify-start"
                asChild
              >
                <Link href="/about">About Us</Link>
              </Button>
              <Button
                variant="link"
                className="h-auto p-0 text-muted-foreground hover:text-primary justify-start"
                asChild
              >
                <Link href="/contact">Contact</Link>
              </Button>
              <Button
                variant="link"
                className="h-auto p-0 text-muted-foreground hover:text-primary justify-start"
                asChild
              >
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
              <Button
                variant="link"
                className="h-auto p-0 text-muted-foreground hover:text-primary justify-start"
                asChild
              >
                <Link href="/terms">Terms of Service</Link>
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-muted-foreground hover:text-primary"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-7 w-7" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-40" />
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TechBlog. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 