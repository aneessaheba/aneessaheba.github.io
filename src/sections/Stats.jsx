import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '../data/personalInfo';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { githubUsername, leetcodeUsername } = personalInfo;

  return (
    <section id="stats" className="min-h-screen py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            GitHub & LeetCode <span className="gradient-text">Stats</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center">
            GitHub Statistics
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true&count_private=true&include_all_commits=true`}
                alt="GitHub Stats"
                className="rounded-2xl max-w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical&hide_border=true&langs_count=10`}
                alt="Top Languages"
                className="rounded-2xl max-w-full h-auto"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mb-8"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&hide_border=true`}
              alt="GitHub Streak"
              className="rounded-2xl max-w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-8"
          >
            <img
              src={`https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=radical&no-frame=true&no-bg=true&row=1&column=7`}
              alt="GitHub Trophies"
              className="rounded-2xl max-w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center"
          >
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react-dark&hide_border=true&area=true`}
              alt="Contribution Graph"
              className="rounded-2xl max-w-full h-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center">
            LeetCode Statistics
          </h3>
          
          <div className="flex justify-center">
            <img
              src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Ubuntu&ext=heatmap`}
              alt="LeetCode Stats"
              className="rounded-2xl max-w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;