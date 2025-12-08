import React from 'react';
import { HeroSection } from './components/Hero';
import './index.css';
import { ExperienceSection } from './components/Experience';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ExperienceSection />
    </div>
  );
}

export default App;