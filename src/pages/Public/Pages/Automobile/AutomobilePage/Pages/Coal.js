import React from 'react';
import { Box, Typography, Toolbar, Grid } from '@mui/material';
import Coalbackgroundimg from '../../../../../../assets/images/Coalbackgroundimg.jpg';
import Coalimg from '../../../../../../assets/images/Coalimg.jpg';

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

const Coal = () => (
    <div>
        <BackgroundSection image={Coalbackgroundimg} title="Coal" />

        <InfoSection>
            <Box sx={{ m: { xs: 2, sm: 4 } }}>
                <Grid container spacing={5} sx={{ alignItems: 'center', mt: { xs: 1, sm: 5 } }}>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h6' mb={4}>
                            Coal accounts for 55% of the country's energy needs. Coal is of four main types and each type of coal has different levels of organic content, ash content, and moisture. These cause a variation in the calorific value from different mines or parts of any mine. Besides, the variations also impact the environment differently. Thus analysis of coal provides information on its best usage. In addition, the calorific value and other parameters determine the monetary value of the coal. Therefore, coal is sampled and tested.  Coal sampling is done to have a reasonably accurate representation of the entire lot. Handling, storing and transporting coal samples is essential and must preserve the sample's integrity. Variations in coal quality have a significant impact on its commercial value and do contribute to corruption. Independent coal sampling and analysis is the accepted method for sellers and buyers to avoid disputes.
                        </Typography>

                        <Typography variant="h4" sx={{ textDecoration: 'underline' }}>
                            <b>Benefits:</b>
                        </Typography>
                        <ol>
                            <ListItem>Analytical results determine the appropriate use of coa</ListItem>
                            <ListItem>Assures both supplier and buyer of the quality</ListItem>
                            <ListItem>Effective Quality Monitoring process</ListItem>
                            <ListItem>Determine the commercial value of coal</ListItem>
                            <ListItem>Reduce environmental issues</ListItem>
                        </ol>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={Coalimg} alt="Automobile component" style={{ width: '100%' }} />
                    </Grid>
                </Grid>

                <Typography variant="h4" sx={{ textDecoration: 'underline', m: '20px 0px' }}>
                    <b>Service Offering</b>
                </Typography>
                <ol>
                    <ListItem>Sampling from trucks</ListItem>
                    <ListItem>Sampling from rakes</ListItem>
                    <ListItem>Sampling from Vessels</ListItem>
                    <ListItem>Sampling from stock</ListItem>
                    <ListItem>Stock Monitoring</ListItem>
                    <ListItem>LoT Sampling</ListItem>
                    <ListItem>Draft Surveys</ListItem>
                    <ListItem>Loading and Discharge Supervision</ListItem>
                    <ListItem>Proximate and Ultimate Analysis (As Received Basis, Air Dried Basis, Equilibrated Basis)</ListItem>
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

export default Coal;
