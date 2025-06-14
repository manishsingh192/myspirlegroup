import React from 'react';
import { Box, Typography, Toolbar, Grid } from '@mui/material';
import Autoimg1 from '../../../../../assets/images/Autoimg1.jpg';
import automobilebackgroundimg from '../../../../../assets/images/Autoimg.jpg';

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

const ItTechnoPage = () => (
    <div>
        <BackgroundSection image={automobilebackgroundimg} title="IT Technology" />

        <InfoSection>
            <Box sx={{ m: { xs: 2, sm: 4 } }}>
                <Grid container spacing={5} sx={{ alignItems: 'center', mt: { xs: 1, sm: 5 } }}>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h5'>
                            Automobile manufacturing depends upon many component suppliers. The volumes of production are high and on the assembly line of any <b>Original Equipment Supplier</b> (OEM) which is the company that assembles the components to create the final car or a two-wheeler or a truck, the quality of the automobile is totally dependent on the quality of components used to build it. Quality control is the process by which a company prevents products, that do not conform to specifications, reach the customer. Consistent component quality generates customer satisfaction, minimizes complaints, and results in continued business. It improves process reliability and gives cost reductions which helps competitiveness, profitability and market shares.
                        </Typography>
                        <Typography variant='h5'>
                            Quality control process uses measurements and tests to ensure the components are uniform and meet a specification. This is achieved through Inspections or Statistical quality control (SQC).
                        </Typography>
                        <ol>
                            <Typography component="li" style={{ fontSize: '1rem', marginBottom: 2 }}>
                                Inspection checks the performance of items as per the pre-decided specifications. It involves periodic checking before, during and upon completion of the process. It can be categorized into two types: Centralized and Floor Inspection.
                            </Typography>
                            <Typography component="li" style={{ fontSize: '1rem' }}>
                                Statistical Quality Control relies on laws of probability. It controls the process to achieve production within tolerance limits.
                            </Typography>
                        </ol>
                        <Typography variant='h5'>
                            <b>Quality Austria Central Asia</b> helps reassure customers of an organisation, that the supplied products conform to the specification. This is achieved by identifying critical controls and determining where additional focus is needed, assisting in process improvement and providing a line of defence.
                        </Typography>
                        <Typography variant='h5'>
                            The main benefits of the service offered by Quality Austria Central Asia are to improve quality awareness and increase prevention, reduction of wastage due to rejection and rework, improved customer satisfaction, and increased sales. Additional support to organisations is determined by the need of the organisation and using subject matter experts, Quality Austria Central Asia provides Technical assistance, assessments and improvement projects.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={Autoimg1} alt="Automobile component" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Box>
        </InfoSection>

        <Typography variant="h4" sx={{ textDecoration: 'underline', m: { xs: 2, sm: 4 } }}>
            <b>Services Provided</b>
        </Typography>

        <InfoSection>
            <Typography variant="h4" sx={{ textDecoration: 'underline' }}>
                <b>Product Inspection</b>
            </Typography>
            <ol style={{ marginLeft: 10 }}>
                <ListItem>Receiving Inspection</ListItem>
                <ListItem>In process Inspection</ListItem>
                <ListItem>Pre despatch Inspection</ListItem>
                <ListItem>Firewall/ CSL Inspection</ListItem>
            </ol>
        </InfoSection>

        <InfoSection>
            <Typography variant="h4" sx={{ textDecoration: 'underline' }}>
                <b>Quality Methods for New Launch Support</b>
            </Typography>
            <ol style={{ marginLeft: 10 }}>
                <ListItem>APQP</ListItem>
                <ListItem>PPAP</ListItem>
                <ListItem>Sample Verification & Approval</ListItem>
            </ol>
        </InfoSection>

        <InfoSection>
            <Typography variant="h4" sx={{ textDecoration: 'underline' }}>
                <b>Technical Support</b>
            </Typography>
            <ol style={{ marginLeft: 10 }}>
                <ListItem>Subject Matter Expert</ListItem>
                <ListItem>Resident Support/ Customer Representative</ListItem>
                <ListItem>Quality Wall</ListItem>
                <ListItem>Lean Management</ListItem>
            </ol>
        </InfoSection>

        <InfoSection>
            <Typography variant="h4" sx={{ textDecoration: 'underline' }}>
                <b>Quality Improvement projects</b>
            </Typography>
            <ol style={{ marginLeft: 10 }}>
                <ListItem>RFT Improvement</ListItem>
                <ListItem>Zero Defect production line</ListItem>
                <ListItem>Quality Management Outsourcing</ListItem>
            </ol>
            <Typography variant="h6">
                For any queries or further information...
                <br /><span style={{ color: '#2980B9' }}>info@qacamail.com</span> or call us at
                <span style={{ color: '#2980B9' }}>+9198109 50210</span>. We are here to assist you!
            </Typography>
        </InfoSection>
    </div>
);

export default ItTechnoPage;
