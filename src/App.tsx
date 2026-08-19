/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Playground } from './components/Playground';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToProjects = () => {
    setActiveSection('projects');
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      <main>
        <Hero onExploreClick={scrollToProjects} />
        <Projects />
        <About />
        <Blog />
        <Playground />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
