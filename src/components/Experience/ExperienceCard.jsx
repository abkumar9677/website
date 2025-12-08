import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const ExperienceCard = ({ experience, index, isVisible }) => {
  return (
    <div
      className={`relative transition-all duration-1000 transform ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : index % 2 === 0
          ? 'opacity-0 -translate-x-20'
          : 'opacity-0 translate-x-20'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`flex items-start gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Timeline dot */}
        <div className="relative flex-shrink-0">
          <div className="w-4 h-4 bg-orange-500 rounded-full ring-8 ring-orange-500 ring-opacity-20"></div>
          {index < 2 && (
            <div className="absolute top-4 left-1/2 w-0.5 h-32 bg-gradient-to-b from-orange-500 to-transparent -translate-x-1/2"></div>
          )}
        </div>

        {/* Card */}
        <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-orange-500 border-opacity-20 hover:border-opacity-50 transition-all hover:shadow-2xl hover:shadow-orange-500/20 group">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <Briefcase className="w-4 h-4" />
                <span className="font-medium">{experience.company}</span>
              </div>
            </div>
            <div className="bg-orange-500 bg-opacity-20 p-3 rounded-lg">
              <Briefcase className="w-6 h-6 text-orange-400" />
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Achievements */}
          <ul className="space-y-3">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <TrendingUp className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-sm leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>

          {/* Stats */}
          {experience.stats && (
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-700">
              {experience.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;