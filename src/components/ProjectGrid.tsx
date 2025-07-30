/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import Grid from '@mui/material/Grid';

interface ProjectGridProps {
    projects: Project[];
    onSelectProject: (project: Project) => void;
}

// Renders the grid of all project cards.
export function ProjectGrid({ projects, onSelectProject }: ProjectGridProps) {
  return (
    <Grid container spacing={3}>
      {projects.map(project => (
        <Grid item key={project.id} xs={12} md={6}>
          <ProjectCard project={project} onSelect={onSelectProject} />
        </Grid>
      ))}
    </Grid>
  );
}