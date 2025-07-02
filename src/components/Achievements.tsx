import React from 'react';
import { Trophy, Award, Users, Star, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Amazon ML Hackathon',
      subtitle: 'Top 84 Performance',
      description: 'Achieved top 84 ranking among thousands of participants in Amazon\'s prestigious Machine Learning Hackathon, demonstrating exceptional problem-solving skills.',
      icon: Trophy,
      category: 'Competition',
      year: '2024',
      color: 'from-yellow-500 to-yellow-600',
      highlight: true
    },
    {
      title: 'Flipkart Grid 6.0',
      subtitle: 'Semifinalist',
      description: 'Advanced to semifinals in one of India\'s largest e-commerce hackathons, showcasing innovative solutions for real-world business challenges.',
      icon: Award,
      category: 'Hackathon',
      year: '2024',
      color: 'from-blue-500 to-blue-600',
      highlight: false
    },
    {
      title: 'JEE Advanced',
      subtitle: 'Top 4% Nationwide',
      description: 'Secured top 4% ranking in JEE Advanced, one of India\'s most competitive engineering entrance examinations.',
      icon: Target,
      category: 'Academic',
      year: '2022',
      color: 'from-green-500 to-green-600',
      highlight: false
    },
    {
      title: 'MHT CET',
      subtitle: '97th Percentile',
      description: 'Achieved 97th percentile in Maharashtra Common Entrance Test, demonstrating consistent academic excellence.',
      icon: TrendingUp,
      category: 'Academic',
      year: '2022',
      color: 'from-purple-500 to-purple-600',
      highlight: false
    }
  ];

  const leadership = [
    {
      title: 'Academic Affairs Secretary',
      organization: 'IIIT Raichur',
      period: '2023 - Present',
      description: 'Leading academic initiatives and student welfare programs, coordinating between administration and students.',
      icon: Users,
      responsibilities: [
        'Student welfare and academic support',
        'Policy development and implementation',
        'Cross-departmental coordination',
        'Event organization and management'
      ]
    },
    {
      title: 'Electrogeeks Club Member',
      organization: 'IIIT Raichur',
      period: '2022 - Present',
      description: 'Active member contributing to electronics and embedded systems projects, mentoring junior students.',
      icon: Star,
      responsibilities: [
        'Project mentorship and guidance',
        'Workshop organization',
        'Technical skill development',
        'Community building'
      ]
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
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-blue-50 to-sky-100 dark:from-gray-900 dark:via-indigo-900/20 dark:to-gray-800" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 90, 0],
            y: [0, -70, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/3 w-80 h-80 bg-indigo-300/25 dark:bg-indigo-600/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-sky-300/25 dark:bg-sky-600/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-2/3 left-1/6 w-64 h-64 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"
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
            Achievements & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Recognition for excellence in academics, competitions, and leadership roles
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`relative bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                achievement.highlight 
                  ? 'border-yellow-400/50 dark:border-yellow-500/50' 
                  : 'border-gray-200/50 dark:border-gray-600/50'
              }`}
            >
              {achievement.highlight && (
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <Star size={14} className="text-yellow-900" />
                </motion.div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <achievement.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-bold rounded-full`}>
                      {achievement.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                    {achievement.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Leadership Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Leadership & Involvement
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: 'easeOut' },
                  },
                }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <role.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {role.title}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                      {role.organization}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {role.period}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {role.description}
                </p>

                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {role.responsibilities.map((responsibility, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-8">Impact & Recognition</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '5+',
                label: 'Awards & Recognitions',
                description: 'Academic and competition achievements'
              },
              {
                number: '3+',
                label: 'Leadership Roles',
                description: 'Active involvement in student organizations'
              },
              {
                number: '10+',
                label: 'Projects Completed',
                description: 'Research and development initiatives'
              },
              {
                number: '100+',
                label: 'Students Impacted',
                description: 'Through mentoring and leadership'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: 'spring' }}
                  className="text-4xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm opacity-90">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;