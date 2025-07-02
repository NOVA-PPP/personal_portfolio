import React from 'react';
import { GraduationCap, MapPin, Calendar, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 dark:from-gray-900 dark:via-emerald-900/20 dark:to-gray-800" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-teal-300/20 dark:bg-teal-600/10 rounded-full blur-3xl"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Computer Science undergraduate at IIIT Raichur with a deep fascination for 
                artificial intelligence and machine learning. My journey in technology began with curiosity 
                about how machines can learn and make decisions, which has evolved into a dedicated pursuit 
                of cutting-edge AI research and applications.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently serving as an AI/ML Engineer Intern at ARTPARK (IISc Bangalore) and as an 
                Undergraduate Research Assistant at Bosch Global Software Technologies, I'm actively 
                contributing to projects that bridge the gap between academic research and real-world 
                applications. My work focuses on speech processing, autonomous systems, and innovative 
                AI solutions.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond technical skills, I'm committed to leadership and community building. As the 
                Academic Affairs Secretary at IIIT Raichur, I work to enhance the academic experience 
                for fellow students while contributing to various clubs and initiatives that foster 
                innovation and collaboration.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: GraduationCap,
                title: 'Education',
                content: 'B.Tech Computer Science & Engineering\nIIIT Raichur',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'Bangalore, India\n(Originally from Maharashtra)',
                color: 'from-green-500 to-green-600',
              },
              {
                icon: Calendar,
                title: 'Experience',
                content: '2+ Years in AI/ML\nResearch & Development',
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: Target,
                title: 'Focus Areas',
                content: 'Speech Processing\nAutonomous Systems\nDeep Learning\n5G IoT and its Applications',
                color: 'from-orange-500 to-orange-600',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Constantly exploring new technologies and methodologies to solve complex problems.',
              },
              {
                title: 'Excellence',
                description: 'Committed to delivering high-quality work and continuous learning.',
              },
              {
                title: 'Impact',
                description: 'Building solutions that make a meaningful difference in people\'s lives.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200/50 dark:border-gray-600/50"
              >
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
