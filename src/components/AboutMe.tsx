/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { GoogleGenAI } from '@google/genai';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface AboutMeProps {
    onBack: () => void;
}

export function AboutMe({ onBack }: AboutMeProps) {
    const [aboutText, setAboutText] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAboutText = async () => {
            setIsLoading(true);
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: "Write an engaging 'About Me' section for a senior frontend engineer's portfolio. Mention expertise in React, UI/UX design, and working with modern APIs like Gemini. Keep it professional but approachable. Structure the output into 2-3 paragraphs. Do not use markdown."
                });
                setAboutText(response.text || '');
            } catch (error) {
                console.error("Failed to generate about me text:", error);
                setAboutText("A passionate senior frontend engineer with a knack for creating beautiful, functional, and user-centric web applications. With deep expertise in React and a strong eye for UI/UX design, I enjoy turning complex problems into elegant solutions. I'm always excited to work with modern technologies and APIs, including the Gemini API, to build next-generation digital experiences.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchAboutText();
    }, []);

    const renderLoadingState = () => (
        <Card sx={{ maxWidth: 800, width: '100%', p: 2 }}>
            <CardContent>
                <Grid container spacing={3} direction={{ xs: 'column', sm: 'row' }} alignItems="center">
                    <Grid item>
                        <Skeleton variant="circular">
                            <Avatar sx={{ width: 150, height: 150, bgcolor: 'primary.main' }} />
                        </Skeleton>
                    </Grid>
                    <Grid item xs>
                        <Skeleton variant="text" sx={{ fontSize: '2.5rem' }} />
                        <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} width="60%" />
                    </Grid>
                </Grid>
                <Box mt={3}>
                    <Skeleton variant="rectangular" height={80} />
                    <Skeleton variant="rectangular" height={60} sx={{ mt: 2 }} />
                </Box>
            </CardContent>
        </Card>
    );

    const renderContent = () => (
        <Card sx={{ maxWidth: 800, width: '100%', p: 2 }}>
            <CardContent>
                <Grid container spacing={3} direction={{ xs: 'column', sm: 'row' }} alignItems="center" sx={{ textAlign: { xs: 'center', sm: 'left'} }}>
                    <Grid item xs={12} sm="auto">
                        <Avatar
                            alt="Profile"
                            src="https://storage.googleapis.com/maker-suite-images/profile_placeholder.png"
                            sx={{ width: 150, height: 150, bgcolor: 'primary.main', border: '3px solid', borderColor: 'secondary.main' }}
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h2" component="h2" gutterBottom>About Me</Typography>
                        <Typography variant="h5" color="secondary.main" fontWeight="500">Senior Frontend Engineer</Typography>
                    </Grid>
                </Grid>
                <Box mt={3}>
                    {aboutText.split('\n\n').map((paragraph, index) => (
                        <Typography key={index} variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
                            {paragraph}
                        </Typography>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '100%' }}>
            {isLoading ? renderLoadingState() : renderContent()}
            <Button
                variant="contained"
                onClick={onBack}
                startIcon={<ArrowBackIcon />}
                aria-label="Go back to portfolio"
            >
                Back to Projects
            </Button>
        </Box>
    );
}