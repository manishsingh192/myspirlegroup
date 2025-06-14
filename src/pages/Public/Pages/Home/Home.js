import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Logo from '../../../../assets/images/new logo.jpeg';
import {
  Box,
  Button,
  Stack,
  Modal,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { useTheme } from '@emotion/react';

const Content = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  color: '#fff',
  textAlign: 'center',
  paddingTop: theme.spacing(8), // Reduced on mobile
  paddingBottom: theme.spacing(4), // Added for mobile
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(12),
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(14),
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(18),
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  height: 'auto',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 250, // Smaller logo on mobile
  },
}));

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.location.href = 'homeexplore';
  };

  return (
    <>
      <Content>
        <Box mt={isMobile ? 18 : 3}>
          <LogoImage
            src={Logo}
            alt="Logo"
          />
          {showContent && (
            <Stack
              sx={{ 
                my: isMobile ? 3 : 4,
                px: isMobile ? 2 : 0 // Added padding on mobile
              }}
              direction={isMobile ? 'column' : 'row'}
              gap={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
  size={isMobile ? 'small' : 'medium'}
  variant="contained"
  sx={{
    textTransform: 'uppercase',
    px: isMobile ? 2 : 3,
    py: isMobile ? 1 : undefined,
    borderRadius: '50px',
    fontWeight: 'bold',
    backgroundColor: '#013967',
    color: '#fff',
    fontSize: isMobile ? '0.875rem' : '1rem',
    '&:hover': {
      backgroundColor: '#777',
      color: '#fff',
    },
  }}
  onClick={() => window.open('https://www.spiralehr.in/', '_blank')}
>
  Explore  <EastIcon sx={{ pl: 1 }} />
</Button>

            </Stack>
          )}
        </Box>
      </Content>

      {/* YouTube Popup Modal - Example implementation */}
      <Modal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        aria-labelledby="video-modal"
        aria-describedby="youtube-video"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobile ? '90%' : '70%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
        }}>
          {/* YouTube iframe would go here */}
          <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/..." 
              title="YouTube video" 
              frameBorder="0" 
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Home; 