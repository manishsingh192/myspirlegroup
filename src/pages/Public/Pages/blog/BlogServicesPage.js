import React from 'react';
import { Box, Typography, Toolbar, Grid } from '@mui/material';

const BackgroundSection = ({ image, title }) => (
    <Box
        component="main"
        sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            flexGrow: 1,
            height: { xs: '60vh', sm: '90vh' },
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 0,
            },
        }}
    >
        <Toolbar />
        <Typography
            variant="h2"
            sx={{
                color: '#fff',
                position: 'relative',
                zIndex: 1,
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            }}
        >
            {title}
        </Typography>
    </Box>
);

const InfoSection = ({ children }) => (
    <Box sx={{ m: { xs: 2, sm: 4 } }}>
        {children}
    </Box>
);

const ListItem = ({ children }) => (
    <Typography component="li" variant="h5" sx={{ lineHeight: 2 }}>
        {children}
    </Typography>
);

const BlogServicesPage = () => {
    // Replace these with your actual image URLs
    const blogBackgroundURL = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80';
    const blogImageURL = 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80';

    return (
        <div>
            <BackgroundSection image={blogBackgroundURL} title="Our Blog Services" />

            <InfoSection>
                <Grid container spacing={5} sx={{ alignItems: 'center', mt: { xs: 1, sm: 5 } }}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h5" sx={{ mb: 3 }}>
                            At our blog service, we provide comprehensive solutions to help your content shine and grow. Whether you need SEO-optimized posts, editorial calendars, or social media distribution, we have you covered.
                        </Typography>
                        <img
                            src={blogImageURL}
                            alt="Blogging illustration"
                            style={{ width: '100%', borderRadius: 8 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" sx={{ textDecoration: 'underline', mb: 4, textAlign: 'center' }}>
                            <b>Our Blog Services</b>
                        </Typography>

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={12}>
                                <Typography variant="h5" gutterBottom sx={{ textDecoration: 'underline' }}>
                                    <b>Content Creation</b>
                                </Typography>
                                <ul style={{ paddingLeft: '1rem' }}>
                                    <ListItem>SEO-Optimized Blog Posts</ListItem>
                                    <ListItem>Thought Leadership Articles</ListItem>
                                    <ListItem>Ghostwriting Services</ListItem>
                                    <ListItem>Editorial Calendars</ListItem>
                                </ul>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <Typography variant="h5" gutterBottom sx={{ textDecoration: 'underline' }}>
                                    <b>Blog Management</b>
                                </Typography>
                                <ul style={{ paddingLeft: '1rem' }}>
                                    <ListItem>Content Scheduling</ListItem>
                                    <ListItem>Platform Optimization (WordPress, Ghost, etc.)</ListItem>
                                    <ListItem>Analytics & Performance Reports</ListItem>
                                </ul>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <Typography variant="h5" gutterBottom sx={{ textDecoration: 'underline' }}>
                                    <b>Promotion & Growth</b>
                                </Typography>
                                <ul style={{ paddingLeft: '1rem' }}>
                                    <ListItem>Social Media Distribution</ListItem>
                                    <ListItem>Email Newsletter Integration</ListItem>
                                    <ListItem>Link Building Strategies</ListItem>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </InfoSection>
        </div>
    );
};

export default BlogServicesPage;
