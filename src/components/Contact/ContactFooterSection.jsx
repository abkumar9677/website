import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, 
  Instagram, ExternalLink, MessageSquare, ArrowUp,
  Code, Coffee, Heart, Sparkles
} from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isFocused, setIsFocused] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setIsFocused({ ...isFocused, name: true })}
            onBlur={() => setIsFocused({ ...isFocused, name: false })}
            className="w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all"
            placeholder="Your Name"
          />
          {isFocused.name && (
            <div className="absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"></div>
          )}
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setIsFocused({ ...isFocused, email: true })}
            onBlur={() => setIsFocused({ ...isFocused, email: false })}
            className="w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all"
            placeholder="Your Email"
          />
          {isFocused.email && (
            <div className="absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"></div>
          )}
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => setIsFocused({ ...isFocused, subject: true })}
          onBlur={() => setIsFocused({ ...isFocused, subject: false })}
          className="w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all"
          placeholder="Subject"
        />
        {isFocused.subject && (
          <div className="absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"></div>
        )}
      </div>

      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setIsFocused({ ...isFocused, message: true })}
          onBlur={() => setIsFocused({ ...isFocused, message: false })}
          rows="6"
          className="w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all resize-none"
          placeholder="Your Message"
        ></textarea>
        {isFocused.message && (
          <div className="absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"></div>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center justify-center gap-3 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-xl text-green-400 flex items-center gap-3">
          <Sparkles className="w-5 h-5" />
          <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
      )}
    </div>
  );
};

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhi967792@gmail.com',
      link: 'mailto:abhi967792@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7266022294',
      link: 'tel:+917266022294',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Noida, Uttar Pradesh, India',
      link: 'https://maps.google.com/?q=Noida,UP',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="space-y-6">
      {contactDetails.map((detail, index) => (
        <a
          key={index}
          href={detail.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-orange-500 transition-all hover:shadow-2xl hover:shadow-orange-500/20">
            <div className="flex items-center gap-4">
              <div className={`relative p-4 bg-gradient-to-r ${detail.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                <detail.icon className="w-6 h-6 text-white" />
                <div className={`absolute inset-0 bg-gradient-to-r ${detail.gradient} rounded-xl blur-lg opacity-50`}></div>
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm mb-1">{detail.label}</p>
                <p className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors">
                  {detail.value}
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

const SocialLinks = () => {
  const socials = [
    { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com/in/abkumar9677', color: 'hover:bg-blue-600' },
    { icon: Github, label: 'GitHub', link: 'https://github.com/abkumar9677', color: 'hover:bg-gray-700' },
    { icon: Twitter, label: 'Twitter', link: 'https://twitter.com', color: 'hover:bg-sky-500' },
    { icon: Instagram, label: 'Instagram', link: 'https://instagram.com', color: 'hover:bg-pink-600' },
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

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl shadow-orange-500/50 hover:scale-110 transition-all z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-white" />
    </button>
  );
};

const ContactFooterSection = () => {
  const canvasRef = useRef(null);

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

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

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

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff6b35, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      particles.rotation.y = time * 0.2;
      particles.rotation.x = Math.sin(time) * 0.1;

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
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-lg shadow-orange-500/50">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-7xl font-bold mb-6">
            <span className="text-white">Let's Work </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
              Together
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 border-2 border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-orange-400" />
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>
              <ContactForm />
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <ContactInfo />
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-6 border-2 border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {['About', 'Experience', 'Skills', 'Projects'].map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.toLowerCase()}`}
                    className="px-4 py-3 bg-gray-800 rounded-xl text-gray-300 hover:text-orange-400 hover:bg-gray-700 transition-all text-center"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Abhishek<span className="text-orange-500">.</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Full-stack developer crafting exceptional digital experiences with modern technologies.
              </p>
              <SocialLinks />
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Navigation</h4>
              <ul className="space-y-2">
                {['Home', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-orange-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Subscribe to get notified about my latest projects and articles.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and <Coffee className="w-4 h-4 text-orange-400" /> using <Code className="w-4 h-4 text-blue-400" /> React & Three.js
              </p>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Abhishek Kumar. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default ContactFooterSection;