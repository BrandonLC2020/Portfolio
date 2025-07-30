/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Project } from '../types';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectDetailProps {
    project: Project;
    onBack: () => void;
}

// Renders the detailed view of a selected project.
export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }} aria-live="polite">
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2} sx={{ mb: 3 }}>
            <Button
                variant="contained"
                onClick={onBack}
                startIcon={<ArrowBackIcon />}
                aria-label="Go back to portfolio"
            >
                Back to Projects
            </Button>
            <Button
                variant="outlined"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
            >
                View on GitHub
            </Button>
        </Stack>

        <Typography variant="h2" component="h2" gutterBottom>
            {project.title}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }} useFlexGap flexWrap="wrap">
            <Chip label={project.phase} color="secondary" sx={{ color: 'background.default', fontWeight: 'bold' }} />
            {project.technologies.map(tag => <Chip key={tag} label={tag} variant="outlined" />)}
        </Stack>

        <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            {project.longDescription}
        </Typography>

        <Box sx={{ my: 4 }}>
            {project.videoUrl && (
                <Box mb={4}>
                    <Typography variant="h4" gutterBottom>Screen Recording</Typography>
                    <Box sx={{
                        position: 'relative',
                        pb: '56.25%', /* 16:9 */
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: 1,
                        '& iframe': {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }
                    }}>
                        <iframe
                            src={project.videoUrl}
                            title={`Video for ${project.title}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </Box>
                </Box>
            )}
            {project.images && project.images.length > 0 && (
                <Box>
                    <Typography variant="h4" gutterBottom>Screenshots</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <img src={project.imageUrl} alt={`Primary screenshot for ${project.title}`} style={{ width: '100%', borderRadius: '8px', border: '1px solid #333' }} />
                        </Grid>
                        {project.images?.map((img, index) => (
                            <Grid key={index} item xs={12} sm={6}>
                                <img src={img} alt={`Screenshot ${index + 1} for ${project.title}`} style={{ width: '100%', borderRadius: '8px', border: '1px solid #333' }} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </Box>
    </Paper>
  );
}