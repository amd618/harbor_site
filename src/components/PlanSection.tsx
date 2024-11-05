import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, TrendingUp, Users, Coins } from 'lucide-react';

const planSteps = [
  {
    icon: Building2,
    title: "Buy Growing Businesses",
    description: "Harbor intends to purchase majority stakes in growing businesses in the region, across many industries.",
    color: "#1e90ff"
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Coming soon...",
    color: "#34d399"
  },
  {
    icon: Users,
    title: "Attract Talent",
    description: "Coming soon...",
    color: "#8b5cf6"
  },
  {
    icon: Coins,
    title: "Hold and Distribute Returns",
    description: "Coming soon...",
    color: "#f59e0b"
  }
];

export default function PlanSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16"
    >
      {planSteps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.title}
            variants={itemVariants}
            transition={{ duration: 0.8 }}
            className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div 
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${step.color}20` }}
              >
                <Icon size={24} style={{ color: step.color }} />
              </div>
              <h3 className="text-2xl font-medium text-white">{step.title}</h3>
            </div>
            <p className="text-white/80 text-lg">
              {step.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}