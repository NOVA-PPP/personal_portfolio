import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { key: 'light' as const, icon: Sun, label: 'Light' },
    { key: 'dark' as const, icon: Moon, label: 'Dark' },
    { key: 'system' as const, icon: Monitor, label: 'System' },
  ];

  return (
    <div className="flex items-center space-x-1 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
      {themes.map(({ key, icon: Icon, label }) => (
        <motion.button
          key={key}
          onClick={() => setTheme(key)}
          className={`relative p-2 rounded-md transition-all duration-200 ${
            theme === key
              ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={label}
        >
          <Icon size={16} />
        </motion.button>
      ))}
    </div>
  );
};

export default ThemeToggle;