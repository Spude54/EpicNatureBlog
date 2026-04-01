"use client";

import { useState } from "react";
import Link from "next/link";
import { socialLinks } from "@/lib/social-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";

interface NewsletterFormData {
  firstName: string;
  lastName: string;
  email: string;
}

export function Footer() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [formData, setFormData] = useState<NewsletterFormData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This creates a JSON payload that you can send to your backend
    // The data is structured and ready to be sent to any email service
    const newsletterPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      subscribedAt: new Date().toISOString(),
    };

    // TODO: Send this to your backend
    // Example:
    // await fetch('/api/newsletter', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newsletterPayload),
    // });

    console.log("Newsletter subscription payload:", newsletterPayload);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitMessage("Thanks for subscribing! Check your email for confirmation.");
    setFormData({ firstName: "", lastName: "", email: "" });

    // Close dialog after 2 seconds
    setTimeout(() => {
      setIsNewsletterOpen(false);
      setSubmitMessage("");
    }, 2000);
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">NB</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Nature Blog
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Embracing the beauty of nature, one story at a time. Join us on our
              journey to appreciate the world around us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/popular"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Popular Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/recent"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Recent Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Stay Connected
            </h3>

            {/* Newsletter Button */}
            <Dialog open={isNewsletterOpen} onOpenChange={setIsNewsletterOpen}>
              <DialogTrigger asChild>
                <Button className="mb-6 w-full gap-2">
                  <Mail className="h-4 w-4" />
                  Subscribe to Newsletter
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Subscribe to Our Newsletter</DialogTitle>
                  <DialogDescription>
                    Get monthly updates about new blog posts, nature tips, and
                    exclusive content delivered straight to your inbox.
                  </DialogDescription>
                </DialogHeader>
                {submitMessage ? (
                  <div className="py-4 text-center text-sm text-green-600">
                    {submitMessage}
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-1 block text-sm font-medium text-foreground"
                        >
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="mb-1 block text-sm font-medium text-foreground"
                        >
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-sm font-medium text-foreground"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nature Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
