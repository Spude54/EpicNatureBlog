"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, Suspense } from "react";
import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { searchBlogs } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const [searchInput, setSearchInput] = useState(query);

  const results = useMemo(() => {
    if (!query) return [];
    return searchBlogs(query);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Search Header */}
        <div className="mb-12">
          <h1 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            Search Results
          </h1>
          {query && (
            <p className="mt-2 text-lg text-muted-foreground">
              {results.length} {results.length === 1 ? "result" : "results"} for &quot;{query}&quot;
            </p>
          )}

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mt-6 flex max-w-xl gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search blogs..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </div>

        {/* Results */}
        {!query ? (
          <div className="py-20 text-center">
            <Search className="mx-auto h-16 w-16 text-muted-foreground/50" />
            <h2 className="mt-4 text-xl font-semibold text-foreground">
              Start Your Search
            </h2>
            <p className="mt-2 text-muted-foreground">
              Enter a keyword to search through all our blog posts
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="py-20 text-center">
            <Search className="mx-auto h-16 w-16 text-muted-foreground/50" />
            <h2 className="mt-4 text-xl font-semibold text-foreground">
              No Results Found
            </h2>
            <p className="mt-2 text-muted-foreground">
              Try different keywords or browse our{" "}
              <Link href="/blog/recent" className="text-primary hover:underline">
                recent posts
              </Link>
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-12 w-64 bg-muted rounded mb-4"></div>
            <div className="h-6 w-48 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
