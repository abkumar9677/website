import React from "react";
import { Globe } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between mb-12">
      <div className="text-white text-2xl font-bold">
        Abhishek {/* <span className="text-orange-500"></span> */}
      </div>
      <div className="flex items-center gap-8">
        <a
          href="#"
          className="text-orange-500 font-medium hover:text-orange-400 transition"
        >
          Home
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          Skills
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          Experience
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          Contact
        </a>
        <button className="bg-orange-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-orange-600 transition flex items-center gap-2">
          <span>Download CV</span>
          <Globe className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
