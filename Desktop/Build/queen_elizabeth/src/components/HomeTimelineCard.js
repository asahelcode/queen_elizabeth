import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const HomeTimelineCards = ({ img, description, year }) => {
  return (
    <Box borderRight="1px solid gray" p={1} borderLeft="1px solid gray">
      <img src={img} alt={year} style={{ width: '350px', height: '250px' }} />
      <Stack direction='row' width='350px' gap='20px' mt={2}>
        <Typography fontWeight='bold' fontSize='1.3em'>
          {year}
        </Typography>
        <Typography>
          <p>{description}</p>
        </Typography>
      </Stack>
    </Box>
  );
};

export default HomeTimelineCards;
