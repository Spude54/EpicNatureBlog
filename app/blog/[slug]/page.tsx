import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Eye, ArrowLeft } from "lucide-react";
import { getBlogBySlug, getAuthorById, blogPosts, getRecentBlogs } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { AdSlot } from "@/components/ad-slot";
import { BlogCard } from "@/components/blog-card";
import { LikeButton } from "@/components/like-button";
import { ViewTracker } from "@/components/view-tracker";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found - Sky Blog",
    };
  }

  return {
    title: `${post.title} - Sky Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = getAuthorById(post.authorId);
  const relatedPosts = getRecentBlogs(3).filter((p) => p.id !== post.id).slice(0, 2);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Convert markdown-like formatting to HTML
  const formatBody = (body: string) => {
    return body
      .split("\n\n")
      .map((paragraph, index) => {
        // Headers
        if (paragraph.startsWith("### ")) {
          return `<h3 class="text-xl font-semibold text-foreground mt-8 mb-4">${paragraph.slice(4)}</h3>`;
        }
        if (paragraph.startsWith("## ")) {
          return `<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">${paragraph.slice(3)}</h2>`;
        }

        // Lists
        if (paragraph.includes("\n- ")) {
          const items = paragraph.split("\n- ").filter(Boolean);
          return `<ul class="list-disc pl-6 space-y-2 text-muted-foreground">${items.map((item) => `<li>${item.replace(/^\d+\.\s/, "")}</li>`).join("")}</ul>`;
        }

        // Numbered lists
        if (/^\d+\.\s/.test(paragraph)) {
          const items = paragraph.split(/\n(?=\d+\.\s)/).filter(Boolean);
          return `<ol class="list-decimal pl-6 space-y-2 text-muted-foreground">${items.map((item) => `<li>${item.replace(/^\d+\.\s/, "")}</li>`).join("")}</ol>`;
        }

        // Bold text
        let formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');

        return `<p class="text-muted-foreground leading-relaxed">${formatted}</p>`;
      })
      .join("");
  };

  return (
    <div className="py-8 md:py-12">
      <ViewTracker postId={post.id} />

      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/blog/recent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Link>
        </Button>

        {/* Main Layout with Ads */}
        <div className="flex justify-center gap-8">
          {/* Left Ad Sidebar - only on very large screens */}
          <aside className="hidden w-[160px] shrink-0 2xl:block">
            <div className="sticky top-24 space-y-4">
              <AdSlot type="sidebar" />
            </div>
          </aside>

          {/* Main Content */}
          <article className="min-w-0 max-w-3xl flex-1">
            {/* Hero Image */}
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1200px) 100vw, 1000px"
              />
            </div>

            {/* Article Header */}
            <header className="mt-8">
              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap items-center gap-6 border-b border-border pb-6">
                {/* Author */}
                {author && (
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{author.name}</p>
                      <p className="text-sm text-muted-foreground">Author</p>
                    </div>
                  </div>
                )}

                {/* Date */}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Eye className="h-4 w-4" />
                  <span>{post.views} views</span>
                </div>

                {/* Like Button */}
                <LikeButton postId={post.id} initialLikes={post.likes} />
              </div>
            </header>

            {/* Article Body */}
            <div
              className="prose prose-lg mt-8 max-w-none space-y-4"
              dangerouslySetInnerHTML={{ __html: formatBody(post.body) }}
            />

            {/* In-Article Ad */}
            <div className="my-10">
              <AdSlot type="inArticle" />
            </div>

            {/* Additional Images */}
            {post.images && post.images.length > 0 && (
              <div className="mt-10 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Gallery</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {post.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video overflow-hidden rounded-lg"
                    >
                      <Image
                        src={image}
                        alt={`${post.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            {author && (
              <div className="mt-12 rounded-xl bg-secondary/50 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Written by
                    </p>
                    <p className="text-xl font-semibold text-foreground">
                      {author.name}
                    </p>
                    <p className="mt-2 text-muted-foreground">{author.bio}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="mb-6 text-2xl font-bold text-foreground">
                  Related Posts
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} showStats={false} />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Right Ad Sidebar - only on very large screens */}
          <aside className="hidden w-[160px] shrink-0 2xl:block">
            <div className="sticky top-24 space-y-4">
              <AdSlot type="sidebar" />
            </div>
          </aside>
        </div>

        {/* Mobile/Tablet Ad - shown below content on smaller screens */}
        <div className="mt-8 block 2xl:hidden">
          <AdSlot type="inArticle" />
        </div>
      </div>
    </div>
  );
}
