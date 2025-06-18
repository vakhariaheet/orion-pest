import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Shield, Star, Award, CheckCircle } from 'lucide-react';
import Slider1 from "../assets/slide1.jpg";
import Slider2 from "../assets/slide2.jpg";
import Slider3 from "../assets/slide3.jpg";
const slides = [
  {
    id: 1,
    title: "Professional Pest Control Solutions",
    subtitle: "Protecting Your Home & Family",
    description: "Experience the Orion difference with our comprehensive pest control services. We eliminate pests and prevent future infestations with safe, effective treatments.",
    image: Slider1,
    features: ["Licensed & Insured", "Eco-Friendly Solutions", "24/7 Support"],
    primaryAction: { text: "Get Free Inspection", link: "/contact" },
    secondaryAction: { text: "View Services", link: "/#services" }
  },
  {
    id: 2,
    title: "Advanced Termite Protection",
    subtitle: "Safeguard Your Investment",
    description: "Don't let termites destroy your most valuable asset. Our advanced detection and treatment systems provide comprehensive protection with industry-leading warranties.",
    image: Slider2,
    features: ["$1M Damage Protection", "Annual Inspections", "Guaranteed Results"],
    primaryAction: { text: "Schedule Inspection", link: "/contact" },
    secondaryAction: { text: "Learn About Termites", link: "/service/termites" }
  },
  {
    id: 3,
    title: "Complete Rodent Solutions",
    subtitle: "Effective & Humane Control",
    description: "From mice to rats, our expert team provides complete rodent elimination and exclusion services. We identify entry points and implement long-term prevention strategies.",
    image: Slider3,
    features: ["Exclusion Services", "Damage Prevention", "Ongoing Monitoring"],
    primaryAction: { text: "Get Quote", link: "/contact" },
    secondaryAction: { text: "Rodent Services", link: "/service/rats-mice" }
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSecondaryAction = (link: string) => {
    if (link.startsWith('/#')) {
      const element = document.getElementById(link.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Constellation Pattern */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 opacity-20">
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
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="mb-4 flex items-center space-x-2">
                  <Star className="w-6 h-6 text-blue-400 fill-current" />
                  <span className="text-blue-300 font-medium tracking-wide uppercase text-sm">
                    {slide.subtitle}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {slide.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-white text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={slide.primaryAction.link}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
                  >
                    {slide.primaryAction.text}
                  </Link>
                  {slide.secondaryAction.link.startsWith('/#') ? (
                    <button
                      onClick={() => handleSecondaryAction(slide.secondaryAction.link)}
                      className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                    >
                      {slide.secondaryAction.text}
                    </button>
                  ) : (
                    <Link
                      to={slide.secondaryAction.link}
                      className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
                    >
                      {slide.secondaryAction.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-500 scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col space-y-4">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
          <Shield className="w-5 h-5 text-blue-400" />
          <span className="text-white text-sm font-medium">Licensed & Insured</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
          <Award className="w-5 h-5 text-blue-400" />
          <span className="text-white text-sm font-medium">15+ Years Experience</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;