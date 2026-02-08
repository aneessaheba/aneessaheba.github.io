import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="min-h-screen py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative md:ml-20"
              >
                <div className={`absolute -left-[4.75rem] top-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} hidden md:block`}></div>

                <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} mb-4`}>
                    <h3 className="text-xl font-display font-bold text-white">{exp.company}</h3>
                  </div>

                  <h4 className="text-2xl font-display font-bold mb-4">{exp.role}</h4>

                  <div className="flex flex-wrap gap-4 mb-6 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <motion.li
                        key={respIdx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: idx * 0.2 + respIdx * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0"></div>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;