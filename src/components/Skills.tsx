import React from 'react';
import { Code, Database, Brain, Wrench, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Python', level: 95, experience: '3+ years' },
        { name: 'C++', level: 85, experience: '2+ years' },
        { name: 'SQL', level: 80, experience: '2+ years' },
        { name: 'JavaScript', level: 75, experience: '1+ year' },
      ]
    },
    {
      title: 'AI/ML Libraries',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'PyTorch', level: 90, experience: '2+ years' },
        { name: 'TensorFlow', level: 85, experience: '2+ years' },
        { name: 'Hugging Face', level: 80, experience: '1+ year' },
        { name: 'Scikit-learn', level: 85, experience: '2+ years' },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Git', level: 85, experience: '2+ years' },
        { name: 'Docker', level: 75, experience: '1+ year' },
        { name: 'VS Code', level: 90, experience: '3+ years' },
        { name: 'Arduino', level: 80, experience: '2+ years' },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'PostgreSQL', level: 80, experience: '1+ year' },
        { name: 'MongoDB', level: 75, experience: '1+ year' },
        { name: 'MySQL', level: 80, experience: '2+ years' },
        { name: 'Redis', level: 70, experience: '1+ year' },
      ]
    }
  ];

  const certifications = [
    {
      title: 'Deep Learning Specialization',
      issuer: 'NVIDIA Deep Learning Institute',
      date: '2024',
      credential: 'DLI Certified',
      icon: Award,
    },
    {
      title: 'Machine Learning Course',
      issuer: 'Coursera (Stanford)',
      date: '2023',
      credential: 'Verified Certificate',
      icon: TrendingUp,
    },
    {
      title: 'Computer Vision Fundamentals',
      issuer: 'NVIDIA DLI',
      date: '2024',
      credential: 'Professional Certificate',
      icon: Award,
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-yellow-50 to-lime-100 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-800" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 85, 0],
            y: [0, -65, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/6 right-1/5 w-72 h-72 bg-amber-300/25 dark:bg-amber-600/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -75, 0],
            y: [0, 75, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/6 left-1/5 w-80 h-80 bg-lime-300/25 dark:bg-lime-600/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300/20 dark:bg-yellow-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Comprehensive technical skills developed through hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, width: 0 },
                      visible: {
                        opacity: 1,
                        width: '100%',
                        transition: { duration: 0.8, delay: skillIndex * 0.1 },
                      },
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.experience}
                        </span>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="h-3 bg-gray-200/80 dark:bg-gray-700/80 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.2, ease: 'easeOut' },
                  },
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <cert.icon className="text-white" size={20} />
                  </div>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {cert.date}
                  </span>
                </div>
                
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {cert.issuer}
                </p>
                <span className="inline-block px-3 py-1 bg-primary-100/80 dark:bg-primary-900/80 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold backdrop-blur-sm">
                  {cert.credential}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Expertise
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Research Skills',
                skills: ['Academic Writing', 'Literature Review', 'Experimental Design', 'Data Analysis']
              },
              {
                title: 'Leadership',
                skills: ['Team Management', 'Project Coordination', 'Public Speaking', 'Mentoring']
              },
              {
                title: 'Soft Skills',
                skills: ['Problem Solving', 'Critical Thinking', 'Communication', 'Adaptability']
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="text-center"
              >
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
                  {area.title}
                </h4>
                <div className="space-y-2">
                  {area.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="inline-block px-3 py-1 bg-white/80 dark:bg-gray-600/80 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium mr-2 mb-2 shadow-sm backdrop-blur-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;