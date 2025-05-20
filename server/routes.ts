import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { type ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendContactNotificationEmail } from "./zohoMail";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      // Parse and validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Submit contact form
      const submission = await storage.submitContactForm(validatedData);
      
      // Send email notification
      let emailStatus = false;
      try {
        emailStatus = await sendContactNotificationEmail(submission);
      } catch (emailError) {
        console.error("Error sending email notification:", emailError);
        // We don't want to fail the whole request if just the email fails
      }
      
      res.status(201).json({ 
        message: "Contact form submitted successfully",
        id: submission.id,
        emailSent: emailStatus
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      if (error instanceof Error) {
        // Handle Zod validation errors
        if ((error as any).errors || (error as any).issues) {
          const validationError = fromZodError(error as ZodError);
          return res.status(400).json({ 
            message: "Validation error", 
            errors: validationError.message 
          });
        }
      }
      
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
