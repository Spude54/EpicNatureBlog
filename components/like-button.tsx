"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LikeButtonProps {
  postId: string;
  initialLikes: number;
}

export function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check if user has already liked this post (stored in localStorage per device)
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    setHasLiked(likedPosts.includes(postId));
  }, [postId]);

  const handleLike = async () => {
    if (hasLiked) return;

    setIsAnimating(true);
    setLikes((prev) => prev + 1);
    setHasLiked(true);

    // Store in localStorage to prevent multiple likes from same device
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    likedPosts.push(postId);
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));

    // Send like to backend
    // This creates a JSON payload that you can send to your backend
    const likePayload = {
      postId,
      action: "like",
      timestamp: new Date().toISOString(),
    };

    // TODO: Send this to your backend
    // Example:
    // await fetch('/api/likes', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(likePayload),
    // });

    console.log("Like payload:", likePayload);

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <Button
      variant={hasLiked ? "default" : "outline"}
      size="sm"
      onClick={handleLike}
      disabled={hasLiked}
      className={`gap-2 transition-transform ${isAnimating ? "scale-110" : ""}`}
    >
      <Heart
        className={`h-4 w-4 ${hasLiked ? "fill-current" : ""}`}
      />
      <span>{likes}</span>
      {hasLiked && <span className="text-xs">Liked</span>}
    </Button>
  );
}
