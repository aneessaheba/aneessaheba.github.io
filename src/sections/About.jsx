import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Briefcase, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Sparkles,
      title: "Current Focus",
      description: "Building production-ready agentic AI systems with LangChain, LangGraph, and multi-tool orchestration"
    },
    {
      icon: Briefcase,
      title: "Professional Background",
      description: "Former Software Development Engineer at HP Inc. (Jul 2023 – Aug 2024)"
    },
    {
      icon: MapPin,
      title: "Location",
      description: `Based in ${personalInfo.location} | Originally from Bangalore, India`
    }
  ];

  const currentlyWorkingOn = [
    "Building production-ready agentic AI systems with LangChain, LangGraph, and multi-tool orchestration",
    "Exploring MLOps workflows, LLM fine-tuning techniques, and distributed machine learning training",
    "Deepening knowledge in scalable data platforms and real-time streaming architectures",
    "Contributing to open-source AI/ML projects and sharing insights through technical writing",
    "Creating educational content on Gen AI and Data Engineering on Medium and YouTube"
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              MS in Applied Data Intelligence student at{' '}
              <span className="text-primary font-semibold">San José State University</span>{' '}
              (2025–2027) specializing in{' '}
              <span className="text-secondary font-semibold">Generative AI</span>,{' '}
              <span className="text-accent font-semibold">LLM Fine-tuning</span>, and{' '}
              <span className="text-primary font-semibold">Machine Learning Model Development</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I architect intelligent systems that combine cutting-edge AI capabilities with production-grade 
              software engineering—from fine-tuning large language models and training deep learning networks 
              to building agentic workflows and distributed architectures.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans the full machine learning lifecycle: designing and training neural networks 
              from scratch, fine-tuning foundation models for domain-specific tasks, architecting LLM-based 
              agentic systems with LangChain and LangGraph, and deploying scalable microservices.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With professional experience as a Software Development Engineer at HP Inc., I bring hands-on 
              knowledge in building production AI systems, distributed data pipelines, and intelligent 
              automation solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                  className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center">
            Currently <span className="gradient-text">Working On</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {currentlyWorkingOn.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + idx * 0.1 }}
                className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;