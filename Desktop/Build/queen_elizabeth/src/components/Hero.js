import React from 'react';
import { Stack, Box, Typography } from '@mui/material';

import Logo from '../assets/Logo10.png';
import HeroImg from '../assets/TheQueen1.svg';

const Hero = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='center'
      height='90vh'
      position='relative'
    >
      <Box
        color='white'
        sx={{
          position: { lg: 'absolute', xs: 'relative' },
          marginRight: { lg: '41em', xs: '0' },
        }}
        mb={28}
      >
        <Box sx={{ marginLeft: { lg: '12em', xs: '8em' } }} marginLeft='16em'>
          <img src={Logo} alt='' style={{ width: '50px' }} />
        </Box>
        <Typography
          textAlign='center'
          sx={{ fontSize: { lg: '3em', xs: '1.9em' } }}
          mb={0.5}
          p={3}
        >
          QUEEN ELIZABETH II
        </Typography>
        <Typography
          fontFamily='Roboto Condensed'
          sx={{ fontSize: { lg: '17px', xs: '12px' } }}
          color='lightslategrey'
          mb={1}
        >
          <em>
            "I have in sincerity pledged myself to your service, as so many of
            you
            <br />
            are pledged to mine. Throughout all my life and with all my heart I
            <br />
            shall strive to be worthy of your trust"
          </em>
        </Typography>
        <Typography textAlign='end' fontFamily='News Cycle' fontWeight='bold'>
          - Queen Elizabeth Alexandra Mary Windsor
        </Typography>
        <Typography textAlign='end' fontSize='15px' color='lightslategrey'>
          21 April 1926 - 8 September 2022
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <img
          src={HeroImg}
          alt=''
          style={{ height: '500px', objectFit: 'cover' }}
          marginRight='100px'
        />
      </Box>
    </Stack>
  );
};

export default Hero;
