import { 
  Project, 
  BlogPost, 
  ContactSubmission,
  InsertContact,
  fallbackProjects,
  fallbackBlogPosts
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getBlogPosts(): Promise<BlogPost[]>;
  submitContactForm(data: InsertContact): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private blogPosts: Map<number, BlogPost>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private contactSubmissionId: number;

  constructor() {
    // Initialize storage with fallback data
    this.projects = new Map();
    fallbackProjects.forEach(project => {
      this.projects.set(project.id, project);
    });

    this.blogPosts = new Map();
    fallbackBlogPosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });

    this.contactSubmissions = new Map();
    this.contactSubmissionId = 1;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async submitContactForm(data: InsertContact): Promise<ContactSubmission> {
    const id = this.contactSubmissionId++;
    const submission: ContactSubmission = {
      ...data,
      id,
      submittedAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
