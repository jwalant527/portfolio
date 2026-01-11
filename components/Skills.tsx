'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Bash', level: 85 },
      { name: 'C/C++', level: 75 },
      { name: 'SQL/PL-SQL', level: 80 },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Kubernetes', level: 88 },
      { name: 'Docker', level: 92 },
      { name: 'Terraform', level: 85 },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    skills: [
      { name: 'GitLab CI', level: 90 },
      { name: 'Jenkins', level: 85 },
      { name: 'Ansible', level: 82 },
      { name: 'ArgoCD', level: 88 },
    ],
  },
];

function SkillBar({ skill, index, inView }: { skill: { name: string; level: number }; index: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = skill.level;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, skill.level]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-dark-700 dark:text-dark-300 font-medium">{skill.name}</span>
        <span className="text-primary-500 dark:text-primary-400 font-bold">{count}%</span>
      </div>
      <div className="h-3 bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full relative"
        >
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

const techIcons = [
  { name: 'Python', icon: '🐍' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Terraform', icon: '🏗️' },
  { name: 'GitLab', icon: '🦊' },
  { name: 'Jenkins', icon: '🔧' },
  { name: 'Ansible', icon: '⚙️' },
  { name: 'ArgoCD', icon: '🚀' },
  { name: 'Kafka', icon: '📊' },
  { name: 'Istio', icon: '🔒' },
  { name: 'Linux', icon: '🐧' },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-primary-50/30 to-white dark:from-dark-800 dark:to-dark-900 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Skills & <span className="text-primary-500">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto text-lg">
            From container orchestration to infrastructure automation, here's my technical toolkit
            for building reliable, scalable platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 md:p-8 shadow-lg border border-primary-100 dark:border-dark-700"
              >
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                  {category.category}
                </h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    inView={inView}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-lg border border-primary-100 dark:border-dark-700">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-8 text-center">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                  {techIcons.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-700 dark:to-dark-700/50 rounded-xl cursor-pointer hover:shadow-lg transition-shadow"
                    >
                      <div className="text-4xl">{tech.icon}</div>
                      <div className="text-xs font-medium text-dark-600 dark:text-dark-400 text-center">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mt-8 p-6 bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl text-white text-center"
                >
                  <div className="text-4xl font-bold mb-2">5+</div>
                  <div className="text-sm opacity-90">Years of Experience</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
