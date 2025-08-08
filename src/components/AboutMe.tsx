/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
} from '@mui/material';
import {
    ArrowBack as ArrowBackIcon,
    FileDownload as FileDownloadIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

interface AboutMeProps {
    onBack: () => void;
}

export function AboutMe({ onBack }: AboutMeProps) {
    const aboutText = 
    'As a dedicated and aspiring software engineer, I recently completed my Bachelors of Science in Computer Science and Artificial Intelligence at Purdue University, with minors in Mathematics and Chinese. My academic journey has provided me with a strong foundation in data structures, algorithms, and systems programming, fueling my passion for tackling complex technological challenges. \n\nMy professional experience is highlighted by my role as a Software Engineering Apprentice at Robosource, where I\'ve contributed to over ten projects, specializing in full-stack development and robotic process automation. I am proficient in a range of modern technologies, including TypeScript, React, C++, Python, and SQL, and have hands-on experience with RESTful APIs, various database systems like PostgreSQL and Firebase, and cloud platforms like Azure. My time as an IT Intern at Hershey Entertainment and Resorts further honed my technical troubleshooting and problem-solving skills in a high-volume, fast-paced environment.\n\nBeyond my technical skills, I have cultivated strong leadership and community-building abilities through my roles as a Residence Education Assistant, where I supervised a large team of resident assistants, and as the President of the Boilermaker Chapter of the National Residence Hall Honorary. These experiences have taught me the importance of collaboration, crisis management, and effective communication. I am eager to apply my diverse skill set and collaborative spirit to a challenging software engineering role where I can contribute to innovative and impactful projects.'
    const githubProfileUrl = 'https://github.com/BrandonLC2020'
    const linkedInProfileUrl = 'https://linkedin.com/in/brandonlc2024';
    const resumeUrl = './files/Portfolio Resume.pdf';
    const renderContent = () => (
        <Card sx={{ maxWidth: 800, width: '100%', p: 2 }}>
            <CardContent>
                <Grid container spacing={3} direction={{ xs: 'column', sm: 'row' }} alignItems="center" sx={{ textAlign: { xs: 'center', sm: 'left'} }}>
                    <Grid item xs={12} sm="auto">
                        <Avatar
                            alt="Profile"
                            src="./images/Personal Portrait.png"
                            sx={{ width: 150, height: 150, bgcolor: 'primary.main', border: '3px solid', borderColor: 'secondary.main' }}
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h2" component="h2" gutterBottom>Brandon<br/>Lamer-Connolly</Typography>
                        <Typography variant="h5" color="secondary.main" fontWeight="500">New Grad Software Engineer</Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    href={githubProfileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    startIcon={<GitHubIcon />}
                                >
                                    GitHub
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    href={linkedInProfileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    startIcon={<LinkedInIcon />}
                                >
                                    LinkedIn
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    component="a" // Render the button as an anchor tag
                                    href={resumeUrl}
                                    download // This attribute prompts the user to download the file
                                    aria-label="Download Resume"
                                    startIcon={<FileDownloadIcon />}
                                >
                                    Download Resume
                                </Button>
                            </Grid>
                        </Grid>
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
            {renderContent()}
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