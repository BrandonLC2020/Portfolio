/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Project } from './types';

interface ProjectDetailProps {
    project: Project;
    onBack: () => void;
}

const GithubIcon = () => (
    <svg viewBox="0 0 16 16" version="1.1" aria-hidden="true">
        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
);

// Renders the detailed view of a selected project.
export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="project-detail" aria-live="polite">
      <div className="project-detail-header">
        <button onClick={onBack} className="back-btn" aria-label="Go back to portfolio">&larr; Back to Projects</button>
        <a href={project.githubUrl} className="github-btn" target="_blank" rel="noopener noreferrer">
            <GithubIcon/>
            View on GitHub
        </a>
      </div>
      <h2>{project.title}</h2>
      <div className="project-tags">
        <span className="project-tag phase-tag">{project.phase}</span>
        {project.technologies.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
      </div>
      <p>{project.longDescription}</p>
      <div className="project-detail-media">
        {project.videoUrl && (
          <>
            <h4>Screen Recording</h4>
            <div className="video-container">
              <iframe
                src={project.videoUrl}
                title={`Video for ${project.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </>
        )}
        {project.images && project.images.length > 0 && (
            <>
                <h4>Screenshots</h4>
                <div className="image-gallery">
                    <img key={project.imageUrl} src={project.imageUrl} alt={`Primary screenshot for ${project.title}`} />
                    {project.images.map((img, index) => (
                        <img key={index} src={img} alt={`Screenshot ${index + 1} for ${project.title}`} />
                    ))}
                </div>
            </>
        )}
      </div>
    </div>
  );
}