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
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/8 to-background py-24 md:py-36">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto inline-flex items-center rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            Welcome to Nature Blog
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Find Peace in Nature
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Embrace the beauty of the natural world through inspiring stories, stunning
            photography, and mindful living tips. Let nature be your guide to a
            more peaceful life.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/blog/recent">
                Explore Blogs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={primaryAuthor.avatar}
                alt={primaryAuthor.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Me
              </span>
              <h2 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
                {primaryAuthor.name}
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                {primaryAuthor.bio}
              </p>
              <p className="mt-4 text-muted-foreground">
                Through this blog, I share my experiences exploring the natural
                world - from mountain meadows to ocean sunrises, from ancient
                forests to starlit deserts. My goal is to inspire you to step
                outside, breathe deeply, and find the peace that nature offers.
              </p>
              <Button asChild className="mt-6">
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
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Trending
              </span>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
                Most Popular
              </h2>
              <p className="mt-2 text-muted-foreground">
                Our most loved stories from readers around the world
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex">
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Fresh Content
              </span>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
                Recent Posts
              </h2>
              <p className="mt-2 text-muted-foreground">
                The latest stories and adventures from our journey
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex">
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
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Embrace Nature?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-primary-foreground/80">
            Subscribe to our newsletter and get weekly inspiration delivered
            straight to your inbox. Join our community of nature lovers.
          </p>
          <p className="mt-2 text-sm text-primary-foreground/60">
            Click the &quot;Subscribe to Newsletter&quot; button in the footer below
          </p>
        </div>
      </section>
    </div>
  );
}
