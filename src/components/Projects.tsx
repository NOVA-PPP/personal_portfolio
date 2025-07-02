import React from 'react';
import { ExternalLink, Github, Play, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Dysarthric Speech Intelligibility Assessment',
      category: 'AI/ML Research',
      description: 'Advanced machine learning system for assessing speech intelligibility in dysarthric patients using deep learning algorithms and signal processing techniques.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'PyTorch', 'Signal Processing', 'Audio Analysis', 'Deep Learning'],
      features: [
        'Real-time speech analysis and scoring',
        'Custom neural network architecture',
        'Comprehensive evaluation metrics',
        'Clinical validation studies'
      ],
      links: {
        github: '#',
        demo: '#',
      },
      status: 'Published Research',
      highlight: true
    },
    {
      title: 'Singing Voice Phonation Classification',
      category: 'Audio Processing',
      description: 'Novel approach to classify different phonation types in singing voices using advanced machine learning techniques and acoustic feature extraction.',
      image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'Audio Processing', 'Feature Engineering', 'Classification'],
      features: [
        'Multi-class phonation classification',
        'Feature extraction pipeline',
        'Performance optimization',
        'Visualization dashboard'
      ],
      links: {
        github: '#',
        paper: '#',
      },
      status: 'Research Paper',
      highlight: false
    },
    {
      title: 'Autonomous Arduino Quadcopter',
      category: 'Robotics & IoT',
      description: 'Self-navigating quadcopter system with autonomous flight capabilities, obstacle avoidance, and real-time telemetry data transmission.',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Arduino', 'C++', 'Sensors', 'Flight Control', 'Real-time Systems'],
      features: [
        'Autonomous navigation system',
        'Obstacle detection and avoidance',
        'Real-time telemetry',
        'Manual override capabilities'
      ],
      links: {
        github: '#',
        video: '#',
      },
      status: 'Hardware Project',
      highlight: false
    },
    {
      title: 'Smart IoT Environmental Monitor',
      category: 'IoT & Sensors',
      description: 'Comprehensive environmental monitoring system using IoT sensors to track air quality, temperature, humidity, and noise levels with real-time data visualization.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Arduino', 'ESP32', 'Sensors', 'MQTT', 'Data Visualization'],
      features: [
        'Multi-sensor data collection',
        'Real-time dashboard',
        'Alert system for anomalies',
        'Historical data analysis'
      ],
      links: {
        github: '#',
        demo: '#',
      },
      status: 'IoT Project',
      highlight: false
    },
    {
      title: 'Neural Style Transfer Application',
      category: 'Computer Vision',
      description: 'Deep learning application that applies artistic styles to photographs using convolutional neural networks and style transfer algorithms.',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'Computer Vision', 'CNN', 'Image Processing'],
      features: [
        'Multiple artistic style options',
        'Real-time style transfer',
        'Batch processing capability',
        'Custom style training'
      ],
      links: {
        github: '#',
        demo: '#',
      },
      status: 'ML Project',
      highlight: false
    },
    {
      title: 'Predictive Maintenance System',
      category: 'Industrial AI',
      description: 'Machine learning system for predicting equipment failures in industrial settings using sensor data and advanced analytics.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Scikit-learn', 'Time Series', 'Anomaly Detection', 'Industrial IoT'],
      features: [
        'Failure prediction algorithms',
        'Anomaly detection system',
        'Maintenance scheduling',
        'Cost optimization analysis'
      ],
      links: {
        github: '#',
        paper: '#',
      },
      status: 'Industry Project',
      highlight: false
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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-orange-100 dark:from-gray-900 dark:via-rose-900/20 dark:to-gray-800" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/5 left-1/6 w-64 h-64 bg-rose-300/25 dark:bg-rose-600/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/5 right-1/6 w-80 h-80 bg-orange-300/25 dark:bg-orange-600/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-2/3 left-2/3 w-72 h-72 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl"
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
            Research & Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Innovative solutions at the intersection of AI, machine learning, and emerging technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1, ease: 'easeOut' },
                },
              }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 ${
                project.highlight ? 'ring-2 ring-primary-500 dark:ring-primary-400' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.highlight && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Award size={10} />
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-primary-600/90 text-white px-2 py-1 rounded-md text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-1 h-1 bg-primary-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 2 && (
                      <li className="text-xs text-gray-500 dark:text-gray-400 italic">
                        +{project.features.length - 2} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100/80 dark:bg-gray-600/80 text-gray-700 dark:text-gray-300 rounded text-xs font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200/80 dark:bg-gray-500/80 text-gray-600 dark:text-gray-400 rounded text-xs backdrop-blur-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {Object.entries(project.links).map(([type, url]) => {
                    const icons = {
                      github: Github,
                      demo: Play,
                      paper: ExternalLink,
                      video: Play,
                    };
                    const labels = {
                      github: 'Code',
                      demo: 'Demo',
                      paper: 'Paper',
                      video: 'Video',
                    };
                    const Icon = icons[type as keyof typeof icons];
                    
                    return (
                      <motion.a
                        key={type}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 px-3 py-1.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors duration-200 text-xs"
                      >
                        <Icon size={12} />
                        {labels[type as keyof typeof labels]}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;