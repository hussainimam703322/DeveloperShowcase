import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";
import { fallbackProjects } from "@/lib/data";
import { Eye, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// Project card component
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="bg-white dark:bg-dark-700 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover object-center" 
        />
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white">{project.title}</h3>
          <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-3">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm flex items-center gap-1"
              >
                <Eye className="h-4 w-4" /> Live Demo
              </a>
            )}
            {project.codeUrl && (
              <a 
                href={project.codeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-600 hover:text-dark-900 dark:text-dark-400 dark:hover:text-white font-medium text-sm flex items-center gap-1"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Loading skeleton
function ProjectSkeleton() {
  return (
    <Card className="bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden h-full">
      <Skeleton className="w-full h-48" />
      <CardContent className="p-6">
        <Skeleton className="h-7 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-16" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Fetch projects data
  const { data: projects = [], isLoading, isError } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
    // If API fails, use fallback data
    placeholderData: fallbackProjects,
  });

  // Extract unique categories from projects
  const categories = ["all", ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  
  // Filter projects based on selected category
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-dark-600 dark:text-dark-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A selection of my recent work and personal projects.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === category 
                  ? "bg-primary-500 text-white" 
                  : "bg-white dark:bg-dark-700 text-dark-700 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-dark-600"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {isLoading ? (
            // Show skeletons while loading
            Array(6).fill(0).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))
          ) : isError ? (
            // Show error state
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-red-500 dark:text-red-400">Failed to load projects. Please try again later.</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            // Show empty state
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-dark-600 dark:text-dark-300">No projects found for this category.</p>
            </div>
          ) : (
            // Show projects
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
          >
            See more projects on GitHub 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
