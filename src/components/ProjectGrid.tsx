/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
    projects: Project[];
    onSelectProject: (project: Project) => void;
}

// Renders the grid of all project cards.
export function ProjectGrid({ projects, onSelectProject }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project: Project) => (
        <ProjectCard project={project} onSelect={onSelectProject}/>
      ))}
    </div>
  );
}