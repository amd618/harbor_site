import React from 'react';
import { Building, Briefcase, Factory, ShoppingBag, Cpu, Leaf } from 'lucide-react';

const portfolioItems = [
  {
    icon: Building,
    title: 'Real Estate',
    description: 'Premium commercial and residential property investments across key markets.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Innovative manufacturing solutions driving industrial excellence.',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Cutting-edge technology investments in emerging markets.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    description: 'Strategic retail operations with strong market presence.',
  },
  {
    icon: Briefcase,
    title: 'Financial Services',
    description: 'Comprehensive financial solutions for modern businesses.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Energy',
    description: 'Renewable energy projects supporting a greener future.',
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Diverse investments across key industries driving innovation and growth
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}