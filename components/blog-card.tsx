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
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        {/* Tags */}
        <div className="mb-2 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
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
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
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
        <CardFooter className="border-t border-border px-4 py-3">
          <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{post.views}</span>
              </div>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
