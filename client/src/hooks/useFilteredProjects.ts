import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";

export function useFilteredProjects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // Fetch projects
  const { data: projects = [], isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }
    
    return projects.filter(project => 
      project.tags.includes(activeFilter)
    );
  }, [projects, activeFilter]);

  // Available filter categories based on projects
  const categories = useMemo(() => {
    const allTags = projects.flatMap(project => project.tags);
    return ["all", ...Array.from(new Set(allTags))];
  }, [projects]);

  return {
    projects: filteredProjects,
    categories,
    activeFilter,
    setActiveFilter,
    isLoading,
    error
  };
}
