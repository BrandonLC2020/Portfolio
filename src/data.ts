/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Project } from './types';

import ListAltIcon from '@mui/icons-material/ListAlt';
import BackupIcon from '@mui/icons-material/Backup';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

export const PROJECTS: Project[] = [
  // TODO: Get images and video links for these projects
  {
    id: 1,
    title: 'Music Stats',
    cardIcon: ListAltIcon,
    inspiration: 'I love Spotify Wrapped and wanted to create a similar experience for my own music listening habits that I could access anytime. There were other apps that did this, but they were either too expensive or too clunky to use. I wanted something simple, easy to use, effective, and pleasing to the eye.',
    shortDescription: 'An iOS app that tells you your top songs and artists on Spotify anytime you want.',
    longDescription: 'This application leverages Spotify\'s Web API to fetch user listening data and presents it in a visually appealing way. Users can view their top song and artists over different time periods, creating a personalized music experience. It also includes Keychain support for secure storage of access tokens, ensuring user data is protected, and streamlining the login process.',
    technologies: ['XCode', 'Swift', 'SwiftUI', 'Spotify Web API', 'Keychain'],
    // images: [
    //     'https://storage.googleapis.com/maker-suite-images/AI_story_generator_2.png',
    //     'https://storage.googleapis.com/maker-suite-images/AI_story_generator_3.png'
    // ],
    // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    phase: 'Maintenance & Support',
    githubUrl: 'https://github.com/BrandonLC2020/Music-Stats-iOS',
  },
  {
    id: 2,
    title: 'Spotify Stats Monthly Snapshot Script',
    cardIcon: BackupIcon,
    // TODO: Update inspiration and description
    inspiration: 'I love Spotify Wrapped and wanted to create a similar experience for my own music listening habits that I could access anytime. There were other apps that did this, but they were either too expensive or too clunky to use. I wanted something simple, easy to use, effective, and pleasing to the eye.',
    shortDescription: 'A script that generates monthly stats for your Spotify listening habits.',
    longDescription: 'This script utilizes Spotify\'s Web API to gather and analyze user listening data on a monthly basis. It provides insights into listening trends, top tracks, and artists, allowing users to reflect on their music preferences over time. The script is designed to be run easily and can be integrated into existing workflows.',
    technologies: ['AWS', 'AWS Lambda', 'AWS EventBridge', 'AWS Secrets Manager', 'AWS Aurora', 'Spotify Web API', 'Python', 'MySQL'],
    // images: [
    //     'https://storage.googleapis.com/maker-suite-images/AI_story_generator_2.png',
    //     'https://storage.googleapis.com/maker-suite-images/AI_story_generator_3.png'
    // ],
    // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    phase: 'Maintenance & Support',
    githubUrl: 'https://github.com/BrandonLC2020/PersonalSpotifyStatsBackup',
  },
  {
    id: 3,
    title: 'Redirect URI Inspector',
    cardIcon: ManageSearchIcon,
    // TODO: Update inspiration and description
    inspiration: 'I wanted to create a tool that helps developers easily inspect and debug their OAuth redirect URIs. This tool aims to simplify the process of verifying and testing redirect URIs for various applications.',
    shortDescription: 'A web app for inspecting and testing OAuth redirect URIs.',
    longDescription: 'This web application allows developers to input their OAuth redirect URIs and inspect the parameters being sent during the authentication process. It provides a user-friendly interface for testing and debugging redirect URIs, making it easier to identify issues and ensure proper functionality.',
    technologies: ['AWS','AWS S3', 'AWS CloudFront', 'AWS DynamoDB', 'AWS Lambda', 'AWS API Gateway', 'React', 'TypeScript', 'Material-UI', 'Vite'],
    // images: [
    //     'https://storage.googleapis.com/maker-suite-images/AI_story_generator_2.png',
    //     'https://storage.googleapis.com/maker-suite-images/AI_story_generator_3.png'
    // ],
    // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    phase: 'Maintenance & Support',
    githubUrl: 'https://github.com/BrandonLC2020/PersonalRedirectInspectorWebApp',
  },
  {
    id: 4,
    title: 'Dual Weather',
    cardIcon: ThermostatIcon,
    // TODO: Update inspiration and description
    inspiration: 'I wanted to create a tool that helps developers easily inspect and debug their OAuth redirect URIs. This tool aims to simplify the process of verifying and testing redirect URIs for various applications.',
    shortDescription: 'A web app for inspecting and testing OAuth redirect URIs.',
    longDescription: 'This web application allows developers to input their OAuth redirect URIs and inspect the parameters being sent during the authentication process. It provides a user-friendly interface for testing and debugging redirect URIs, making it easier to identify issues and ensure proper functionality.',
    technologies: ['XCode', 'Swift', 'SwiftUI', 'WeatherKit', 'CoreLocation', 'Firebase', 'Firestore'],
    // images: [
    //     'https://storage.googleapis.com/maker-suite-images/AI_story_generator_2.png',
    //     'https://storage.googleapis.com/maker-suite-images/AI_story_generator_3.png'
    // ],
    // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    phase: 'Maintenance & Support',
    githubUrl: 'https://github.com/BrandonLC2020/Dual-Weather-iOS',
  },
  {
    id: 5,
    title: 'ListenList',
    cardIcon: QueueMusicIcon,
    // TODO: Update inspiration and description
    inspiration: 'I wanted to create a tool that helps developers easily inspect and debug their OAuth redirect URIs. This tool aims to simplify the process of verifying and testing redirect URIs for various applications.',
    shortDescription: 'A web app for inspecting and testing OAuth redirect URIs.',
    longDescription: 'This web application allows developers to input their OAuth redirect URIs and inspect the parameters being sent during the authentication process. It provides a user-friendly interface for testing and debugging redirect URIs, making it easier to identify issues and ensure proper functionality.',
    technologies: ['XCode', 'Swift', 'SwiftUI', 'Spotify Web API', 'Keychain', 'Firebase', 'Firestore'],
    // images: [
    //     'https://storage.googleapis.com/maker-suite-images/AI_story_generator_2.png',
    //     'https://storage.googleapis.com/maker-suite-images/AI_story_generator_3.png'
    // ],
    // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    phase: 'Implementation',
    githubUrl: 'https://github.com/BrandonLC2020/ListenList-iOS',
  },   
];