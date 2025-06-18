import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, CheckCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { services } from '../data/services';

const ServicesSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : <LucideIcons.Bug className="w-8 h-8" />;
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
            <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm">
              Professional Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Complete Pest Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From common household pests to complex infestations, our expert team provides 
            comprehensive solutions tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Service Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {getIcon(service.icon)}
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-blue-600/80 via-blue-600/40 to-transparent transition-opacity duration-300 ${
                  hoveredService === service.id ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Service Link */}
                <Link
                  to={`/service/${service.id}`}
                  className="inline-flex z-999 items-center space-x-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-blue-400 fill-current" />
              <span className="text-blue-300 font-semibold tracking-wide uppercase text-sm">
                Ready to Get Started?
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Free Inspection & Consultation
            </h3>
            <p className="text-xl text-slate-300 mb-8">
              Get a comprehensive property assessment and customized treatment plan 
              with no obligation. Our experts will identify current issues and prevention strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
              >
                Schedule Free Inspection
              </Link>
              <a
                href="tel:555-123-7378"
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 text-center"
              >
                Call +1-408-929-5221
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;