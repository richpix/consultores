import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  highlight?: boolean;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  category: string;
  slug: string;
  image: string;
  content: string;
  author: string;
  readTime: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}