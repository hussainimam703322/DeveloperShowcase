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
