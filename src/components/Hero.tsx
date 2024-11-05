import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-medium text-white mb-8">
          Building the future of<br />Southwest Virginia
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12">
          Join us as we connect businesses and talent to build a Harbor
        </p>
        <button 
          onClick={() => navigate('/learn-more')}
          className="px-12 py-5 text-white rounded-md hover:bg-[#1e90ff]/20 transition-colors text-3xl mt-12"
        >
          Learn more
        </button>
      </div>
    </div>
  );
}