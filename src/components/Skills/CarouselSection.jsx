import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SkillCard3D from './SkillCard3D';

const CarouselSection = ({ title, skills, icon: Icon, color }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay || !isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [skills.length, autoPlay, isVisible]);

  const nextSlide = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const getPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(skills.length - 1)) return 'right';
    if (diff === -1 || diff === skills.length - 1) return 'left';
    if (diff === 2 || diff === -(skills.length - 2)) return 'far-right';
    if (diff === -2 || diff === skills.length - 2) return 'far-left';
    return 'hidden';
  };

  const getColorGradient = () => {
    const gradients = {
      blue: 'from-blue-500 to-cyan-500',
      green: 'from-green-500 to-emerald-500',
      purple: 'from-purple-500 to-pink-500',
      orange: 'from-orange-500 to-red-500',
      yellow: 'from-yellow-500 to-orange-500',
      indigo: 'from-indigo-500 to-purple-500',
      pink: 'from-pink-500 to-rose-500',
      gray: 'from-gray-500 to-slate-500',
    };
    return gradients[color] || gradients.blue;
  };

  return (
    <div
      ref={sectionRef}
      className={`relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className={`relative p-5 bg-gradient-to-r ${getColorGradient()} rounded-2xl shadow-2xl`}>
            <Icon className="w-10 h-10 text-white" />
            <div className={`absolute inset-0 bg-gradient-to-r ${getColorGradient()} rounded-2xl blur-xl opacity-50`}></div>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400">{skills.length} Technologies</p>
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="group p-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-orange-500 hover:to-red-500 rounded-xl transition-all hover:shadow-2xl hover:shadow-orange-500/50 border border-gray-700 hover:border-orange-500"
          >
            <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="group p-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-orange-500 hover:to-red-500 rounded-xl transition-all hover:shadow-2xl hover:shadow-orange-500/50 border border-gray-700 hover:border-orange-500"
          >
            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      {/* 3D Carousel Container */}
      <div className="relative h-[500px] mb-12" style={{ perspective: '1500px' }}>
        <div className="relative w-full h-full flex items-center justify-center">
          {skills.map((skill, index) => {
            const position = getPosition(index);
            if (position === 'hidden') return null;
            
            return (
              <SkillCard3D
                key={index}
                skill={skill}
                index={index}
                isCenter={position === 'center'}
                position={position}
              />
            );
          })}
        </div>
      </div>

      {/* Progress indicator dots */}
      <div className="flex justify-center gap-2">
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoPlay(false);
              setCurrentIndex(index);
            }}
            className={`transition-all rounded-full ${
              index === currentIndex
                ? 'w-12 h-3 bg-gradient-to-r from-orange-500 to-red-500'
                : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;