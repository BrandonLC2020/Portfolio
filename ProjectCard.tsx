/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const AiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="project-card-icon">
        <path d="M9 12h6" />
        <path d="M12 9v6" />
        <path d="M10.5 16.5a1.5 1.5 0 0 1-3 0" />
        <path d="M16.5 16.5a1.5 1.5 0 0 1-3 0" />
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 2a10 10 0 1 1-10 10" />
    </svg>
);

const DataIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="project-card-icon">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
);

const MobileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="project-card-icon">
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
    </svg>
);


// Renders a single project card in the grid.
export function ProjectCard({ project, onSelect }: ProjectCardProps) {
    const renderIcon = () => {
        switch (project.category) {
            case 'AI':
                return <AiIcon />;
            case 'Data':
                return <DataIcon />;
            case 'Mobile':
                return <MobileIcon />;
            default:
                return null;
        }
    };

  return (
    <div className="project-card" onClick={() => onSelect(project)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && onSelect(project)}>
      <div className="project-card-icon-container">
        {renderIcon()}
      </div>
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="project-tags">
          <span className="project-tag phase-tag">{project.phase}</span>
          {project.technologies.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
        </div>
      </div>
    </div>
  );
}