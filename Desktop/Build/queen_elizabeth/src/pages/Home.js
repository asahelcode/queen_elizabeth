import React from 'react';
import { Box, Stack } from '@mui/material';
import Hero from '../components/Hero';
import HomeBiography from '../components/HomeBiography';
import HomeTimeline from '../components/HomeTimeline';
import HomeTribute from '../components/HomeTribute';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <HomeBiography />
      <HomeTimeline />
      <HomeTribute />
      <Footer />
    </>
  );
};

export default Home;
