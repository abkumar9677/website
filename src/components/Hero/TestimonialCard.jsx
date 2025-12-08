import React from 'react';

const TestimonialCard = () => {
  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-5 border border-orange-500 border-opacity-20 max-w-xs">
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        "I enjoyed the way he got started with an idea, understood everything and never said it's
        hard work."
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">N</span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Abhishek Kumar</p>
          <p className="text-gray-400 text-xs">Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;