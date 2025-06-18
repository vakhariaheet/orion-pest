import React from 'react';
import { Star, Award, Users, Shield } from 'lucide-react';

const AboutTroy: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                alt="Troy Mitchell - Founder of Orion Pest Control"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full opacity-10"></div>
            
            {/* Constellation Pattern */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1.5 + Math.random()}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-blue-600 fill-current" />
                <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm">
                  Meet Our Founder
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Troy Arnett
              </h2>
              <p className="text-xl text-blue-700 font-medium mb-6">
                Founder & Lead Technician
              </p>
            </div>

            <div className="prose prose-lg text-slate-700 leading-relaxed">
              <p>
                Troy brings over three decades of experience in the pest control industry and founded Orion Pest Control in 2003. He has built a trusted reputation for delivering reliable, results-driven service to property managers and commercial clients throughout Silicon Valley.
              </p>
              <p>
                As the owner, Troy leads with integrity, deep industry knowledge, and a strong commitment to client satisfaction. His expertise and dedication have made Orion Pest Control a trusted name in the industry.
              </p>
              <p className="text-slate-900 font-medium">
                Outside of work, Troy is an accomplished pianist and enjoys all things outdoors—fishing, hiking, or climbing a mountain.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">30+</div>
                <div className="text-slate-600 text-sm">Years Experience</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">5000+</div>
                <div className="text-slate-600 text-sm">Happy Customers</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-full">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Licensed Professional</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Certified Technician</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">IPM Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTroy;