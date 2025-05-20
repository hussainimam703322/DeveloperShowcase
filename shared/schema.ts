import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Project schema
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  demoUrl: text("demo_url"),
  codeUrl: text("code_url"),
  tags: text("tags").array().notNull(),
  featured: boolean("featured").default(false),
});

// Blog post schema
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  publishDate: timestamp("publish_date").notNull(),
});

// Contact submission schema
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

// Define insert schemas
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({ id: true });
export const insertContactSchema = createInsertSchema(contactSubmissions).omit({ id: true, submittedAt: true });

// Contact form validation schema with additional validation
export const contactFormSchema = insertContactSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// Define types
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Project = typeof projects.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Sample projects data (used when API call fails or as initial data)
export const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "TaskMaster Pro",
    description: "A collaborative task management platform with real-time updates, custom workflows, and integrated calendar.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/taskmaster",
    codeUrl: "https://github.com/example/taskmaster",
    tags: ["react", "typescript", "firebase"],
    featured: true
  },
  {
    id: 2,
    title: "WeatherWise",
    description: "Advanced weather forecasting application with interactive maps, historical data analysis, and personalized alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/weatherwise",
    codeUrl: "https://github.com/example/weatherwise",
    tags: ["react", "node"],
    featured: true
  },
  {
    id: 3,
    title: "ShopStream",
    description: "A modern e-commerce platform with live inventory updates, integrated payment processing, and AI-powered product recommendations.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/shopstream",
    codeUrl: "https://github.com/example/shopstream",
    tags: ["nextjs", "node", "mongodb"],
    featured: true
  },
  {
    id: 4,
    title: "CodeMentor",
    description: "Interactive coding platform with live code execution, guided tutorials, and personalized learning paths for web development.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/codementor",
    codeUrl: "https://github.com/example/codementor",
    tags: ["react", "typescript", "aws"],
    featured: true
  },
  {
    id: 5,
    title: "FitTrack",
    description: "Comprehensive fitness tracking application with customizable workout plans, progress analytics, and nutrition monitoring.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/fittrack",
    codeUrl: "https://github.com/example/fittrack",
    tags: ["react", "graphql", "express"],
    featured: true
  },
  {
    id: 6,
    title: "MetricsMaster",
    description: "Comprehensive analytics dashboard with customizable widgets, real-time data visualization, and automated reporting features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=340",
    demoUrl: "https://example.com/metricsmaster",
    codeUrl: "https://github.com/example/metricsmaster",
    tags: ["node", "typescript", "d3js"],
    featured: true
  }
];

// Sample blog posts data (used when API call fails or as initial data)
export const fallbackBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure large-scale React applications using TypeScript to improve code quality and developer experience.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Tutorial",
    publishDate: new Date("2023-06-15")
  },
  {
    id: 2,
    title: "Why Server Components Will Change Frontend Development",
    excerpt: "An exploration of React Server Components and how they're poised to transform the way we think about frontend architecture.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Opinion",
    publishDate: new Date("2023-05-28")
  },
  {
    id: 3,
    title: "Optimizing Performance in Modern Web Applications",
    excerpt: "A comprehensive guide to performance optimization techniques for JavaScript applications, from code splitting to caching strategies.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Guide",
    publishDate: new Date("2023-04-12")
  }
];
