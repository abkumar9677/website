import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, TrendingUp, Users, Zap, Database, Cloud, Code } from 'lucide-react';

const ProjectCard = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const getProjectIcon = (type) => {
    const icons = {
      'SaaS': Cloud,
      'IVR': Database,
      'Betting': Zap,
    };
    return icons[type] || Code;
  };

  const Icon = getProjectIcon(project.type);

  return (
    <div
      className={`relative transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl transition-opacity duration-500 ${
        isHovered ? 'opacity-60' : 'opacity-20'
      }`}></div>

      {/* Main card */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden border-2 border-gray-700 hover:border-orange-500 transition-all">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: isHovered ? 'grid-move 20s linear infinite' : 'none',
          }}
        ></div>

        <style>{`
          @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
          }
        `}</style>

        {/* Project header with icon */}
        <div className="relative p-8 pb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`relative p-4 bg-gradient-to-r ${project.gradient} rounded-2xl shadow-2xl transform transition-transform ${
                isHovered ? 'scale-110 rotate-6' : 'scale-100'
              }`}>
                <Icon className="w-8 h-8 text-white" />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-50`}></div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.type} Platform</p>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-2">
              <button className="p-3 bg-gray-800 hover:bg-orange-500 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/50 group">
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </button>
              <button className="p-3 bg-gray-800 hover:bg-orange-500 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/50 group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-gray-700">
            {['overview', 'tech', 'impact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium transition-all relative ${
                  activeTab === tab
                    ? 'text-orange-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="min-h-[200px]">
            {activeTab === 'overview' && (
              <div className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <Sparkles className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-orange-500 border-opacity-30 rounded-lg text-sm font-medium text-orange-400 hover:bg-opacity-20 hover:border-opacity-50 transition-all hover:scale-105 cursor-default`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'impact' && (
              <div className="grid grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-center border border-gray-700 hover:border-orange-500 transition-all group"
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                      {metric.value}
                    </div>
                    <div className="text-gray-400 text-xs">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom section with CTA */}
        <div className={`relative p-6 bg-gradient-to-r ${project.gradient} bg-opacity-5 border-t border-gray-700`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>{project.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{project.team}</span>
              </div>
            </div>
            <button className={`px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center gap-2`}>
              View Details
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;