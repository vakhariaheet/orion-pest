import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AboutTroy from '../components/AboutTroy';
import TeamSection from '../components/TeamSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <AboutTroy />
      <ServicesSection />
      <TestimonialsSection/>
      <TeamSection />
    </div>
  );
};

export default HomePage;