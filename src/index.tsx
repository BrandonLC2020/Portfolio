/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import {
  Box,
  Grid,
  Container,
  CssBaseline,
  Typography,
  Avatar,
} from '@mui/material';

import { theme } from './theme';
import { PROJECTS } from './data';
import { Project } from './types';
import { ProjectDetail } from './components/ProjectDetail';
import { ProjectGrid } from './components/ProjectGrid';
import { FilterControls } from './components/FilterControls';
import { Header } from './components/Header';
import { ProjectPhases } from './components/ProjectPhases';
import { AboutMe } from './components/AboutMe';

function App() {
  const greeting = 'Welcome to my developer portfolio! Here you can explore my projects and learn more about my work as a passionate software engineer. You can also click on my profile picture to the right and learn more about me and my journey in the tech world.';
  const [view, setView] = useState<'grid' | 'project' | 'about'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

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
            <Box sx={{ textAlign: 'center', my: 4, borderBottom: 1, borderColor: 'divider', pb: 2 }}>
              <Grid direction='row' container justifyContent='center' alignItems='center' sx={{ mb: 4 }}>
                <Grid item xs>
                  <Box>
                    <Typography variant="h1" component="h1" gutterBottom>
                        My Projects
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ minHeight: '2.5rem' }}>
                        {greeting}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm="auto">
                    {/* The user's profile picture */}
                    <Avatar
                        onClick={() => setView('about')}
                        alt="Profile"
                        src="./images/Personal Portrait.jpg"
                        sx={{ width: 150, height: 150, bgcolor: 'primary.main', border: '3px solid', borderColor: 'secondary.main' }}
                    />
                  </Grid>
              </Grid>
            </Box>
            <ProjectPhases projects={PROJECTS} />
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
      <Container component="main" maxWidth="lg" sx={{ pt: { xs: '56px', sm: '64px' }, my: 4 }}>
        {renderContent()}
      </Container>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);