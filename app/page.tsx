import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog-card";
import { getRecentBlogs, getPopularBlogs, authors } from "@/lib/blog-data";

export default function HomePage() {
  const recentBlogs = getRecentBlogs(3);
  const popularBlogs = getPopularBlogs(3);
  const primaryAuthor = authors[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-36">
        {/* Cloud-like gradient overlays */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-20 top-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Welcome to Nature Blog
          </div>
          <h1 className="mx-auto mt-8 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Find Peace in <span className="text-primary">Nature</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Embrace the beauty of the natural world through inspiring stories, stunning
            photography, and mindful living tips. Let nature be your guide to a
            more peaceful life.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
              <Link href="/blog/recent">
                Explore Blogs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary/30 px-8 text-foreground hover:bg-primary/10 hover:text-foreground">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 md:py-24">
        <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
              <Image
                src={primaryAuthor.avatar}
                alt={primaryAuthor.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                About Me
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                {primaryAuthor.name}
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {primaryAuthor.bio}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Through this blog, I share my experiences exploring the natural
                world - from mountain meadows to ocean sunrises, from ancient
                forests to starlit deserts. My goal is to inspire you to step
                outside, breathe deeply, and find the peace that nature offers.
              </p>
              <Button asChild className="mt-6 rounded-full px-6">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Blogs Section */}
      <section className="relative border-y border-border bg-card/50 py-16 md:py-24">
        <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                Trending
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                Most Popular
              </h2>
              <p className="mt-2 text-muted-foreground">
                Our most loved stories from readers around the world
              </p>
            </div>
            <Button asChild variant="outline" className="hidden rounded-full border-primary/30 text-foreground hover:bg-primary/10 md:flex">
              <Link href="/blog/popular">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link href="/blog/popular">
                View All Popular
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="relative py-16 md:py-24">
        <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="container relative mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                Fresh Content
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                Recent Posts
              </h2>
              <p className="mt-2 text-muted-foreground">
                The latest stories and adventures from our journey
              </p>
            </div>
            <Button asChild variant="outline" className="hidden rounded-full border-primary/30 text-foreground hover:bg-primary/10 md:flex">
              <Link href="/blog/recent">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link href="/blog/recent">
                View All Recent
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-border bg-gradient-to-b from-card to-background py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Ready to Embrace <span className="text-primary">Nature</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Subscribe to our newsletter and get weekly inspiration delivered
            straight to your inbox. Join our community of nature lovers.
          </p>
          <p className="mt-4 text-sm text-muted-foreground/70">
            Click the &quot;Subscribe to Newsletter&quot; button in the footer below
          </p>
        </div>
      </section>
    </div>
  );
}
