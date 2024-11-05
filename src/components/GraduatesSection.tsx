import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function GraduatesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [visionRef, visionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const percentage = 70;
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-medium text-white mb-20"
          >
            More than 70% of graduates
          </motion.h2>

          <div ref={ref} className="relative">
            {/* Background circle */}
            <svg width="300" height="300" viewBox="0 0 300 300" className="mx-auto">
              <circle
                cx="150"
                cy="150"
                r={radius}
                fill="transparent"
                stroke="#333333"
                strokeWidth="24"
              />
              
              {/* Animated percentage circle */}
              <motion.circle
                cx="150"
                cy="150"
                r={radius}
                fill="transparent"
                stroke="#1e90ff"
                strokeWidth="24"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={inView ? { 
                  strokeDashoffset,
                  transition: { duration: 1.5, ease: "easeInOut" }
                } : { strokeDashoffset: circumference }}
                transform="rotate(-90 150 150)"
              />
              
              {/* Percentage text */}
              <motion.text
                x="150"
                y="150"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="48"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={inView ? { 
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1 }
                } : { opacity: 0 }}
              >
                {percentage}%
              </motion.text>
            </svg>

            {/* Description text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 1.2 }
              } : { opacity: 0, y: 20 }}
              className="text-xl md:text-2xl text-white text-center mt-12 max-w-xl mx-auto"
            >
              of graduates are leaving the region for their first jobs
            </motion.p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div ref={visionRef} className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-medium text-white mb-12"
          >
            Southwest Virginia can be <span className="text-[#1e90ff]">better</span>
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => {
              scrollToTop();
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent('switchToVision'));
              }, 100);
            }}
            className="inline-block px-12 py-5 text-white rounded-md hover:bg-[#1e90ff]/20 transition-colors text-3xl"
          >
            See the Harbor Vision
          </motion.button>
        </div>
      </div>
    </>
  );
}