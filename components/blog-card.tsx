"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Eye, Calendar } from "lucide-react";
import { BlogPost, getAuthorById } from "@/lib/blog-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface BlogCardProps {
  post: BlogPost;
  showStats?: boolean;
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}

export function BlogCard({ post, showStats = true }: BlogCardProps) {
  const author = getAuthorById(post.authorId);
  const formattedDate = formatDate(post.publishedAt);

  return (
    <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </Link>
      <CardContent className="p-5">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-foreground transition-colors hover:text-primary">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {post.excerpt}
        </p>

        {/* Author */}
        {author && (
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-primary/20">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-foreground">
              {author.name}
            </span>
          </div>
        )}
      </CardContent>

      {showStats && (
        <CardFooter className="border-t border-border/50 px-5 py-3">
          <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary/70" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Heart className="h-4 w-4 text-primary/70" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="h-4 w-4 text-primary/70" />
                <span>{post.views}</span>
              </div>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
