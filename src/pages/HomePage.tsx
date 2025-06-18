import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AboutTroy from '../components/AboutTroy';
import TeamSection from '../components/TeamSection';
import ServicesSection from '../components/ServicesSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <AboutTroy />
      <ServicesSection />
      <TeamSection />
    </div>
  );
};

export default HomePage;