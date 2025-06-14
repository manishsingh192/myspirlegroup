
// BackgroundVideo.js
import React from 'react';
import { styled } from '@mui/material/styles';
import video from '../../../../assets/images/home1.mp4';
import { Box, Button, Stack, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const VideoBackground = styled('video')({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
});

const Overlay = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
}));

const Content = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    color: '#fff',
    textAlign: 'center',
    paddingTop: theme.spacing(20),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
}));

const Automobile = () => {
    const handleClick = () => {
        window.location.href = "/automobilepage";
    }
    return (
        <>
            <VideoBackground autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </VideoBackground>
            <Overlay />
            <Content>
                <Box>
                    <Typography variant='h3'>Automobile</Typography>
                    <Stack sx={{ my: 2 }} direction="row" spacing={1} justifyContent={'center'}>
                        <Button size='medium'
                            variant='none'
                            sx={{
                                textTransform: 'uppercase',
                                px: 3,
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                backgroundColor: '#fff',
                                color: '#333',
                                transition: 'background-color 0.5s ease-in, color 0.5s ease-in',
                                '&:hover': {
                                    backgroundColor: '#333',
                                    color: '#fff',
                                },
                            }}
                            onClick={handleClick}
                        >
                            EXPLORE Automobile <EastIcon sx={{ pl: 1 }} />
                        </Button>
                    </Stack>
                </Box>
            </Content>
        </>
    );
};

export default Automobile;
