import React from "react";
import { Grid, Typography, Button, Box, Container } from "@mui/material";

const HeroSplit = () => {
  return (
     <Box sx={{ py: 8, bgcolor: "#f5f5f5" }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Building a Smarter Future
            </Typography>
            <Typography variant="body1" mb={3}>
              Spirle Group drives transformation across industries with innovation and responsibility.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Discover More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2023/02/06094124/ai-in-construction.png"
              alt="Spirle innovation"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSplit;
