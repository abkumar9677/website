import React, { useState, useEffect } from 'react';

const FloatingIcon = ({ children, delay, position }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`absolute ${position} transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10'
      }`}
      style={{
        animation: isVisible ? 'float 3s ease-in-out infinite' : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default FloatingIcon;