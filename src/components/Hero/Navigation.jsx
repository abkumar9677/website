import React from "react";
import { Download } from "lucide-react";

const Navigation = () => {
  const navLinks = [
    { label: "Home", href: "#home", isActive: true },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex items-center justify-between mb-12">
      <div className="text-white text-2xl font-bold">
        Abhishek {/* <span className="text-orange-500"></span> */}
      </div>
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`font-medium transition ${
              link.isActive
                ? "text-orange-500 hover:text-orange-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/Abhishek_Kumar_Resume.pdf"
          download="Abhishek_Kumar_Resume.pdf"
          className="bg-orange-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-orange-600 transition flex items-center gap-2"
        >
          <span>Download CV</span>
          <Download className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
