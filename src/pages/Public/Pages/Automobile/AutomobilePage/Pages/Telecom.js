import React from 'react';
import { Box, Typography, Toolbar, Grid } from '@mui/material';
import Telecombackgroundimg from '../../../../../../assets/images/telecomimg.jpg';
import Telecomimg1 from '../../../../../../assets/images/telecomimg1.jpg';

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

const Telecom = () => (
    <div>
        <BackgroundSection image={Telecombackgroundimg} title="Telecom" />

        <InfoSection>
            <Box sx={{ m: { xs: 2, sm: 4 } }}>
                <Grid container spacing={5} sx={{ alignItems: 'center', mt: { xs: 1, sm: 5 } }}>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h5' mb={4}>
                            Telecom towers are an integral part of the telecom network infrastructure. They are the most expensive to build, and the valuations are heavy. The business has outgrown itself so much that most the companies have hived off the tower business as its own identity.
                        </Typography>
                        <Typography variant='h5' mb={4}>
                            Sharing of infrastructure, passive and active, is beneficial for all parties involved as it brings significant operational and financial savings, thus enabling the companies to minimize duplication of efforts & costs and improve profitability.
                        </Typography>

                        <Typography variant='h5' mb={4}>
                            Mobile network penetration is increasing daily; therefore, demand for telecom towers is also increasing explosively. Quality is becoming an issue as manufacturers increasingly outsource production needs.
                        </Typography>

                        <Typography variant='h5' mb={4}>
                            QACA offers certification, inspection, and training services to all stakeholders- owners, operators, investors, insurers, and manufacturers, which require project expertise, conformity assessment, inspections, and certifications.
                        </Typography>

                        <Typography variant="h4">
                            <b>Services Includes:</b>
                        </Typography>
                        <ol style={{ marginLeft: 10 }}>
                            <ListItem>Feasibility Assessment Services</ListItem>
                            <ListItem>Project Management Services</ListItem>
                            <ListItem>Testing and Commissioning Services</ListItem>
                            <ListItem>Operations & Maintenance (O&M)</ListItem>
                        </ol>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={Telecomimg1} alt="Automobile component" style={{ width: '100%' }} />
                    </Grid>
                </Grid>

                <Typography variant="h4" sx={{ textDecoration: 'underline', mt: 2 }}>
                    <b>How Can QACA Benefit You?</b>
                </Typography>
                <ol>
                    <ListItem>Avoid risk linked to quality and safety problems with supplies.</ListItem>
                    <ListItem>Reassurance of an independent assessment.</ListItem>
                    <ListItem>Confidence to use supplied items thanks to detailed reports and certificates.</ListItem>
                    <ListItem> A cost-effective way to verify suppliers' quality assurance/Quality Control organization.</ListItem>
                    <ListItem> Skilled personnel with relevant experience and qualifications at your service.</ListItem>
                    <ListItem> Meet required specifications</ListItem>
                    <ListItem> Minimize downtime.</ListItem>
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

export default Telecom;
