import React from 'react';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const roles = ['AI/ML Engineer', 'Computer Science Student', 'Research Enthusiast', 'Innovation Seeker', 'Gamer'];
  const [currentRole, setCurrentRole] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced Bright Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-100 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated Background Elements - Brighter */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300/25 dark:bg-primary-800/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-300/25 dark:bg-accent-800/15 rounded-full blur-3xl"
        />
        {/* Additional bright gradient element */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/20 dark:bg-purple-800/10 rounded-full blur-3xl"
        />
        {/* Extra gradient for more brightness */}
        <motion.div
          animate={{
            x: [0, -75, 0],
            y: [0, 75, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-3/4 left-3/4 w-72 h-72 bg-pink-300/20 dark:bg-pink-800/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary-600 dark:text-primary-400 font-medium text-lg mb-2"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Prathamesh Patil
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-12"
            >
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building the future of AI and 5G technologies. Computer Science undergraduate at IIIT Raichur, 
              passionate about machine learning, autonomous systems, and innovative research solutions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Mail size={20} />
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: ExternalLink, href: 'https://scholar.google.com', label: 'Google Scholar' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                title={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const element = document.getElementById('about');
          if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center hover:border-primary-500 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;