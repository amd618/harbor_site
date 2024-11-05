import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const data = [
  { region: 'Virginia', income: 90000 },
  { region: 'SW Region', income: 68000 }
];

export default function IncomeChart() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const maxIncome = Math.max(...data.map(d => d.income));

  return (
    <div ref={ref} className="w-full max-w-3xl mx-auto h-[300px] flex items-end space-x-16 justify-center">
      {data.map((item, index) => (
        <div key={item.region} className="flex flex-col items-center space-y-4">
          <motion.div 
            className="w-32 bg-[#1e90ff] rounded-t"
            initial={{ height: 0 }}
            animate={inView ? { height: `${(item.income / maxIncome) * 200}px` } : { height: 0 }}
            transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
            className="text-white text-lg"
          >
            {item.region}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
            className="text-white text-xl font-medium"
          >
            ${item.income.toLocaleString()}
          </motion.div>
        </div>
      ))}
    </div>
  );
}