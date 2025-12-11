import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const SkillCard3D = ({ skill, index, isCenter, position }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getTransform = () => {
    if (isCenter) {
      return 'translateX(0%) scale(1.1) rotateY(0deg)';
    }
    if (position === 'left') {
      return 'translateX(-120%) scale(0.85) rotateY(25deg)';
    }
    if (position === 'right') {
      return 'translateX(120%) scale(0.85) rotateY(-25deg)';
    }
    if (position === 'far-left') {
      return 'translateX(-240%) scale(0.7) rotateY(35deg)';
    }
    if (position === 'far-right') {
      return 'translateX(240%) scale(0.7) rotateY(-35deg)';
    }
    return 'translateX(0) scale(0.5)';
  };

  const getOpacity = () => {
    if (isCenter) return 1;
    if (position === 'left' || position === 'right') return 0.7;
    return 0.4;
  };

  return (
    <div
      className="absolute transition-all duration-700 ease-out cursor-pointer"
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        zIndex: isCenter ? 50 : position === 'left' || position === 'right' ? 30 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-72 h-96 ${isCenter ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Outer glow */}
        <div className={`absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl blur-2xl transition-opacity duration-500 ${
          isHovered && isCenter ? 'opacity-60' : 'opacity-20'
        }`}></div>
        
        {/* Main card */}
        <div className={`relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
          isCenter ? 'border-orange-500' : 'border-gray-700'
        }`}>
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 transition-opacity duration-500 ${
            isHovered && isCenter ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          ></div>
          
          {/* Shine sweep effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-1000 ${
            isHovered && isCenter ? 'opacity-20 translate-x-full' : '-translate-x-full'
          }`}></div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-8 z-10">
            {/* Icon with hover animation */}
            <div className={`mb-6 transition-transform duration-500 ${
              isHovered && isCenter ? 'scale-110 rotate-12' : 'scale-100'
            }`}>
              <div className="relative">
                <div className={`absolute inset-0 bg-orange-500 rounded-2xl blur-xl transition-opacity ${
                  isHovered && isCenter ? 'opacity-50' : 'opacity-0'
                }`}></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            {/* Skill name */}
            <h3 className={`text-3xl font-bold text-center mb-4 transition-all duration-500 ${
              isCenter ? 'text-white' : 'text-gray-500'
            }`}>
              {skill}
            </h3>
            
            {/* Decorative divider lines */}
            <div className="flex gap-2 mb-6">
              <div className={`h-1 rounded-full transition-all duration-500 ${
                isCenter ? 'w-12 bg-orange-500' : 'w-8 bg-gray-600'
              }`}></div>
              <div className={`h-1 rounded-full transition-all duration-500 ${
                isCenter ? 'w-8 bg-red-500' : 'w-6 bg-gray-600'
              }`}></div>
              <div className={`h-1 rounded-full transition-all duration-500 ${
                isCenter ? 'w-4 bg-pink-500' : 'w-4 bg-gray-600'
              }`}></div>
            </div>
            
            {/* Proficiency bar (only on center card) */}
            {isCenter && (
              <div className="w-full">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Proficiency</span>
                  <span>Expert</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full animate-pulse"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
            )}
            
            {/* Floating particles on hover */}
            {isCenter && isHovered && (
              <>
                <div className="absolute top-10 left-10 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                <div className="absolute top-20 right-10 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute bottom-20 left-20 w-2 h-2 bg-pink-500 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
              </>
            )}
          </div>
          
          {/* Corner accent borders */}
          {isCenter && (
            <>
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-orange-500 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-orange-500 rounded-br-3xl"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard3D;