import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Typography, Stack, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import ftlogo from "../../assets/images/new logo.jpeg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        px: { xs: 2, md: 10 },
        py: 6,
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Left Section - Logo & Description */}
        <Grid item xs={12} md={3}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            SPIRALE GROUP
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            We provide educational opportunities and scholarships to empower learners and build a brighter future.
          </Typography>
          <Box>
            <img src={ftlogo} alt="footer logo" height="80px" width="120px" />
          </Box>
        </Grid>

        {/* Center Section - Links */}
        <Grid item xs={6} md={3}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, textDecoration: "underline" }}>
            Important Links
          </Typography>
          {[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/about" },
            { label: "Blog", to: "/blog" },
            { label: "Career", to: "/career" },
            { label: "Contact", to: "/contact" },
          ].map((link, index) => (
            <Link
              key={index}
              component={RouterLink}
              to={link.to}
              underline="hover"
              variant="h6"
              sx={{ display: "block", mb: 1 }}
            >
              {link.label}
            </Link>
          ))}
        </Grid>

        <Grid item xs={6} md={3}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, textDecoration: "underline" }}>
            Another Section
          </Typography>
          {[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/about" },
            { label: "Blog", to: "/blog" },
            { label: "Career", to: "/career" },
            { label: "Contact", to: "/contact" },
          ].map((link, index) => (
            <Link
              key={index}
              component={RouterLink}
              to={link.to}
              underline="hover"
              variant="h6"
              sx={{ display: "block", mb: 1 }}
            >
              {link.label}
            </Link>
          ))}
        </Grid>

        {/* Right Section - Contact Us */}
        <Grid item xs={12} md={3} sx={{ textAlign: { xs: "left", md: "right" } }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, textDecoration: "underline" }}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            3rd Floor, Bhavani Complex, Sector-27
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Noida-201304.
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Phone: +123456789
          </Typography>
          <Stack direction="row" spacing={2} justifyContent={{ xs: "flex-start", md: "flex-end" }} mt={2}>
            <FacebookIcon sx={{ color: "#000" }} />
            <TwitterIcon sx={{ color: "#000" }} />
            <YouTubeIcon sx={{ color: "#000" }} />
            <InstagramIcon sx={{ color: "#000" }} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
