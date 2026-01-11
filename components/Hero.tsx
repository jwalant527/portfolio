'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const roles = ['DevOps Enthusiast', 'Platform Engineer at NIH', 'FIFA fanatic'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          } else {
            setDisplayText(displayText.slice(0, -1));
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-purple-50/30 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary-500 dark:text-primary-400 font-medium text-lg mb-4"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-dark-900 dark:text-white mb-4"
              >
                Jwalant Bhatt
              </motion.h1>
              <div className="h-12 md:h-16">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-4xl font-semibold text-dark-700 dark:text-dark-300"
                >
                  {displayText}
                  <span className="animate-pulse">|</span>
                </motion.h2>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-dark-600 dark:text-dark-400 max-w-lg leading-relaxed"
            >
              Platform Engineer at NCBI, where I build the infrastructure that keeps critical
              biomedical research applications running smoothly. I specialize in Kubernetes,
              CI/CD automation, and cloud-native solutions that help teams deploy with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToNext}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-primary-500 dark:border-primary-400 text-primary-500 dark:text-primary-400 rounded-full font-medium hover:bg-primary-50 dark:hover:bg-dark-800 transition-colors"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/jwalant527', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jwalantb/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:jwalantbhatt1998@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-3 bg-dark-100 dark:bg-dark-800 rounded-full hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
              >
                <div className="aspect-square rounded-full bg-gradient-to-br from-primary-400 to-purple-600 p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-6xl">
                    👤
                  </div>
                </div>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-600/20 rounded-full blur-3xl" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown className="w-6 h-6 text-dark-600 dark:text-dark-400" />
        </motion.div>
      </motion.button>
    </section>
  );
}
