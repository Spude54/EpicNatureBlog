import { BlogCard } from "@/components/blog-card";
import { getRecentBlogs } from "@/lib/blog-data";

export const metadata = {
  title: "Recent Blogs - Sky Blog",
  description: "Read our latest nature stories, photography features, and mindfulness guides.",
};

export default function RecentBlogsPage() {
  const recentBlogs = getRecentBlogs(10);

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Fresh Content
          </span>
          <h1 className="mt-2 text-balance text-4xl font-bold text-foreground md:text-5xl">
            Recent Posts
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Our latest adventures and insights, sorted by publication date. Stay
            up to date with new stories every week.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
