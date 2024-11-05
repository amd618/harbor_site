import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Get in touch with our team to explore opportunities
          </p>
        </div>

        <div className="mt-20 bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Let's Connect
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                Whether you're looking to explore investment opportunities or join our portfolio of companies, we'd love to hear from you.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="ml-3 text-gray-500">
                    123 Business Avenue, Financial District, NY 10004
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <span className="ml-3 text-gray-500">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <span className="ml-3 text-gray-500">
                    contact@atlasholdings.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 bg-blue-50">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}