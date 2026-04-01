"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    if (isSearchOpen) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20">
              <span className="text-sm font-bold text-primary-foreground">NB</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Nature Blog
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            <Link
              href="/about"
              className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground"
            >
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground">
                Blog
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="min-w-[160px] border-border/50 bg-card/95 backdrop-blur-xl">
                <DropdownMenuItem asChild>
                  <Link href="/blog/popular" className="cursor-pointer">
                    Popular Blogs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/blog/recent" className="cursor-pointer">
                    Recent Blogs
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Search Button and Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Desktop Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
              className="hidden rounded-lg md:flex"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-card md:hidden">
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4 flex gap-2">
                <Input
                  type="search"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
              </form>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-1">
                <Link
                  href="/about"
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/blog/popular"
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Popular Blogs
                </Link>
                <Link
                  href="/blog/recent"
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Recent Blogs
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-md"
            onClick={() => setIsSearchOpen(false)}
          />

          {/* Search Modal */}
          <div className="absolute left-1/2 top-20 w-full max-w-xl -translate-x-1/2 px-4">
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/95 shadow-2xl shadow-primary/10 backdrop-blur-xl">
              <form onSubmit={handleSearch} className="flex items-center">
                <Search className="ml-4 h-5 w-5 shrink-0 text-primary" />
                <Input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 bg-transparent text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-0"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(false)}
                  className="mr-2 text-muted-foreground hover:text-foreground"
                >
                  <kbd className="pointer-events-none rounded-lg border border-border bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    ESC
                  </kbd>
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
