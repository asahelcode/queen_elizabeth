import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const HomeTributeCard = ({ img, name, title, description }) => {
  return (
    <Stack direction='row' fontFamily='Fira Mono'>
      <Box>
        <img
          src={img}
          alt=''
          style={{
            width: '200px',
            height: '150px',
            objectFit: 'cover',
            marginRight: '5px',
            marginBottom: '20px',
            border: 'none'
          }}
        />
        <Typography fontSize='1.3em' fontWeight='bold'>{name}</Typography>
        <Typography textTransform='capitalize' color='lightslategrey' fontStyle='italic'>{title}</Typography>
      </Box>
      <Box width='350px'>
        <Typography lineHeight='1.5' fontSize='0.9em' fontFamily='Fira Mono' color='lightslategrey'>
          {description}
        </Typography>
      </Box>
    </Stack>
  );
};

export default HomeTributeCard;
