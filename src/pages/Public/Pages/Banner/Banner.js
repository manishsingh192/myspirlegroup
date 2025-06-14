import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import video from '../../../../assets/Video/banner.mp4'

const Banner = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  return (
    <Box 
      position="relative" 
      height={{
        xs: '300px',  // Mobile
        sm: '400px',  // Tablet
        md: '500px',  // Small desktop
        lg: '600px',  // Large desktop
      }} 
      overflow="hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: -1
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent overlay for better text readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgcolor="rgba(0, 0, 0, 0.3)"
        zIndex={0}
      />

      {/* Overlay Content */}
      <Box
        position="relative"
        zIndex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        textAlign="center"
        px={2}  // Add horizontal padding on mobile
      >
        <Typography 
          variant={isMobile ? 'h3' : 'h2'} 
          color="white"
          sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            mb: isMobile ? 1 : 2,
          }}
        >
          Automobile
        </Typography>
        
        {/* Optional subtitle - responsive as well */}
        {!isMobile && (
          <Typography 
            variant={isTablet ? 'h5' : 'h4'} 
            color="white"
            sx={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
              maxWidth: '800px',
            }}
          >
            Discover the future of mobility
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default Banner