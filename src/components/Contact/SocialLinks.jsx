import React from "react";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/abkumar9677",
      color: "hover:bg-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/abkumar9677",
      color: "hover:bg-gray-700",
    },
    {
      icon: Twitter,
      label: "Twitter",
      link: "https://twitter.com",
      color: "hover:bg-sky-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://instagram.com",
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <div className="flex justify-center gap-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative p-4 bg-gray-800 rounded-xl transition-all hover:scale-110 ${social.color}`}
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 rounded-lg text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {social.label}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
