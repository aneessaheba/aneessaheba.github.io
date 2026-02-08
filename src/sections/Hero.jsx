import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Youtube, FileDown, Code2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Hero = () => {
  const socialLinks = [
    { icon: Github, url: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Youtube, url: personalInfo.youtube, label: 'YouTube' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="px-4 py-2 rounded-full glass text-sm font-medium">
                Welcome to my portfolio 👋
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-4"
            >
              Anees Saheba
              <br />
              <span className="gradient-text">Guddi</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-2"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 mb-8"
            >
              {personalInfo.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <FileDown className="w-5 h-5" />
                Resume
              </a>
              
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full glass font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Code2 className="w-5 h-5" />
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glass p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Anees Saheba Guddi"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-6xl font-display font-bold gradient-text">
                    ASG
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;