import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ExperienceCard from "./ExperienceCard";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  const experiences = [
    {
      title: "Developer-2 Full Stack",
      company: "Cloud Analogy",
      location: "Noida, U.P.",
      duration: "01/2023 - Present",
      achievements: [
        "Developed end-to-end construction of resilient applications using MERN stack architecture, accelerating system performance by 30% and boosting user engagement metrics",
        "Completed 8+ projects across diverse industries, including betting, financial services, hiring, travel, and tourism, achieving a 95% client satisfaction rate",
        "Pinpointed and rectified critical software defects, slashing bug resolution time by 40% and boosting user satisfaction ratings by 15%",
        "Guided the full spectrum of development cycles with Agile methodology and DevOps principles with CI/CD pipelines",
      ],
      stats: [
        { value: "8+", label: "Projects" },
        { value: "30%", label: "Performance Boost" },
        { value: "95%", label: "Client Satisfaction" },
      ],
    },
    {
      title: "Full Stack Developer",
      company: "ForceBolt",
      location: "Mohali, Punjab",
      duration: "02/2022 - 01/2023",
      achievements: [
        "Overhauled front-end architecture, leading to a 40% increase in website speed and a 20% improvement in Core Web Vitals score",
        "Achieved a 98% rating on Google PageSpeed Insights",
        "Developed fast and scalable web systems using RESTful APIs, minimizing manual effort by 80% and streamlining workflows",
      ],
      stats: [
        { value: "40%", label: "Speed Increase" },
        { value: "98%", label: "PageSpeed Score" },
        { value: "80%", label: "Effort Reduced" },
      ],
    },
    {
      title: "Business Automation & Web Developer",
      company: "DigiGrowHub",
      location: "Pune, Maharashtra",
      duration: "07/2021 - 12/2021",
      achievements: [
        "Automated lead qualification processes leveraging Google Apps Script, leading to a 25% reduction in processing time",
        "Created a Google Sheets automation system for accurate and efficient processing, cutting down 80% of manual effort",
        "Improved lead management efficiency by 10%",
      ],
      stats: [
        { value: "25%", label: "Time Saved" },
        { value: "80%", label: "Manual Work Cut" },
        { value: "10%", label: "Efficiency Gain" },
      ],
    },
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xff6b35,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Create geometric shapes
    const shapes = [];
    const geometries = [
      new THREE.TorusGeometry(0.3, 0.1, 16, 100),
      new THREE.OctahedronGeometry(0.3),
      new THREE.IcosahedronGeometry(0.3),
    ];

    geometries.forEach((geometry, index) => {
      const material = new THREE.MeshPhongMaterial({
        color: 0xff6b35,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 2
      );
      shapes.push(mesh);
      scene.add(mesh);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff6b35, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Animation
    let scrollY = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x = scrollY * 0.0001;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
        shape.position.y = Math.sin(Date.now() * 0.001 + index) * 0.5;
      });

      // Camera movement based on scroll
      camera.position.y = -scrollY * 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle scroll
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Intersection Observer for cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".experience-card").forEach((card) => {
      observer.observe(card);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900  to-gray-900 overflow-hidden">
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4">
            Work <span className="text-orange-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey through innovation, problem-solving, and delivering
            exceptional results across diverse industries
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card" data-index={index}>
              <ExperienceCard
                experience={experience}
                index={index}
                isVisible={visibleCards.includes(index)}
              />
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4", label: "Years Experience" },
            { value: "15+", label: "Projects Completed" },
            { value: "6+", label: "Industries Served" },
            { value: "95%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-6 text-center border border-orange-500 border-opacity-20 hover:border-opacity-50 transition"
            >
              <div className="text-4xl font-bold text-orange-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
