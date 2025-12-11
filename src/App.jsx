import React from 'react';
import { HeroSection } from './components/Hero';
import './index.css';
import { ExperienceSection } from './components/Experience';
import { SkillsSection } from './components/Skills';
import { ProjectsSection } from './components/Projects';
import { ContactFooterSection } from './components/Contact';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactFooterSection />
    </div>
  );
}

export default App;