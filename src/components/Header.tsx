/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data';

interface HeaderProps {
  onNavigate: (page: 'about' | 'grid') => void;
  onSelectProject: (project: Project) => void;
}

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/>
    </svg>
);

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`chevron-icon ${isOpen ? 'is-open' : ''}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);


export function Header({ onNavigate, onSelectProject }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsSubmenuOpen, setIsProjectsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Reset submenu when opening main menu
      setIsProjectsSubmenuOpen(false);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProjectClick = (project: Project) => {
    onSelectProject(project);
    setIsMenuOpen(false);
  };

  const handleNavigateClick = (page: 'about' | 'grid') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="app-header">
        <div className="app-header-left">
            <button className="home-btn" onClick={() => handleNavigateClick('grid')} aria-label="Go to homepage">
                <HomeIcon />
            </button>
            <div className="app-header-title">Developer Portfolio</div>
        </div>
        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Open navigation menu" aria-expanded={isMenuOpen}>
          <HamburgerIcon />
        </button>
      </header>

      <div className={`nav-menu-overlay ${isMenuOpen ? 'is-open' : ''}`} onClick={toggleMenu}></div>

      <nav className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="menu-heading">
        <div className="nav-menu-header">
          <h3 id="menu-heading">Menu</h3>
          <button className="hamburger-btn" onClick={toggleMenu} aria-label="Close navigation menu" aria-expanded={isMenuOpen}>
            <CloseIcon />
          </button>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <button onClick={() => handleNavigateClick('grid')}>
              Home
            </button>
          </li>
          <li className="nav-link">
            <button onClick={() => setIsProjectsSubmenuOpen(!isProjectsSubmenuOpen)} aria-expanded={isProjectsSubmenuOpen}>
              <span>Projects</span>
              <ChevronIcon isOpen={isProjectsSubmenuOpen} /> 
            </button>
            <ul className={`submenu ${isProjectsSubmenuOpen ? 'is-open' : ''}`}>
              {PROJECTS.map(project => (
                <li key={project.id} className="nav-link">
                  <a role="button" onClick={() => handleProjectClick(project)}>
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav-link">
            <button onClick={() => handleNavigateClick('about')}>
              About Me
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}