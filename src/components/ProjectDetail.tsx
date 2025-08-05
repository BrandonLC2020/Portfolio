/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Project } from '../types';

import {
    Box,
    Button,
    Chip,
    Grid,
    Paper,
    Stack,
    Typography,
} from '@mui/material';

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
        <Typography variant='h4' paragraph sx={{ color: 'text.secondary', mb: 2 }}>
            Inspiration
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            {project.inspiration}
        </Typography>
        <Typography variant='h4' paragraph sx={{ color: 'text.secondary', mb: 2 }}>
            Description
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            {project.longDescription}
        </Typography>
        {project.phaseDescription && (
            <>
                <Typography variant='h4' paragraph sx={{ color: 'text.secondary', mb: 2 }}>
                    Phase Description
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
                    {project.phaseDescription}
                </Typography>
            </>
        )}

        <Box sx={{ my: 4 }}>
        {/* Check for a local video file path instead of a URL */}
        {project.video && (
            <Box mb={4}>
            <Typography variant="h4" gutterBottom>Screen Recording</Typography>
            {/* This responsive container now targets the <video> element */}
            <Box sx={{
                position: 'relative',
                pb: '56.25%', /* 16:9 aspect ratio */
                height: 0,
                overflow: 'hidden',
                borderRadius: 1,
                '& video': { // Changed from '& iframe' to '& video'
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                }
            }}>
                {/* Replaced iframe with the video tag */}
                <video
                controls
                title={`Video for ${project.title}`}
                >
                <source src={project.video} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
                </video>
            </Box>
            </Box>
        )}

        {/* The rest of your code for images remains the same */}
        {project.images && project.images.length > 0 && (
            <Box>
            <Typography variant="h4" gutterBottom>Screenshots</Typography>
            <Grid container spacing={2}>
                {project.images.map((img, index) => (
                <Grid key={index} item xs={12} sm={6}>
                    <img src={img} alt={`Screenshot ${index + 1} for ${project.title}`} className="project-image" />
                </Grid>
                ))}
            </Grid>
            </Box>
        )}
        </Box>
    </Paper>
  );
}