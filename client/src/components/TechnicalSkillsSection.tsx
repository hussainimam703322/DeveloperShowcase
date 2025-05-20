import { motion } from "framer-motion";
import { technicalSkills } from "@/lib/data";
import SkillCard from "./SkillCard";

export default function TechnicalSkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of my technical expertise and proficiency in various technologies
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skillGroup, index) => (
            <SkillCard 
              key={skillGroup.category} 
              category={skillGroup.category} 
              skills={skillGroup.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}