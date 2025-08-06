/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';
import { Project } from '../types';
import { getPhaseColors } from '../projectConstants';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

// Renders a single project card in the grid.
export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const theme = useTheme();
  const PHASE_COLORS = getPhaseColors(theme);

  return (
    <Card sx={{ height: '100%', display: 'flex', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
        <CardActionArea onClick={() => onSelect(project)} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
                backgroundColor: 'rgba(0,0,0,0.2)',
                alignSelf: 'stretch',
            }}>
                {project.cardIcon && (
                    <project.cardIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                )}
            </Box>
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h3" component="h3" gutterBottom>
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
                    {project.shortDescription}
                </Typography>
                <Stack direction="row" spacing={0.5} useFlexGap flexWrap="wrap">
                    <Chip
                        label={project.phase}
                        size="small"
                        sx={{
                            backgroundColor: PHASE_COLORS[project.phase] || theme.palette.grey[700],
                            color: theme.palette.getContrastText(PHASE_COLORS[project.phase] || theme.palette.grey[700]),
                            fontWeight: 'bold',
                        }} 
                    />
                    {project.technologies.map(tag =>
                        <Chip key={tag} label={tag} variant="outlined" size="small" />
                    )}
                </Stack>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}