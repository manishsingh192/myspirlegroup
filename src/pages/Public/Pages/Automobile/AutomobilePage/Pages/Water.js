import React from 'react';
import { Box, Typography, Toolbar, Grid } from '@mui/material';
import Waterbackgroundimg from '../../../../../../assets/images/Waterbackgroundimg.jpeg';
import Waterimg from '../../../../../../assets/images/waterimg.jpg';

const BackgroundSection = ({ image, title }) => (
    <Box
        component="main"
        sx={{
            p: { xs: 2, sm: 3 },
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

const ListItem = ({ children }) => (
    <Typography component="li" variant="h5" sx={{ lineHeight: 2 }}>
        {children}
    </Typography>
);

const Water = () => (
    <div>
        <BackgroundSection image={Waterbackgroundimg} title="Water" />

        <InfoSection>
            <Box sx={{ m: { xs: 2, sm: 4 } }}>
                <Grid container spacing={5} sx={{ alignItems: 'center', mt: { xs: 1, sm: 5 } }}>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h5' mb={4}>
                            All kinds of organizations and companies use water for various purposes. Businesses today are facing increasing scrutiny of their resource management and environmental impact. Water management has come into the limelight since organizations use water resources for their consumption.
                        </Typography>

                        <Typography variant='h5' mb={4}>
                            QACA offers certification, testing, and inspection services to ensure that the company maintains its commitment to sustainable use of water and implements actionable and traceable policies in accordance with water regulatory requirements.
                        </Typography>

                        <Typography variant='h5' mb={4}>
                            QACA help its clients in tracking and reporting on their water footprint, uncovering water challenges and risk, ensuring that water quality is maintained, and providing transparent water governance. We communicate with businesses to ensure that ethical business practices for water management are maintained.
                        </Typography>

                        <Typography variant="h4">
                            <b>Services Include:</b>
                        </Typography>
                        <ol>
                            <ListItem>Construction supervision and project management</ListItem>
                            <ListItem>Quality control and quality assurance of all civil and electromechanical works and related works</ListItem>
                            <ListItem>Quality control and quality assurance of civil works, headworks, pressure mains, main canal and distributaries including EWE, Banking, CM & CD Works, CC Lining etc.</ListItem>
                            <ListItem>Third-party quality control and quality assurance of all civil works, pipelines & allied works, hydro-mechanical works etc.</ListItem>
                            <ListItem>Third-party quality control and quality assurance consultancy for rehabilitation of tank system and implementation of tank safety water supply</ListItem>
                        </ol>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={Waterimg} alt="Automobile component" style={{ width: '100%' }} />
                    </Grid>
                </Grid>

                <Typography variant="h4" sx={{ m: '20px 0px' }}>
                    <b>How Can QACA Help You?</b>
                </Typography>
                <ol>
                    <ListItem>We assist you in accurately assessing your water management profile and identifying areas for improvement.</ListItem>
                    <ListItem>We aid in verifying compliance with internationally recognized standards and demonstrate transparency in water management practices.</ListItem>
                    <ListItem>We assess and monitor water quality at all stages of use</ListItem>
                    <ListItem>We assist you in enhancing your reputation and fostering trust among stakeholders ranging from consumers to investors, policymakers, and industry regulators.</ListItem>
                </ol>

                <Typography variant="h6">
                    For any queries or further information...
                    <br /><span style={{ color: '#2980B9' }}>info@qacamail.com</span> or call us at
                    <span style={{ color: '#2980B9' }}>+9198109 50210</span>. We are here to assist you!
                </Typography>

            </Box>
        </InfoSection>

    </div >
);

export default Water;
