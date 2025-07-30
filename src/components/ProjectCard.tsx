/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Project } from '../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CardActionArea from '@mui/material/CardActionArea';
import Stack from '@mui/material/Stack';

import PsychologyIcon from '@mui/icons-material/Psychology';
import BarChartIcon from '@mui/icons-material/BarChart';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

// Renders a single project card in the grid.
export function ProjectCard({ project, onSelect }: ProjectCardProps) {
    const renderIcon = () => {
        const iconProps = {
            sx: {
                fontSize: 48,
                color: 'primary.main'
            }
        };
        switch (project.category) {
            case 'AI':
                return <PsychologyIcon {...iconProps} />;
            case 'Data':
                return <BarChartIcon {...iconProps} />;
            case 'Mobile':
                return <PhoneIphoneIcon {...iconProps} />;
            default:
                return null;
        }
    };

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
                {renderIcon()}
            </Box>
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h3" component="h3" gutterBottom>
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
                    {project.shortDescription}
                </Typography>
                <Stack direction="row" spacing={0.5} useFlexGap flexWrap="wrap">
                    <Chip label={project.phase} color="secondary" size="small" sx={{ color: 'background.default', fontWeight: 'bold' }} />
                    {project.technologies.map(tag =>
                        <Chip key={tag} label={tag} variant="outlined" size="small" />
                    )}
                </Stack>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}