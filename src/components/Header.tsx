/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
} from '@mui/material';

import {
  Home as HomeIcon,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Person as PersonIcon,
  Apps as AppsIcon,
} from '@mui/icons-material';

interface HeaderProps {
  onNavigate: (page: 'about' | 'grid') => void;
  onSelectProject: (project: Project) => void;
}

export function Header({ onNavigate, onSelectProject }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsSubmenuOpen, setIsProjectsSubmenuOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsMenuOpen(open);
    if(open) {
        setIsProjectsSubmenuOpen(false);
    }
  };

  const handleProjectClick = (project: Project) => {
    onSelectProject(project);
    setIsMenuOpen(false);
  };

  const handleNavigateClick = (page: 'about' | 'grid') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const menuContent = (
    <Box
      sx={{ width: 280 }}
      role="presentation"
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigateClick('grid')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItemButton onClick={() => setIsProjectsSubmenuOpen(!isProjectsSubmenuOpen)}>
          <ListItemIcon><AppsIcon /></ListItemIcon>
          <ListItemText primary="Projects" />
          {isProjectsSubmenuOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={isProjectsSubmenuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {PROJECTS.map((project) => (
              <ListItemButton key={project.id} sx={{ pl: 4 }} onClick={() => handleProjectClick(project)}>
                <ListItemText primary={project.title} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigateClick('about')}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: 'rgba(30, 30, 30, 0.85)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="go to homepage"
            sx={{ mr: 1 }}
            onClick={() => handleNavigateClick('grid')}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Developer Portfolio
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
      >
        {menuContent}
      </Drawer>
    </>
  );
}