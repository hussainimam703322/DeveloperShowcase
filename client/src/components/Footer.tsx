import { Link } from "wouter";
import { Code, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollToElement } from "@/hooks/useScrollToElement";

export default function Footer() {
  const scrollToElement = useScrollToElement();

  const handleNavClick = (href: string) => {
    scrollToElement(href.replace("#", ""));
  };

  return (
    <footer className="py-12 bg-dark-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-primary-400 text-xl mb-4">
                <Code className="h-6 w-6" />
                <span>TheHPortfolio</span>
              </div>
              <p className="text-dark-400 max-w-md">
                Building innovative web solutions with modern technologies and best practices.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home");
                }}
                className="text-dark-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("projects");
                }}
                className="text-dark-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#blog"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("blog");
                }}
                className="text-dark-300 hover:text-white transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
                className="text-dark-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/hussainimam703322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/imam-hussain-b27086221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:hussainimam78621@gmail.com"
                className="text-dark-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-dark-700 mt-8 pt-8 text-center text-dark-400 text-sm">
            &copy; {new Date().getFullYear()} TheHPortfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
