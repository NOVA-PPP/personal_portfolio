import React from 'react';
import { Heart, Github, Linkedin, ExternalLink, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: ExternalLink,
      href: 'https://scholar.google.com',
      label: 'Google Scholar',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Prathamesh Patil
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              AI/ML Engineer and Computer Science student passionate about building innovative 
              solutions that bridge the gap between research and real-world applications.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <span className="font-medium">Email:</span><br />
                <a href="mailto:prathamesh@example.com" className="hover:text-primary-400 transition-colors">
                  prathamesh@example.com
                </a>
              </p>
              <p>
                <span className="font-medium">Location:</span><br />
                Bangalore, India
              </p>
              <div className="pt-4">
                <h5 className="font-medium text-white mb-2">Theme Preference</h5>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.div>
            <span>by Prathamesh Patil © {new Date().getFullYear()}</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;