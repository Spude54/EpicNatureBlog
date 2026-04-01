import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Leaf, Mountain, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authors } from "@/lib/blog-data";

export const metadata = {
  title: "About - Sky Blog",
  description: "Learn more about Sky Blog and our mission to inspire people to connect with nature.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/5 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            About Sky Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            A space dedicated to celebrating the natural world and helping people
            find peace through nature&apos;s beauty.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Mission
            </span>
            <h2 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Reconnecting People with Nature
            </h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              In a world increasingly dominated by screens and concrete, we believe
              in the transformative power of the natural world. Sky Blog was born
              from a simple idea: that sharing stories of nature&apos;s beauty could
              inspire others to step outside, breathe deeply, and find the peace
              that awaits in meadows, forests, oceans, and under starlit skies.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every story we share is an invitation to slow down, look up, and
              remember that we are part of something vast and beautiful. Whether
              you&apos;re an experienced outdoor enthusiast or someone just beginning
              to explore, we hope our words and images will inspire your own
              journey into nature.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              What We Believe
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              Our Values
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-card p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Sun className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Mindfulness
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Encouraging presence and awareness in every moment spent outdoors.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Conservation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Protecting the wild places that bring us so much joy and peace.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Mountain className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Adventure
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Embracing new experiences and pushing beyond comfort zones.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Camera className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Storytelling
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Sharing authentic narratives that connect hearts with nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              The Team
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              Meet the Writers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              The passionate individuals behind every story, photo, and adventure
              you read about on Sky Blog.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
            {authors.map((author) => (
              <div
                key={author.id}
                className="flex flex-col items-center rounded-xl bg-card p-8 text-center"
              >
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {author.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {author.age} years old
                </p>
                <p className="mt-4 text-muted-foreground">{author.bio}</p>
                {author.socialLinks && (
                  <div className="mt-4 flex gap-3">
                    {author.socialLinks.twitter && (
                      <a
                        href={author.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Twitter
                      </a>
                    )}
                    {author.socialLinks.instagram && (
                      <a
                        href={author.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Instagram
                      </a>
                    )}
                    {author.socialLinks.linkedin && (
                      <a
                        href={author.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
            Start Your Nature Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-primary-foreground/80">
            Explore our collection of nature stories and find inspiration for your
            next outdoor adventure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
            >
              <Link href="/blog/recent">
                Read Our Blogs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/blog/popular">View Popular Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
