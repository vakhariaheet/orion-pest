import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Building, Home } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company?: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  image: string;
  type: 'residential' | 'commercial';
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Janice T.',
    title: 'Apartment Manager',
    location: 'Mountain View, California',
    rating: 5,
    text: 'Troy has provided exceptional service to our apartment buildings for four years, and we couldn\'t be happier. He is reliable, professional, and super quick to respond when I call.',
    service: 'Commercial Pest Control',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    type: 'commercial'
  },
  {
    id: '2',
    name: 'Michael R.',
    title: 'Homeowner',
    location: 'San Jose, California',
    rating: 5,
    text: 'Orion Pest Control solved our ant problem completely. Troy was thorough, explained everything clearly, and the results were immediate. We\'ve been pest-free for over a year now!',
    service: 'Ant Control',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    type: 'residential'
  },
  {
    id: '3',
    name: 'Sarah L.',
    title: 'Property Manager',
    company: 'Sunset Properties',
    location: 'Palo Alto, California',
    rating: 5,
    text: 'We manage over 200 units and Troy handles all our pest control needs. His preventative approach has significantly reduced tenant complaints. Highly recommend!',
    service: 'Property Management Services',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
    type: 'commercial'
  },
  {
    id: '4',
    name: 'David K.',
    title: 'Homeowner',
    location: 'Cupertino, California',
    rating: 5,
    text: 'Had a serious termite issue that other companies couldn\'t handle. Troy\'s expertise and advanced treatment methods saved our home. The warranty gives us peace of mind.',
    service: 'Termite Protection',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    type: 'residential'
  },
  {
    id: '5',
    name: 'Lisa M.',
    title: 'Restaurant Owner',
    company: 'Bella Vista Bistro',
    location: 'Los Altos, California',
    rating: 5,
    text: 'Running a restaurant means pest control is critical. Troy works around our schedule and keeps our establishment spotless. Professional, discreet, and effective.',
    service: 'Commercial Pest Control',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    type: 'commercial'
  },
  {
    id: '6',
    name: 'Jennifer W.',
    title: 'Homeowner',
    location: 'Sunnyvale, California',
    rating: 5,
    text: 'Discovered bed bugs after a vacation - nightmare! Troy responded immediately, even on a weekend. His heat treatment was thorough and we haven\'t seen a single bug since.',
    service: 'Bed Bug Treatment',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg',
    type: 'residential'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
      />
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Constellation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-blue-400 fill-current" />
            <span className="text-blue-300 font-semibold tracking-wide uppercase text-sm">
              Customer Reviews
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our pest control services.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Customer Image */}
              <div className="lg:col-span-1 text-center">
                <div className="relative inline-block">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-xl border-4 border-white/20"
                  />
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                    {currentTestimonial.type === 'commercial' ? (
                      <Building className="w-5 h-5 text-white" />
                    ) : (
                      <Home className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-white">{currentTestimonial.name}</h3>
                  <p className="text-blue-300 font-medium">{currentTestimonial.title}</p>
                  {currentTestimonial.company && (
                    <p className="text-slate-300 text-sm">{currentTestimonial.company}</p>
                  )}
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300 text-sm">{currentTestimonial.location}</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Quote className="w-12 h-12 text-blue-400/30 absolute -top-4 -left-2" />
                  <div className="pl-8">
                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(currentTestimonial.rating)}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 font-medium">
                      "{currentTestimonial.text}"
                    </blockquote>
                    <div className="bg-blue-600/20 rounded-lg px-4 py-2 inline-block">
                      <span className="text-blue-300 text-sm font-medium">
                        Service: {currentTestimonial.service}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">5.0</div>
            <div className="text-slate-300 text-sm">Average Rating</div>
            <div className="flex justify-center mt-1">
              {renderStars(5)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-slate-300 text-sm">Happy Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-slate-300 text-sm">Years Serving</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-slate-300 text-sm">Customer Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;