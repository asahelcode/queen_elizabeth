import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo10.png';

const Header = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      alignItems='center'
      p={2}
      position='sticky'
      borderBottom='1px solid rgba(0, 0, 0, 0.18)'
      backgroundColor='rgba(0, 0, 0, 0.1)'
    >
      <Box sx={{ marginLeft: { lg: '0', xs: '-17em' }, p:'5px' }}>
        <img
          src={Logo}
          alt='royal cypher' 
          style={{
            width: '40px',
            backgroundColor: 'transparent',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Stack
        direction='row'
        color='white'
        fontSize='900'
        gap='25px'
        textTransform='capitalize'
        p={2}
        sx={{ display: { xs: 'none', lg: 'flex' } }}
      >
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Typography className='header-text' color='white'>
            Home
          </Typography>
        </Link>
        <Link to='/biography' style={{ textDecoration: 'none' }}>
          <Typography className='header-text' color='white'>
            Biography{' '}
          </Typography>
        </Link>
        <Link to='/timeline' style={{ textDecoration: 'none' }}>
          <Typography className='header-text' color='white'>
            Timeline{' '}
          </Typography>
        </Link>
        <Link to='/gallery' style={{ textDecoration: 'none' }}>
          <Typography className='header-text' color='white'>
            Gallery{' '}
          </Typography>
        </Link>
        <Link to='/tribute' style={{ textDecoration: 'none' }}>
          <Typography className='header-text' color='white'>
            Tribute{' '}
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Header;
