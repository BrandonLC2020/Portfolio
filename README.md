# Personal Developer Portfolio

Welcome to my personal developer portfolio\! This is a single-page application built from scratch to showcase my skills, projects, and journey as a software engineer. The project itself serves as a demonstration of my abilities in modern front-end development.

**Live Demo:** [https://brandonlc2020.github.io/Portfolio/](https://brandonlc2020.github.io/Portfolio/)

## Features

  * **Dynamic Project Showcase:** Projects are loaded from a centralized data source, making it easy to add, update, or remove portfolio items.
  * **Technology Filtering:** Users can filter the projects by specific technologies to see examples of my work with different tools.
  * **Detailed Project View:** Each project has a dedicated page with an in-depth description, inspiration, technologies used, and a gallery of screenshots and video demonstrations.
  * **Project Status Overview:** A visual progress bar and legend show the current development phase of all listed projects.
  * **About Me Section:** A dedicated page with my professional summary, links to my GitHub and LinkedIn profiles, and a downloadable resume.
  * **Responsive Design:** The application is fully responsive and designed to provide an optimal viewing experience on all devices, from mobile phones to desktops.
  * **Modern UI/UX:** Built with Material-UI for a clean, modern, and intuitive user interface with a custom dark theme.

## Tech Stack

This project was built using a modern front-end technology stack:

  * **Core Framework:** React
  * **Language:** TypeScript
  * **Build Tool:** Vite
  * **UI Library:** Material-UI (MUI)
  * **Styling:** Emotion
  * **Deployment:** GitHub Pages

## Project Structure

The source code is organized into a clear and maintainable structure:

```
/src
|-- /components       # Reusable React components (Header, ProjectCard, etc.)
|-- data.ts           # Centralized data for all projects
|-- index.tsx         # Main application entry point
|-- projectConstants.ts # Constants related to project phases
|-- theme.ts          # Custom MUI theme configuration
|-- types.ts          # TypeScript type definitions for the project
```

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

  * Node.js (v18 or later recommended)
  * npm (or your preferred package manager)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/BrandonLC2020/Portfolio.git
    cd Portfolio
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173` (or the next available port).

## Available Scripts

This project includes the following scripts, defined in `package.json`:

  * `npm run dev`: Starts the Vite development server with hot-reloading.
  * `npm run build`: Compiles and bundles the application for production into the `dist` directory.
  * `npm run preview`: Serves the production build locally to preview before deployment.
  * `npm run predeploy`: A helper script that automatically runs the `build` command before deploying.
  * `npm run deploy`: Deploys the contents of the `dist` directory to the `gh-pages` branch on GitHub.

## Deployment

This application is configured for easy deployment to GitHub Pages.

To deploy your own version:

1.  Update the `homepage` value in your `package.json` to point to your GitHub Pages URL.
2.  Run the deploy script:
    ```bash
    npm run deploy
    ```

This command will build the application and push the `dist` folder to the `gh-pages` branch of your repository.
