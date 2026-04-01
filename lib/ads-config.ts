// Google Ads Configuration
// Paste your Google AdSense code snippets here

// Instructions:
// 1. Sign up for Google AdSense at https://www.google.com/adsense
// 2. Get your ad unit codes from your AdSense dashboard
// 3. Replace the placeholder values below with your actual ad codes

// Your Google AdSense Publisher ID (format: ca-pub-XXXXXXXXXXXXXXXX)
export const ADSENSE_PUBLISHER_ID = "ca-pub-XXXXXXXXXXXXXXXX";

// Your AdSense script that goes in the <head>
// Replace with your actual AdSense script tag content
export const ADSENSE_SCRIPT = `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}" crossorigin="anonymous"></script>
`;

// Ad Unit configurations
// Replace these with your actual ad unit IDs from AdSense

export const adUnits = {
  // Sidebar ad unit (displayed on left and right of blog posts)
  sidebar: {
    adSlot: "XXXXXXXXXX", // Replace with your sidebar ad slot ID
    adFormat: "auto",
    fullWidthResponsive: true,
  },
  
  // In-article ad unit (displayed within blog content)
  inArticle: {
    adSlot: "XXXXXXXXXX", // Replace with your in-article ad slot ID
    adFormat: "fluid",
    adLayout: "in-article",
  },
  
  // Footer ad unit
  footer: {
    adSlot: "XXXXXXXXXX", // Replace with your footer ad slot ID
    adFormat: "auto",
    fullWidthResponsive: true,
  },
};

// Ad placeholder component props
// These control the appearance of ad placeholders before ads load
export const adPlaceholderConfig = {
  sidebar: {
    minHeight: "600px",
    backgroundColor: "var(--muted)",
  },
  inArticle: {
    minHeight: "280px",
    backgroundColor: "var(--muted)",
  },
  footer: {
    minHeight: "90px",
    backgroundColor: "var(--muted)",
  },
};
