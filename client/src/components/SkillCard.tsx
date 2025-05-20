import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

interface SkillCardProps {
  category: string;
  skills: string[];
  index: number;
}

const defaultTiltOptions = {
  max: 25,
  scale: 1.05,
  speed: 450,
  glare: true,
  "max-glare": 0.5,
};

export default function SkillCard({ category, skills, index }: SkillCardProps) {
  return (
    <Tilt options={defaultTiltOptions}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.5 + (index * 0.1),
          duration: 0.8,
          type: "spring",
          stiffness: 100 
        }}
        whileHover={{ 
          y: -10,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        className="skill-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden relative h-full"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 dark:bg-primary-900/20 rounded-bl-full z-0 transition-all duration-300 ease-in-out"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary-50 dark:bg-primary-800/10 rounded-tr-full z-0 transition-all duration-300 ease-in-out"></div>
        
        {/* Card content */}
        <div className="relative z-10 p-6">
          <motion.h3 
            className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400 border-b border-gray-200 dark:border-gray-700 pb-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 + (index * 0.1) }}
          >
            {category}
          </motion.h3>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 inline-block"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.9 + (index * 0.1) + (skillIndex * 0.05),
                  type: "spring",
                  stiffness: 200 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "var(--color-primary-100)",
                  color: "var(--color-primary-600)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}