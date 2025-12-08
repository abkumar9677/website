import React from 'react';

const TechIcon = ({ icon: Icon, color, size = 'w-12 h-12' }) => {
  return (
    <div className={`${size} ${color} rounded-xl p-3 shadow-lg backdrop-blur-sm bg-opacity-80`}>
      {Icon && <Icon className="w-full h-full text-white" />}
    </div>
  );
};

export default TechIcon;