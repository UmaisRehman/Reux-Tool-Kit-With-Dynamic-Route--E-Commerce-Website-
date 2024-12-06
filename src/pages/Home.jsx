import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();;
  const navigateTo = (path) => {
    // You can use React Router's `useNavigate` here if you have routes set up
    console.log(`Navigating to: ${path}`);
  };

  return (
    <Container maxWidth="lg" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography
        variant="h2"
        gutterBottom
        color="primary"
        fontWeight="bold"
        sx={{ marginBottom: '20px' }}
      >
        Welcome to Our Store!
      </Typography>
      <Typography
        variant="h5"
        color="textSecondary"
        sx={{ marginBottom: '40px' }}
      >
        Discover amazing products and unbeatable deals. Start your journey with us today!
      </Typography>
      <Box display="flex" justifyContent="center" gap={3}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/products')}
        >
          View Products
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => navigateTo('/contact')}
        >
          Contact Us
        </Button>
      </Box>
      <Box
        component="img"
        src="https://source.unsplash.com/800x400/?store,shopping"
        alt="Store Welcome"
        sx={{
          width: '100%',
          height: 'auto',
          marginTop: '40px',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      />
    </Container>
  );
};

export default Home;
