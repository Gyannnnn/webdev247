import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechBlog - Modern Web Development Insights",
  description: "Discover in-depth articles and tutorials about React, Next.js, and modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased flex flex-col overflow-x-hidden`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
       
      </body>
    </html>
  );
}
