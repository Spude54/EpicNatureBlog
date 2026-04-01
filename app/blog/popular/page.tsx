import { BlogCard } from "@/components/blog-card";
import { getPopularBlogs } from "@/lib/blog-data";

export const metadata = {
  title: "Popular Blogs - Sky Blog",
  description: "Discover our most loved nature and mindfulness stories, ranked by reader engagement.",
};

export default function PopularBlogsPage() {
  const popularBlogs = getPopularBlogs(10);

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Reader Favorites
          </span>
          <h1 className="mt-2 text-balance text-4xl font-bold text-foreground md:text-5xl">
            Most Popular Blogs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            These stories have resonated most deeply with our community of nature
            lovers. Sorted by likes from our readers.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularBlogs.map((post, index) => (
            <div key={post.id} className="relative">
              {index < 3 && (
                <div className="absolute -left-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  #{index + 1}
                </div>
              )}
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
