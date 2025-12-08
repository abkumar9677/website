import React from 'react';

const StatCard = ({ label, value }) => {
  return (
    <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-4 border border-orange-500 border-opacity-30">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;