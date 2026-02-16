import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import {
  featuredProjects,
  genAIProjects,
  dataEngineeringProjects,
  softwareEngineeringProjects,
  mlProjects
} from '../data/projects';
import { personalInfo } from '../data/personalInfo';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="projects" className="min-h-screen py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-t-2xl mb-4`}></div>
              
              <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">View Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="space-y-12">
              {/* Generative AI & Agentic Systems */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 gradient-text">
                  Generative AI & Agentic Systems
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {genAIProjects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <h4 className="text-lg font-display font-bold mb-2">{project.title}</h4>
                      <p className="text-sm text-gray-300 mb-3 line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2 py-1 rounded-full bg-white/10 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-secondary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Data Engineering & Analytics */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 gradient-text">
                  Data Engineering & Analytics
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {dataEngineeringProjects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <h4 className="text-lg font-display font-bold mb-2">{project.title}</h4>
                      <p className="text-sm text-gray-300 mb-3 line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2 py-1 rounded-full bg-white/10 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-secondary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Software Engineering & Data Structures */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 gradient-text">
                  Software Engineering & Data Structures
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {softwareEngineeringProjects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <h4 className="text-lg font-display font-bold mb-2">{project.title}</h4>
                      <p className="text-sm text-gray-300 mb-3 line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2 py-1 rounded-full bg-white/10 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-secondary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Machine Learning & Computer Vision */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 gradient-text">
                  Machine Learning & Computer Vision
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {mlProjects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <h4 className="text-lg font-display font-bold mb-2">{project.title}</h4>
                      <p className="text-sm text-gray-300 mb-3 line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2 py-1 rounded-full bg-white/10 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-secondary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href={personalInfo.tableau}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-5 h-5" />
            View Tableau Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;