'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayout, FiDatabase, FiTool } from 'react-icons/fi';

const technologies = [
  { name: 'Kubernetes', category: 'platform' },
  { name: 'Docker', category: 'platform' },
  { name: 'Jenkins', category: 'cicd' },
  { name: 'GitLab CI', category: 'cicd' },
  { name: 'Terraform', category: 'iac' },
  { name: 'Ansible', category: 'iac' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Azure', category: 'cloud' },
  { name: 'Python', category: 'language' },
  { name: 'Bash', category: 'language' },
  { name: 'Prometheus', category: 'monitoring' },
  { name: 'Grafana', category: 'monitoring' },
];

const stats = [
  { label: 'Years Experience', value: '3+', icon: FiCode },
  { label: 'CI/CD Pipelines', value: '50+', icon: FiLayout },
  { label: 'DevOps Tools', value: '20+', icon: FiDatabase },
  { label: 'System Uptime', value: '99.9%', icon: FiTool },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-white dark:bg-dark-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/10 to-transparent dark:via-primary-950/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-6">
                I'm a Platform Engineer at the National Institutes of Health (NIH), where I architect
                and maintain the infrastructure that powers critical biomedical research applications.
                My work focuses on building robust CI/CD pipelines, automating deployments, and ensuring
                high availability for systems that researchers depend on worldwide.
              </p>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-6">
                With expertise in Kubernetes, Docker, Jenkins, and cloud platforms, I specialize in
                creating scalable infrastructure that enables teams to deploy faster and more reliably.
                I'm passionate about DevOps best practices, infrastructure as code, and building tools
                that make developers' lives easier.
              </p>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                When I'm not architecting platforms or automating workflows, you'll find me playing FIFA,
                exploring new DevOps tools, or contributing to open-source projects. I believe in continuous
                learning and staying at the forefront of cloud-native technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-800/50 rounded-xl backdrop-blur-sm border border-primary-100 dark:border-dark-700"
              >
                <div className="p-3 bg-primary-500 text-white rounded-lg">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-8 text-center">
            Technologies I Work With
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white dark:bg-dark-800 rounded-full shadow-md hover:shadow-xl border-2 border-primary-100 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all cursor-pointer"
              >
                <span className="text-dark-700 dark:text-dark-200 font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
