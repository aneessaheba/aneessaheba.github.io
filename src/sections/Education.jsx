import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { education } from '../data/education';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="min-h-screen py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} mb-4`}>
                <GraduationCap className="w-5 h-5 text-white" />
                <span className="font-display font-bold text-white">{edu.institution}</span>
              </div>

              <h3 className="text-2xl font-display font-bold mb-4">{edu.degree}</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold">GPA: {edu.gpa}</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-display font-bold mb-3">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIdx) => (
                    <motion.span
                      key={courseIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: idx * 0.2 + courseIdx * 0.05 }}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm hover:bg-white/20 transition-colors"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;