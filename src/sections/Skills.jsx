import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories } from '../data/skills';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
              className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                <h3 className="text-lg font-display font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIdx * 0.1 + skillIdx * 0.02 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass p-8 rounded-2xl text-center"
        >
          <p className="text-xl text-gray-300">
            Proficient in <span className="text-primary font-semibold">70+ technologies</span> across{' '}
            <span className="text-secondary font-semibold">Generative AI</span>,{' '}
            <span className="text-accent font-semibold">Machine Learning</span>,{' '}
            <span className="text-primary font-semibold">Data Engineering</span>, and{' '}
            <span className="text-secondary font-semibold">Cloud Systems</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;