import React from 'react';
import { Box, Typography, Toolbar, Container } from '@mui/material';
import AboutImg from '../../../../../../assets/images/Aboutimg.jpg';

// Background Hero Section
const BackgroundSection = ({ image, title }) => (
  <Box
    component="section"
    sx={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      height: { xs: '60vh', sm: '90vh' },
      width: '100%',
      position: 'relative',
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
      component="h1"
      sx={{
        color: '#fff',
        position: 'relative',
        zIndex: 1,
        fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
        fontWeight: 600,
      }}
    >
      {title}
    </Typography>
  </Box>
);

// About Us Content
const Aboutus = () => (
  <>
    <BackgroundSection image={AboutImg} title="About Us" />

    <Container sx={{ py: { xs: 4, sm: 6 } }}>
      {[
        <>
          <span style={{ color: '#2980B9' }}>Spirale Group</span> is a joint venture of <span style={{ color: '#2980B9' }}>Quality India</span>, India, and Spirale HR, India, established in September 2010. It is one of India’s leading providers of assessment, testing, training, and certification—helping businesses progress and become profitable through continual improvement.
        </>,
        <>
          With over 13 years of experience and an unparalleled professional reputation, Spirale Group has successfully audited, inspected, and trained thousands of multinational companies and enterprises—small or big—through the complexities of various standard requirements. Our continual strive to succeed has made us India’s topmost testing, inspection, and certification company.
        </>,
        <>
          Our logo has been recognized as the standard benchmark of honesty, transparency, reliability, quality, and integrity.
        </>,
        <>
          Spirale Group certification implies that a certifier or inspector can be relied upon to impartially determine if products, goods, organizations, and people conform to specified requirements. Our certification mark provides clients with a competitive edge in a world where every element counts.
        </>,
        <>
          With offices around <b>India and 8 other countries</b> and cities across several locations, our organization is backed by devoted, highly qualified, and experienced personnel. We have instilled an environment where every employee contributes to all aspects of our business process and strives to meet our clients’ satisfaction efficiently and cost-effectively.
        </>,
        <>
          We fully dedicate our time to listening to our clients’ problems and goals and helping them realize fulfillment. This means putting in extra effort and commitment to understanding business challenges and how they can be overcome to drive better outcomes.
        </>,
      ].map((text, i) => (
        <Typography key={i} variant="h6" sx={{ mb: 3, color: '#333' }}>
          {text}
        </Typography>
      ))}
    </Container>
  </>
);

export default Aboutus;
