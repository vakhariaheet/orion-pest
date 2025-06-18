import React, { useState } from 'react';
import { Star, Award, Users } from 'lucide-react';
import { teamMembers } from '../data/team';

const TeamSection: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <section id="team" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
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
            <Users className="w-6 h-6 text-blue-400" />
            <span className="text-blue-300 font-semibold tracking-wide uppercase text-sm">
              Our Expert Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet the Orion Team
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our experienced professionals are dedicated to providing exceptional service 
            and building lasting relationships with every customer.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Founder Badge */}
                  {member.isFounder && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Founder</span>
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-300 font-medium mb-3">{member.title}</p>
                  
                  {/* Bio */}
                  <div className="flex-grow">
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-8">
                      {member.bio}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.slice(0, 2).map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent rounded-2xl transition-opacity duration-300 ${
                  hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <Award className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-slate-300 text-sm">Combined Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-slate-300 text-sm">Licensed Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-slate-300 text-sm">Emergency Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">5000+</div>
            <div className="text-slate-300 text-sm">Satisfied Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;