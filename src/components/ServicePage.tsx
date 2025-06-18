import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, Shield, Phone, Award } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { services } from '../data/services';

const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Service not found</h1>
          <Link to="/" className="text-blue-700 hover:text-blue-800">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="w-12 h-12" /> : <LucideIcons.Bug className="w-12 h-12" />;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        
        {/* Constellation Pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random()}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center space-x-4 mb-6">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-xl">
                {getIcon(service.icon)}
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2">
                  {service.name}
                </h1>
                <p className="text-xl text-blue-200">
                  Professional & Guaranteed Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Service Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-blue-700" />
                  <span className="font-semibold text-blue-800">Our Guarantee</span>
                </div>
                <p className="text-blue-700">{service.guarantee}</p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-slate-700 leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-blue-400 fill-current" />
                <span className="text-blue-300 font-semibold">Get Started Today</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Free Inspection</h3>
              <p className="text-slate-300 mb-6">
                Get a comprehensive assessment and customized treatment plan at no cost.
              </p>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg text-center"
                >
                  Schedule Inspection
                </Link>
                <a
                  href="tel:555-123-7378"
                  className="w-full border-2 border-blue-500 text-blue-400 py-3 px-6 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1-408-929-5221</span>
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Why Choose Orion?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">15+ Years Experience</p>
                    <p className="text-sm text-slate-600">Proven track record of success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Licensed & Insured</p>
                    <p className="text-sm text-slate-600">Full protection for your property</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Satisfaction Guaranteed</p>
                    <p className="text-sm text-slate-600">We stand behind our work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">Emergency Service</h3>
              <p className="text-red-700 text-sm mb-4">
                Need immediate assistance? We're available 24/7 for emergency situations.
              </p>
              <a
                href="tel:555-123-7378"
                className="block w-full bg-red-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-red-700 transition-colors text-center"
              >
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;