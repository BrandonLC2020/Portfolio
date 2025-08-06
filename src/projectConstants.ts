/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Theme } from '@mui/material/styles';

export const PHASES_ORDER = [
  'Planning & Requirements Analysis',
  'Implementation',
  'Deployment',
  'Maintenance & Support',
];

export const PHASE_DESCRIPTIONS: Record<string, string> = {
    'Planning & Requirements Analysis': 'Projects in the initial phase of gathering requirements and planning.',
    'Implementation': 'Projects currently in active development and implementation.',
    'Deployment': 'Projects that are being deployed or have been recently deployed.',
    'Maintenance & Support': 'Projects that are complete and are now in a maintenance and support cycle.',
};

export const getPhaseColors = (theme: Theme): Record<string, string> => ({
    'Planning & Requirements Analysis': theme.palette.info.main,
    'Implementation': theme.palette.secondary.main,
    'Deployment': theme.palette.success.main,
    'Maintenance & Support': theme.palette.primary.main,
});