import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import IncomeChart from '../components/IncomeChart';
import GrowthChart from '../components/GrowthChart';
import LineChart from '../components/LineChart';
import StatsSection from '../components/StatsSection';
import LogoSection from '../components/LogoSection';
import GraduatesSection from '../components/GraduatesSection';
import PlanSection from '../components/PlanSection';

export default function LearnMore() {
  const [view, setView] = useState('problem');

  useEffect(() => {
    const handleSwitchToVision = () => {
      setView('solution');
    };

    window.addEventListener('switchToVision', handleSwitchToVision);
    return () => {
      window.removeEventListener('switchToVision', handleSwitchToVision);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden pt-32 text-center">
      <div className="flex justify-center items-center py-6 mb-8">
        <div className="relative flex items-center bg-white/10 rounded-xl p-1">
          <motion.div
            className="absolute h-full top-0 rounded-lg bg-[#1e90ff]"
            initial={false}
            animate={{
              x: view === 'problem' ? 0 : '100%',
              width: '50%'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          <div 
            onClick={() => setView('problem')}
            className={`relative px-8 py-2 cursor-pointer text-lg transition-colors duration-200 z-10 ${
              view === 'problem' ? 'text-white' : 'text-white/60 hover:text-white/80'
            }`}
          >
            The Challenge
          </div>
          <div 
            onClick={() => setView('solution')}
            className={`relative px-8 py-2 cursor-pointer text-lg transition-colors duration-200 z-10 ${
              view === 'solution' ? 'text-white' : 'text-white/60 hover:text-white/80'
            }`}
          >
            The Vision
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {view === 'problem' ? (
          <motion.div
            key="problem"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-16 text-center"
                >
                  <h1 className="text-5xl md:text-7xl font-medium text-white">
                    Southwest Virginia is <span className="text-[#1e90ff]">behind</span>
                  </h1>
                  <p className="text-2xl md:text-4xl text-white max-w-5xl mx-auto">
                    The I-81 corridor is lagging the rest of Virginia
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="min-h-screen flex items-center justify-center mt-48">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-16 text-center"
                >
                  <h2 className="text-4xl md:text-6xl font-medium text-white">
                    Lower Income Levels
                  </h2>
                  <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
                    Southwest Virginia's median household income is 35% below the Virginia state average
                  </p>
                  <IncomeChart />
                </motion.div>
              </div>
            </div>

            <div className="min-h-screen flex items-center justify-center mt-48">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-16 text-center"
                >
                  <h2 className="text-4xl md:text-6xl font-medium text-white">
                    Decelerating Growth
                  </h2>
                  <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
                    This region is growing 44% slower than the rest of Virginia
                  </p>
                  <LineChart />
                </motion.div>
              </div>
            </div>

            <div className="mt-48">
              <StatsSection />
            </div>
            <div className="mt-48">
              <LogoSection />
            </div>
            <div className="mt-48">
              <GraduatesSection />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="solution"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl md:text-7xl font-medium text-white mb-8">
                  Harbor's <span className="text-[#1e90ff]">vision</span>
                </h1>
                <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
                  To build a portfolio of businesses across industries, that generate consistent returns, attract top talent, and serve as a regional anchor for sustainable growth and prosperity.
                </p>
              </div>
            </div>

            <div className="min-h-screen flex items-center justify-center mt-48">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-6xl font-medium text-white mb-8">
                  The Plan
                </h2>
                <PlanSection />
              </div>
            </div>

            <div className="min-h-screen flex items-center justify-center mt-48">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-6xl font-medium text-white mb-8">
                  Harbor's Strategy
                </h2>
                <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
                  Coming soon...
                </p>
              </div>
            </div>

            <div className="min-h-screen flex items-center justify-center mt-48">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-6xl font-medium text-white mb-8">
                  Criteria
                </h2>
                <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
                  Coming soon...
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}