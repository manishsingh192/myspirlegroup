import React, { useState } from 'react';
import {
  Box,
  Typography,
  Toolbar,
  Grid,
  Stack,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Contactimg from '../../../../../../assets/images/Contactimg.jpg';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';

const BackgroundSection = ({ image, title }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="main"
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        width: '100%',
        minHeight: { xs: '60vh', sm: '80vh', md: '90vh' },
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
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
          fontSize: { xs: '1.8rem', sm: '2.5rem', md: '4rem' },
          px: 2,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

const ContactInfo = ({ icon, title, content }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Box mt={0.5}>{icon}</Box>
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </Box>
    </Stack>
  </Grid>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <Box>
      <BackgroundSection image={Contactimg} title="Contact Us" />
      <Box sx={{ m: { xs: 2, sm: 4 }, maxWidth: '1200px', mx: 'auto' }}>
        <Typography variant="h6" mb={3}>
          Please let us know if you have a question, want to leave a comment, or would like further information about{' '}
          <Box component="span" sx={{ color: '#2980B9', fontWeight: 'bold' }}>
            SHSPL
          </Box>
          .
        </Typography>

        <Grid container spacing={4} mb={6}>
          <ContactInfo
            icon={<PlaceIcon color="primary" />}
            title="Location:"
            content="3rd Floor, Bhavani Complex, Sector-27, Noida-201304."
          />
          <ContactInfo
            icon={<CallIcon color="primary" />}
            title="Call Us:"
            content="+91-0000000000"
          />
          <ContactInfo
            icon={<ContactPhoneIcon color="primary" />}
            title="Landline:"
            content="+91-000000000"
          />
          <ContactInfo
            icon={<EmailIcon color="primary" />}
            title="Email:"
            content="info@spiralegroup.com"
          />
        </Grid>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 600,
            mx: 'auto',
            p: { xs: 2, sm: 3 },
            borderRadius: 2,
            boxShadow: 3,
            mb: 8,
            backgroundColor: '#fafafa',
          }}
        >
          <Typography variant="h5" align="center" mb={2}>
            Send Us a Message
          </Typography>

          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
          />

          <Button variant="contained" color="primary" type="submit" fullWidth>
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
