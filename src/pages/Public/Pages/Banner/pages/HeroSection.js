import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://via.placeholder.com/1400x500')`, // Replace with real banner image
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 8, md: 12 },
        color: "#fff",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      />

      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to Spirle Group
        </Typography>
        <Typography variant="h6" mb={4}>
          Innovating for a better future across technology, healthcare, and sustainability.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
