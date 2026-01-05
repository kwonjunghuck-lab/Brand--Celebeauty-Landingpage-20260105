import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  desc: string;
  icon: LucideIcon;
}

export interface PainPoint {
  id: number;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface Step {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  icon: LucideIcon;
}

export interface Feature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  img: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
