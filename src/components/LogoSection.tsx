import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const companies = [
  'Advance Auto Parts',
  'Elizabeth Arden',
  'Allstate',
  'Norfolk Southern',
  'General Electric',
  'Mohawk Industries',
  'Luna',
  'Johnson & Johnson',
  'FreightCar America'
];

export default function LogoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-medium text-white mb-20"
      >
        Companies that have left the region
      </motion.h2>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20 max-w-5xl mx-auto px-4"
      >
        {companies.map((company) => (
          <motion.div
            key={company}
            variants={itemVariants}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center text-center"
          >
            <span className="text-2xl md:text-3xl text-white font-medium">
              {company}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}