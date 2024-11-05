import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Atlas Holdings
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A legacy of excellence in strategic investments and value creation
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                To identify and nurture exceptional businesses, driving sustainable growth and creating lasting value for our stakeholders.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Our Team</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Expert professionals with deep industry knowledge and a proven track record of successful investments.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Our Approach</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Strategic, long-term investment philosophy focused on sustainable growth and value creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}