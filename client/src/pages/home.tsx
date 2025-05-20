import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { useScrollToElement } from "@/hooks/useScrollToElement";

export default function Home() {
  const [location] = useLocation();
  const scrollToElement = useScrollToElement();

  // On initial load, check for hash in URL to scroll to the right section
  useEffect(() => {
    // Get the hash from the URL (e.g., #projects)
    const hash = window.location.hash.replace("#", "");
    
    if (hash) {
      // Wait a bit for the page to fully render
      setTimeout(() => {
        scrollToElement(hash);
      }, 100);
    }
  }, [location, scrollToElement]);

  return (
    <div className="scroll-smooth">
      <HeroSection />
      <TechnicalSkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
