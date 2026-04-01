"use client";

import { adUnits, adPlaceholderConfig } from "@/lib/ads-config";

interface AdSlotProps {
  type: "sidebar" | "inArticle" | "footer";
  className?: string;
}

export function AdSlot({ type, className = "" }: AdSlotProps) {
  const config = adUnits[type];
  const placeholderStyle = adPlaceholderConfig[type];

  // Different sizing based on ad type for better responsiveness
  const sizeClasses = {
    sidebar: "w-full max-w-[160px]",
    inArticle: "w-full max-w-2xl mx-auto",
    footer: "w-full max-w-3xl mx-auto",
  };

  // In production, this would render actual Google AdSense code
  // For now, it shows a placeholder that indicates where ads will appear

  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-border/50 bg-muted/30 ${sizeClasses[type]} ${className}`}
      style={{
        minHeight: placeholderStyle.minHeight,
      }}
    >
      <div className="px-4 py-3 text-center text-muted-foreground">
        <p className="text-xs font-medium uppercase tracking-wider opacity-60">
          Advertisement
        </p>
        {/* 
          To enable real ads, uncomment the following and ensure your AdSense script is loaded:
          
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot={config.adSlot}
            data-ad-format={config.adFormat}
            data-full-width-responsive={config.fullWidthResponsive?.toString()}
          />
        */}
      </div>
    </div>
  );
}
