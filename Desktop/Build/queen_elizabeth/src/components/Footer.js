import React from 'react';
import { Stack, Box, Typography } from '@mui/material';

import Logo from '../assets/Logo10.png';

const Footer = () => {
  return (
    <Box
      height='30vh'
      color='white'
      width='100%'
    >
      <Stack borderTop='1px solid gray' width='100%' justifyContent='center' alignItems='center' pt={3}>
        <img src={Logo} alt='' style={{ width: '45px' }} />
        <Typography variant='h5' mt={2}>
          QUEEN ELIZABETH ALEXANDRA MARY WINDSOR
        </Typography>
        <Typography fontSize='12px' color='lightslategrey' mt={1} fontStyle='italic'>
          Forever in our hearts
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
