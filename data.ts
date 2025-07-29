/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Project } from './types';

// Mock data for the portfolio projects.
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI Story Generator',
    shortDescription: 'A web app that uses generative AI to write and illustrate children\'s stories.',
    longDescription: 'This application leverages a large language model to generate age-appropriate stories based on user prompts. It also integrates with an image generation API to create illustrations for key scenes, providing a complete, multimedia storytelling experience. The frontend is built with React and the backend with Node.js.',
    technologies: ['React', 'Node.js', 'TypeScript', 'Gemini API'],
    imageUrl: 'https://storage.googleapis.com/maker-suite-images/AI_story_generator.png',
    images: [
        'https://storage.googleapis.com/maker-suite-images/AI_story_generator_2.png',
        'https://storage.googleapis.com/maker-suite-images/AI_story_generator_3.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    phase: 'Completed',
    category: 'AI',
    githubUrl: 'https://github.com/example/ai-story-generator',
  },
  {
    id: 2,
    title: 'E-commerce Analytics Dashboard',
    shortDescription: 'A real-time dashboard for visualizing sales data and customer behavior.',
    longDescription: 'This project provides a comprehensive analytics solution for e-commerce businesses. It features real-time data ingestion, processing, and visualization. Key metrics include sales trends, top-selling products, customer segmentation, and conversion funnel analysis. Built with Python (Flask) for the backend and React for the interactive frontend.',
    technologies: ['React', 'Python', 'Flask', 'D3.js'],
    imageUrl: 'https://storage.googleapis.com/maker-suite-images/ecommerce_dashboard.png',
    images: [
        'https://storage.googleapis.com/maker-suite-images/ecommerce_dashboard_2.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    phase: 'MVP',
    category: 'Data',
    githubUrl: 'https://github.com/example/analytics-dashboard',
  },
  {
    id: 3,
    title: 'Mobile Fitness Tracker',
    shortDescription: 'A cross-platform mobile app to track workouts, nutrition, and progress.',
    longDescription: 'A React Native application that allows users to log their daily workouts, track calorie intake, and monitor their fitness progress over time with charts and graphs. It includes features like social sharing and personalized workout plans. Data is synced with a Firebase backend.',
    technologies: ['React Native', 'Firebase', 'JavaScript'],
    imageUrl: 'https://storage.googleapis.com/maker-suite-images/fitness_app.png',
    images: [
        'https://storage.googleapis.com/maker-suite-images/fitness_app_2.png',
        'https://storage.googleapis.com/maker-suite-images/fitness_app_3.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    phase: 'In Development',
    category: 'Mobile',
    githubUrl: 'https://github.com/example/fitness-tracker',
  },
];