import { useScrollToElement } from "@/hooks/useScrollToElement";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { developerInfo } from "@/lib/data";

export default function HeroSection() {
  const scrollToElement = useScrollToElement();

  const handleNavClick = (href: string) => {
    scrollToElement(href);
  };

  return (
    <section id="home" className="pt-20 pb-28 md:pt-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
            <motion.div 
              className="md:w-3/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 mb-4 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium">
                {developerInfo.title}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-dark-900 dark:text-white">
                Hi, I'm <span className="text-primary-500 dark:text-primary-400">{developerInfo.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-dark-600 dark:text-dark-300 mb-6">
                {developerInfo.bio}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {developerInfo.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1 bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded-full text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => handleNavClick("projects")}
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow"
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleNavClick("contact")}
                  className="px-6 py-3 border border-dark-300 dark:border-dark-600 hover:border-primary-500 dark:hover:border-primary-500 text-dark-800 dark:text-dark-200 hover:text-primary-500 dark:hover:text-primary-400 font-medium rounded-lg transition-colors"
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-2/5 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={developerInfo.image} 
                alt={`${developerInfo.name} - Developer`} 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-dark-700 shadow-lg" 
              />
            </motion.div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-12 pt-8 border-t border-dark-200 dark:border-dark-700">
            <a 
              href={developerInfo.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a 
              href={developerInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href={developerInfo.socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </a>
            <a 
              href={`mailto:${developerInfo.email}`} 
              className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
