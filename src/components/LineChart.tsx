import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const data = {
  years: [2012, 2018, 2020, 2024],
  virginia: [60, 85, 90, 95],
  swRegion: [40, 45, 47, 48]
};

export default function LineChart() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const chartHeight = 300;
  const chartWidth = 800;
  const padding = 40;
  
  const xScale = (width: number) => (x: number) => 
    ((x - data.years[0]) / (data.years[data.years.length - 1] - data.years[0])) * width;
  
  const yScale = (height: number) => (y: number) => 
    height - ((y - Math.min(...[...data.virginia, ...data.swRegion])) / 
    (Math.max(...[...data.virginia, ...data.swRegion]) - Math.min(...[...data.virginia, ...data.swRegion]))) * height;

  const generatePath = (values: number[]) => {
    const x = xScale(chartWidth - 2 * padding);
    const y = yScale(chartHeight - 2 * padding);
    
    return values.map((value, i) => 
      `${i === 0 ? 'M' : 'L'} ${x(data.years[i]) + padding} ${y(value) + padding}`
    ).join(' ');
  };

  const virginiaPath = generatePath(data.virginia);
  const swRegionPath = generatePath(data.swRegion);

  return (
    <div ref={ref} className="w-full flex justify-center">
      <div className="relative" style={{ width: chartWidth, height: chartHeight }}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 border-t border-gray-800"
            style={{
              top: `${(i * (chartHeight - 2 * padding)) / 4 + padding}px`,
              width: chartWidth - 2 * padding,
              marginLeft: padding
            }}
          />
        ))}
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-gray-400 px-10">
          {data.years.map(year => (
            <div key={year}>{year}</div>
          ))}
        </div>

        <svg width={chartWidth} height={chartHeight}>
          <motion.path
            d={virginiaPath}
            stroke="#1e90ff"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.path
            d={swRegionPath}
            stroke="white"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>

        <div className="absolute bottom-[-60px] left-0 right-0 flex justify-center space-x-8">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#1e90ff] mr-2"></div>
            <span className="text-white">Virginia</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-white mr-2"></div>
            <span className="text-white">SW Region</span>
          </div>
        </div>
      </div>
    </div>
  );
}