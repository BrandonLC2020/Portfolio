/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// Defines the possible development phases for a project.
export type ProjectPhase = 'MVP' | 'In Development' | 'Planning Phase' | 'Completed';

// Defines the possible categories for a project.
export type ProjectCategory = 'AI' | 'Data' | 'Mobile';

// Defines the structure for a single project.
export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription:string;
  technologies: string[];
  imageUrl: string;
  images: string[];
  videoUrl:string;
  phase: ProjectPhase;
  category: ProjectCategory;
  githubUrl: string;
}