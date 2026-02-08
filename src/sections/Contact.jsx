import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Youtube, Code, FileText, BarChart3 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      url: `mailto:${personalInfo.email}`,
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Anees Saheba Guddi",
      url: personalInfo.linkedin,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@aneessaheba",
      url: personalInfo.github,
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "@BytAByte",
      url: personalInfo.youtube,
      color: "from-red-600 to-red-700"
    },
    {
      icon: Code,
      label: "LeetCode",
      value: personalInfo.leetcodeUsername,
      url: personalInfo.leetcode,
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FileText,
      label: "Medium",
      value: "@aneessaheba.guddi",
      url: personalInfo.medium,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      label: "Tableau",
      value: "Public Profile",
      url: personalInfo.tableau,
      color: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just chatting about 
            AI, data engineering, and technology. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{link.label}</h3>
                <p className="text-gray-300">{link.value}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass p-12 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-4">
              Let's Build Something <span className="gradient-text">Amazing Together</span>
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hi, 
              I'd love to hear from you!
            </p>
            
              href={`mailto:${personalInfo.email}`}
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-display font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Send Me an Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center text-gray-400"
        >
          <p className="mb-2">
            Built with React, Vite, Tailwind CSS, and Framer Motion
          </p>
          <p>
            © 2025 Anees Saheba Guddi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;