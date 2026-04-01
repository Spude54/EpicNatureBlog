"use client";

import { useEffect, useRef } from "react";

interface ViewTrackerProps {
  postId: string;
}

export function ViewTracker({ postId }: ViewTrackerProps) {
  const hasTracked = useRef(false);

  useEffect(() => {
    // Only track once per page load
    if (hasTracked.current) return;
    hasTracked.current = true;

    // Create view tracking payload
    const viewPayload = {
      postId,
      action: "view",
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || "direct",
    };

    // TODO: Send this to your backend to track views
    // Example:
    // fetch('/api/views', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(viewPayload),
    // });

    console.log("View tracked:", viewPayload);
  }, [postId]);

  // This component doesn't render anything
  return null;
}
