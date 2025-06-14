// BackgroundImage.js
import React from 'react';
import { styled } from '@mui/material/styles';
import Img1 from '../../../../assets/images/manufact1.jpg';
import { Box, Button, Stack, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const ImageBackground = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${Img1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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

const Manufacturing = () => {
    const handleClick = () => {
        window.location.href = "/manufactpage";
    };
    return (
        <>
            <ImageBackground />
            <Overlay />
            <Content>
                <Box>
                    <Typography variant='h3'>Manufacturing & Processes</Typography>
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
                            EXPLORE Manufacturing & Processes <EastIcon sx={{ pl: 1 }} />
                        </Button>
                    </Stack>
                </Box>
            </Content>
        </>
    );
};

export default Manufacturing;
