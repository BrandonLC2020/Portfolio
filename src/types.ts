/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// Defines the possible development phases for a project.
export type ProjectPhase = 'Planning & Requirements Analysis' | 'Design' | 'Implementation' | 'Testing' | 'Deployment' | 'Maintenance & Support';

// Defines the structure for a single project.
export interface Project {
  id: number;
  cardIcon: React.ElementType | string; // Icon or image URL for the card
  title: string;
  inspiration: string;
  shortDescription: string;
  longDescription:string;
  technologies: string[];
  images?: string[];
  video?: string;
  phase: ProjectPhase;
  phaseDescription?: string;
  githubUrl: string;
}