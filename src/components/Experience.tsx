import React from 'react';
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AI/ML Engineer Intern (5G and IoT)',
      company: 'ARTPARK (IISc Bangalore)',
      location: 'Bangalore, India',
      period: '2025 - Present',
      type: '5G Intern',
      description: [
        'Developing advanced AI/ML solutions for real-world applications based on private 5G network',
        'Working on cutting-edge research projects in AI & 5G integration',
        'Collaborating with renowned researchers and industry experts',
        'Contributing to open-source AI/5G initiatives and publications'
      ],
      technologies: ['5G', 'IoT', 'Python', 'C/C++', 'Pytorch', 'Computer Vision', 'Data Analysis'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Undergraduate Research Assistant',
      company: 'Bosch Global Software Technologies',
      location: 'Bangalore, India',
      period: '2023 - 2024',
      type: 'Research',
      description: [
        'Engineered an end-to-end Real-Time Location System (RTLS) from concept to implementation, building the system from scratch.',
        'Conducted research on autonomous systems and Real time IoT applications',
        'Architected the system using DWM1000 UWB modules for precise positioning, ESP8266 for Wi-Fi communication, and a Python-based MQTT client for data transmission.',
        'Contributed to patent applications for innovative solutions',
        'Surpassed the primary accuracy goal of <40 cm by achieving a final system error of <15 cm, demonstrating exceptional precision in indoor tracking.'
      ],
      technologies: ['C++', 'Python', 'MATLAB', 'IoT', 'Signal Processing'],
      color: 'from-green-500 to-green-600'
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
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -70, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-violet-300/20 dark:bg-violet-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -90, 0],
            y: [0, 90, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-fuchsia-300/20 dark:bg-fuchsia-600/10 rounded-full blur-3xl"
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Building expertise through hands-on experience in AI/ML research and development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 bg-gradient-to-r ${exp.color} rounded-full`} />
                    <span className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-xs font-semibold rounded-full`}>
                      {exp.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-primary-100/80 dark:bg-primary-900/80 text-primary-700 dark:text-primary-300 rounded-md text-sm font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Focus */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="mt-16 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-200/50 dark:border-gray-700/50"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Current Focus Areas
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Continuously expanding my expertise in emerging technologies and research methodologies
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Deep Learning Research',
                description: 'Advanced neural network architectures and optimization techniques'
              },
              {
                title: 'Speech Processing',
                description: 'Intelligibility assessment and voice analysis systems'
              },
              {
                title: 'Autonomous Systems',
                description: 'Robotics, computer vision, and decision-making algorithms'
              }
            ].map((focus, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-600/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200/50 dark:border-gray-500/50"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {focus.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {focus.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
