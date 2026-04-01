// Social Media Configuration
// Easy to add or remove social media accounts
// Just edit this array to update your footer social links

import { Instagram, Twitter, Facebook, Youtube, Linkedin, Github } from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: typeof Instagram;
}

// Add or remove social media accounts here
// Available icons: Instagram, Twitter, Facebook, Youtube, Linkedin, Github
// For other platforms, you can import additional icons from lucide-react
export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/yourhandle",
    icon: Instagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourhandle",
    icon: Twitter,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/yourpage",
    icon: Facebook,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@yourchannel",
    icon: Youtube,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: Linkedin,
  },
  // To add more social links, just add another object like this:
  // {
  //   name: "GitHub",
  //   url: "https://github.com/yourusername",
  //   icon: Github,
  // },
];
