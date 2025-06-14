import React from 'react';
import { Box, Typography, Toolbar, Grid } from '@mui/material';
import Careerbackgroundimg from '../../../../../../assets/images/Carrerbackgroundimg.jpg';
import Careerimg from '../../../../../../assets/images/Careerimg.jpg';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

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
            clipPath: 'polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%)',
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

const Career = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Apply Now clicked');
        navigate('/contact')

    };

    return (
        <div>
            <BackgroundSection image={Careerbackgroundimg} title="Career" />

            <InfoSection>
                <Grid container spacing={5} sx={{ alignItems: 'center', mt: { xs: 1, sm: 5 } }}>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h4" sx={{ textDecoration: 'underline', mb: 3 }}>
                            <b>Benefits and rewards</b>
                        </Typography>
                        <Typography variant='h6' mb={3}>
                            The Spirale HR Solutions Pvt. Ltd. came up with combined cutting edge technology with real world practicality. Everyone knew that the systems had to be updated, the real challenge was updating them without disrupting the whole organization in a negative way. The solution was to introduce proper workload management done through computers, while providing mobile platforms to the stakeholders.
                        </Typography>
                        <Typography variant='h6' mb={3}>
                            This allowed the workers to be involved in the job instead of feeling like they had been made redundant by technology.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowForwardIcon />}
                            onClick={handleClick}
                        >
                            Apply Now
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img src={Careerimg} alt="Career component" style={{ width: '100%' }} />
                    </Grid>
                </Grid>

                <Typography variant="h6" mt={4}>
                    For any queries or further information...
                    <br /><span style={{ color: '#2980B9' }}>info@qacamail.com</span> or call us at
                    <span style={{ color: '#2980B9' }}>+9198109 50210</span>. We are here to assist you!
                </Typography>
            </InfoSection>
        </div>
    );
};

export default Career;
