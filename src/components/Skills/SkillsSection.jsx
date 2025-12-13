import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Code, Server, Database, Cloud } from 'lucide-react';
import CarouselSection from './CarouselSection';

const SkillsSection = () => {
  const canvasRef = useRef(null);

  const skillsData = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'blue',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'green',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Web Services'],
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'purple',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Sequelize', 'SQL Server'],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'orange',
      skills: ['Docker', 'AWS', 'Azure', 'CI/CD', 'GitHub Actions'],
    },
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Orbiting particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 50;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const color = new THREE.Color();
      color.setHSL(0.05 + Math.random() * 0.1, 1, 0.5);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff6b35, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      particles.rotation.y = time * 0.3;
      particles.rotation.x = Math.sin(time) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden py-20">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-lg shadow-orange-500/50">
              TECH STACK
            </span>
          </div>
          <h2 className="text-7xl font-bold mb-6">
            <span className="text-white">Technical </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
              Arsenal
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Cutting-edge technologies powering exceptional digital experiences
          </p>
        </div>

        <div className="space-y-32">
          {skillsData.map((category, index) => (
            <CarouselSection key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;