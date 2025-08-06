/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Box, Tooltip, Typography, useTheme } from '@mui/material';
import { Project } from '../types';
import { getPhaseColors, PHASE_DESCRIPTIONS, PHASES_ORDER } from '../projectConstants';

interface ProjectPhasesProps {
  projects: Project[];
}

export function ProjectPhases({ projects }: ProjectPhasesProps) {
  const theme = useTheme();
  const totalProjects = projects.length;
  const PHASE_COLORS = getPhaseColors(theme);

  const phaseCounts = PHASES_ORDER.reduce((acc, phase) => {
    acc[phase] = 0;
    return acc;
  }, {} as Record<string, number>);

  projects.forEach(project => {
    if (phaseCounts[project.phase] !== undefined) {
      phaseCounts[project.phase]++;
    }
  });

  return (
    <Box sx={{ my: 4, p: 2, backgroundColor: 'background.paper', borderRadius: 1 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
        All Projects Status Overview
      </Typography>
      <Box sx={{ display: 'flex', height: '24px', borderRadius: 1, overflow: 'hidden', my: 2, border: '1px solid', borderColor: 'divider' }}>
        {PHASES_ORDER.map(phase => {
          const count = phaseCounts[phase];
          if (count === 0) return null;
          const percentage = (count / totalProjects) * 100;
          return (
            <Tooltip key={phase} title={`${phase}: ${count} project${count > 1 ? 's' : ''}`}>
              <Box
                sx={{
                  width: `${percentage}%`,
                  backgroundColor: PHASE_COLORS[phase],
                  transition: 'width 0.5s ease-in-out',
                }}
              />
            </Tooltip>
          );
        })}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 3 }}>
        {PHASES_ORDER.map(phase => {
          const count = phaseCounts[phase];
          if (count === 0) return null;
          return (
            <Tooltip key={phase} title={PHASE_DESCRIPTIONS[phase]}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: PHASE_COLORS[phase], mr: 1 }} />
                <Typography variant="body2" component="span">{phase} ({count})</Typography>
                </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
}