import React from 'react';
import {  Phone, Mail, MapPin, Clock, Shield, Award, Users } from 'lucide-react';
import {services} from "../data/services"
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Constellation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="Orion Pest Control" className="h-12" />
                <div>
                  <h3 className="text-2xl font-bold">Orion Pest Control</h3>
                  <p className="text-blue-300">Your North Star for Pest Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                For over 15 years, Orion Pest Control has been the trusted choice for 
                homeowners seeking effective, safe, and environmentally conscious pest 
                control solutions.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">15+ Years</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">5000+ Customers</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-blue-300 mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">+1-408-929-5221</p>
                    <p className="text-sm text-slate-400">24/7 Emergency Service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>info@orionpestcontrol.com</p>
                    <p className="text-sm text-slate-400">Response within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Serving Greater Metro Area</p>
                    <p className="text-sm text-slate-400">Free service estimates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-slate-400">Mon-Fri: 8AM-6PM</p>
                    <p className="text-sm text-slate-400">Sat: 9AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-blue-300 mb-6">Our Services</h4>
              <div className="space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/service/${service.id}`}
                    className="block text-slate-300 hover:text-blue-300 transition-colors py-1"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm">
                © {currentYear} Orion Pest Control. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-slate-400 hover:text-blue-300 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-slate-400 hover:text-blue-300 transition-colors">
                  Terms of Service
                </a>
                <a href="#sitemap" className="text-slate-400 hover:text-blue-300 transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;