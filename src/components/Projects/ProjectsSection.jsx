import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const canvasRef = useRef(null);
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = [
    {
      title: 'RESELLER OS',
      type: 'SaaS',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Full-stack B2B SaaS platform automating quotes, deal registration, and order lifecycle management with integrated AI capabilities.',
      highlights: [
        'Built comprehensive B2B SaaS platform with Next.js App Router and TypeScript',
        'Integrated Salesforce workflows for partner onboarding and deal tracking',
        'Utilized Azure AI model for automated data extraction from quote files',
        'Developed Electron.js app with LLM for vendor form automation',
      ],
      technologies: ['Next.js', 'TypeScript', 'Redux', 'Express.js', 'PostgreSQL', 'Azure', 'Electron.js', 'LangChain'],
      metrics: [
        { value: '35%', label: 'Time Saved' },
        { value: '40%', label: 'Efficiency Gain' },
        { value: '99.9%', label: 'Uptime' },
      ],
      status: 'Production',
      team: 'Lead Developer',
    },
    {
      title: 'CX POINT',
      type: 'IVR',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Enterprise communication platform with interactive IVR flow diagrams, bulk file processing, and Genesys AppFoundry integration.',
      highlights: [
        'Developed bulk file upload functionality across all modules',
        'Created interactive IVR flow diagrams with React Flow and D3.js',
        'Standardized state management using React Context API',
        'Integrated Genesys AppFoundry for seamless communication',
      ],
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Context API', 'D3.js', 'React Flow', 'Microfrontend'],
      metrics: [
        { value: '15%', label: 'Call Time Reduced' },
        { value: '20%', label: 'Reusability Boost' },
        { value: '20%', label: 'Response Time' },
      ],
      status: 'Production',
      team: 'Full Stack Dev',
    },
    {
      title: 'FANTASY7',
      type: 'Betting',
      gradient: 'from-orange-500 to-red-500',
      description: 'Real-time sports betting interface with sub-millisecond latency, handling thousands of dynamic bets with Betfair API integration.',
      highlights: [
        'Orchestrated real-time sports betting interface with Next.js and TypeScript',
        'Achieved sub-0.05s latency for bet updates with optimized architecture',
        'Centralized state management with Zustand and React Query',
        'Peak performance of 1200 data synchronizations per second',
      ],
      technologies: ['Next.js', 'TypeScript', 'Ant Design', 'Zustand', 'React Query', 'Betfair API'],
      metrics: [
        { value: '<0.05s', label: 'Latency' },
        { value: '1200/s', label: 'Sync Rate' },
        { value: '20%', label: 'Reliability' },
      ],
      status: 'Production',
      team: 'Frontend Lead',
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

    // Create floating code blocks
    const codeBlocks = [];
    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.05 + Math.random() * 0.1, 1, 0.5),
        transparent: true,
        opacity: 0.6,
      });
      const cube = new THREE.Mesh(geometry, material);
      
      cube.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      );
      
      cube.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.5 + 0.5,
      };
      
      codeBlocks.push(cube);
      scene.add(cube);
    }

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
      time += 0.01;

      codeBlocks.forEach((cube, index) => {
        cube.rotation.x += cube.userData.rotationSpeed.x;
        cube.rotation.y += cube.userData.rotationSpeed.y;
        cube.position.y += Math.sin(time + index) * 0.005;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleProjects((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    setTimeout(() => {
      document.querySelectorAll('.project-card').forEach((card) => {
        observer.observe(card);
      });
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden py-20">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-lg shadow-orange-500/50">
              PORTFOLIO
            </span>
          </div>
          <h2 className="text-7xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Transforming ideas into scalable, high-performance applications that drive real business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-index={index}
            >
              <ProjectCard
                project={project}
                index={index}
                isVisible={visibleProjects.includes(index)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-orange-500 border-opacity-30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center gap-3 mx-auto">
              Let's Talk
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;