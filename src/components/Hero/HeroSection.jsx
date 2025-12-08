import React, { useState, useEffect } from "react";
import { Code, Palette, Database, Globe } from "lucide-react";
import Navigation from "./Navigation";
import FloatingIcon from "./FloatingIcon";
import TechIcon from "./TechIcon";
import StatCard from "./StatCard";
import TestimonialCard from "./TestimonialCard";
import characterImg from "../../assets/images/me.jpg";
// import flashImg from "../../assets/images/flashImg.png";

const HeroSection = () => {
//   const [showFlash, setShowFlash] = useState(false);
  const [showCharacter, setShowCharacter] = useState(false);

  useEffect(() => {
    // const flashTimer = setTimeout(() => setShowFlash(true), 500);
    const characterTimer = setTimeout(() => setShowCharacter(true), 800);

    return () => {
    //   clearTimeout(flashTimer);
      clearTimeout(characterTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900  to-gray-900 overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.8); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <Navigation />

        <div className="grid grid-cols-2 gap-12 items-center mt-16 relative">
          <div className="space-y-6 z-10">
            <div className="space-y-2">
              <p className="text-orange-500 text-lg">Hey, I am Naeeb</p>
              <h1 className="text-6xl font-bold text-white leading-tight">
                Web developer
              </h1>
              <p className="text-gray-400 text-lg max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                viverra risus vel tortor pretium dignissim.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-orange-500 px-8 py-3 rounded-full text-white font-medium hover:bg-orange-600 transition shadow-lg hover:shadow-xl">
                Hire Me
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full text-white font-medium hover:bg-white hover:text-gray-900 transition">
                Projects
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 max-w-md">
              <StatCard label="Years Experience" value="5+" />
              <StatCard label="Projects Completed" value="50+" />
            </div>

            <div className="mt-8">
              <TestimonialCard />
            </div>
          </div>

          <div className="relative h-[600px]">
            <div
              className={`absolute right-0 bottom-0 w-[500px] h-[550px] z-30 transition-all duration-1000 ${
                showCharacter
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <img
                src={characterImg}
                alt="Developer Character"
                className="w-full h-auto object-contain rounded-full"
              />
            </div>

            {/* <FloatingIcon delay={500} position="top-10 left-0">
              <div
                className={`text-8xl transition-all rounded-full duration-700 ${
                  showFlash ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
                }`}
                style={{
                  animation: showFlash ? "pulse-glow 2s infinite" : "none",
                }}
              >
                <img src={flashImg} alt="Flash" className="w-16 h-16 rounded-full" />
              </div>
            </FloatingIcon> */}

            {/* <FloatingIcon delay={1000} position="top-32 right-20">
              <img src={flashImg} alt="Flash" className="w-24 h-24 rou" />
            </FloatingIcon> */}

            <FloatingIcon delay={1200} position="top-20 right-4 z-40">
              <TechIcon icon={Code} color="bg-blue-500" />
            </FloatingIcon>

            <FloatingIcon delay={1400} position="top-60 left-10 z-40">
              <TechIcon icon={Palette} color="bg-pink-500" />
            </FloatingIcon>

            <FloatingIcon delay={1600} position="bottom-40 left-20 z-40">
              <TechIcon icon={Database} color="bg-green-500" />
            </FloatingIcon>

            <FloatingIcon delay={1800} position="top-80 pt-20 right-10 z-40">
              <TechIcon icon={Globe} color="bg-purple-500" size="w-10 h-10" />
            </FloatingIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
