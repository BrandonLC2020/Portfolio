/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { GoogleGenAI } from '@google/genai';
import { useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';

import { PROJECTS } from './data';
import { Project } from './types';
import { ProjectDetail } from './ProjectDetail';
import { ProjectGrid } from './ProjectGrid';
import { FilterControls } from './FilterControls';
import { Header } from './Header';
import { AboutMe } from './AboutMe';

function App() {
  const [greeting, setGreeting] = useState('');
  const [view, setView] = useState<'grid' | 'project' | 'about'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    // This effect runs only once on mount to fetch the greeting.
    const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
    const generateGreeting = async () => {
      try {
        const response = await ai.models.generateContentStream({
          model: 'gemini-2.5-flash',
          contents: 'Write a short, welcoming, and professional greeting for a software developer\'s portfolio website. Include a single, relevant emoji like 👨‍💻 or ✨.',
        });

        let fullGreeting = '';
        for await (const chunk of response) {
          fullGreeting += chunk.text;
        }
        setGreeting(fullGreeting);
      } catch(error) {
        console.error("Failed to fetch greeting:", error);
        setGreeting("Welcome to my portfolio! ✨"); // Fallback greeting
      }
    };
    generateGreeting();
  }, []);

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    PROJECTS.forEach(p => p.technologies.forEach(t => techSet.add(t)));
    return Array.from(techSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter(p => p.technologies.includes(activeFilter));
  }, [activeFilter]);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setView('project');
  };

  const handleNavigate = (targetView: 'grid' | 'about') => {
    setView(targetView);
  };

  const renderContent = () => {
    switch (view) {
      case 'project':
        return <ProjectDetail project={selectedProject!} onBack={() => {
          setSelectedProject(null);
          setView('grid');
        }} />;
      case 'about':
        return <AboutMe onBack={() => setView('grid')} />;
      case 'grid':
      default:
        return (
          <>
            <header className="portfolio-header">
              <h1>My Projects</h1>
              <p>{greeting || 'Loading a welcome message...'}</p>
            </header>
            <FilterControls
              technologies={allTechnologies}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            <ProjectGrid projects={filteredProjects} onSelectProject={handleSelectProject} />
          </>
        );
    }
  };

  return (
    <>
      <Header
        onNavigate={handleNavigate}
        onSelectProject={handleSelectProject}
      />
      <main className="main-content-wrapper">
        {renderContent()}
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
