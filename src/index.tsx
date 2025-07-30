/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { GoogleGenAI } from '@google/genai';
import { useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { theme } from './theme';
import { PROJECTS } from './data';
import { Project } from './types';
import { ProjectDetail } from './components/ProjectDetail';
import { ProjectGrid } from './components/ProjectGrid';
import { FilterControls } from './components/FilterControls';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';

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
    window.scrollTo(0, 0);
  };

  const handleNavigate = (targetView: 'grid' | 'about') => {
    setView(targetView);
    window.scrollTo(0, 0);
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
            <Box sx={{ textAlign: 'center', my: 4, borderBottom: 1, borderColor: 'divider', pb: 3 }}>
              <Typography variant="h1" component="h1" gutterBottom>
                  My Projects
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ minHeight: '2.5rem' }}>
                  {greeting || 'Loading a welcome message...'}
              </Typography>
            </Box>
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        onNavigate={handleNavigate}
        onSelectProject={handleSelectProject}
      />
      {/* Adjust pt to account for responsive AppBar height */}
      <Container component="main" maxWidth="lg" sx={{ pt: { xs: '56px', sm: '64px' }, my: 4 }}>
        {renderContent()}
      </Container>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);