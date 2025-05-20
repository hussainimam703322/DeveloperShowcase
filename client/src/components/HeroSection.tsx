import { useScrollToElement } from "@/hooks/useScrollToElement";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { developerInfo, technicalSkills } from "@/lib/data";
import { useState } from "react";

export default function HeroSection() {
  const scrollToElement = useScrollToElement();
  const [showEducation, setShowEducation] = useState(false);

  const handleNavClick = (href: string) => {
    scrollToElement(href);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
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
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-3 py-1 mb-4 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium"
              >
                {developerInfo.title}
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-dark-900 dark:text-white">
                Hi, I'm <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="text-primary-500 dark:text-primary-400"
                >
                  {developerInfo.name}
                </motion.span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-dark-600 dark:text-dark-300 mb-6"
              >
                {developerInfo.bio}
              </motion.p>

              {/* Education Button */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mb-6"
              >
                <Button 
                  variant="outline" 
                  onClick={() => setShowEducation(!showEducation)}
                  className="flex items-center gap-2 mb-2"
                >
                  <GraduationCap className="h-5 w-5" />
                  {showEducation ? "Hide Education" : "Show Education"}
                </Button>
                
                {showEducation && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border border-primary-200 dark:border-primary-800"
                  >
                    <h3 className="font-semibold text-lg text-primary-700 dark:text-primary-300">{developerInfo.education.university}</h3>
                    <p className="text-dark-600 dark:text-dark-300">{developerInfo.education.location}</p>
                    <p className="text-dark-600 dark:text-dark-300">{developerInfo.education.degree}</p>
                    <p className="text-dark-700 dark:text-dark-200 font-medium">{developerInfo.education.gpa}</p>
                    <p className="text-dark-500 dark:text-dark-400 text-sm mt-1">{developerInfo.education.period}</p>
                  </motion.div>
                )}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {developerInfo.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (index * 0.05) }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="outline" className="px-3 py-1 bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded-full text-sm">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={() => handleNavClick("projects")}
                    className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow"
                  >
                    View Projects
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    onClick={() => handleNavClick("contact")}
                    className="px-6 py-3 border border-dark-300 dark:border-dark-600 hover:border-primary-500 dark:hover:border-primary-500 text-dark-800 dark:text-dark-200 hover:text-primary-500 dark:hover:text-primary-400 font-medium rounded-lg transition-colors"
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-2/5 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src={developerInfo.image} 
                alt={`${developerInfo.name} - Developer`} 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-dark-700 shadow-lg" 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center md:justify-start gap-6 mt-12 pt-8 border-t border-dark-200 dark:border-dark-700"
          >
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/hussainimam703322" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </motion.a>
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/imam-hussain-b27086221/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </motion.a>
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:hussainimam78621@gmail.com" 
              className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Technical Skills Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="container mx-auto px-4 md:px-8 mt-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-dark-800 dark:text-dark-200">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + (index * 0.1) }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400 border-b border-dark-200 dark:border-dark-700 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map(skill => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-dark-100 dark:bg-dark-700 rounded-full text-sm text-dark-700 dark:text-dark-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
