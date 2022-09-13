import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import NigeriaPresident from '../assets/buhari.webp';
import HomeTributeCard from './HomeTributeCard';

const tributeInfo = [
  {
    img: 'https://imgs.search.brave.com/f2GAWwLdDw1obwIAgpCG_rK2EtJSTY4Lzg2t66WnQbU/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/R1FOUzhBY2p2SDhw/QkI5ZzlJd3JnSGFF/SyZwaWQ9QXBp',
    name: 'MUHAMMADU BUHARI',
    title: 'President of Nigeria',
    description:
      'The story of modern Nigeria will never be complete without a chapter on Queen Elizabeth II, a towering global personality and an outstanding leader. She dedicated her life to making her nation, the Commonwealth and the entire world a better place.',
  },
  {
    img: 'https://imgs.search.brave.com/jgl23AMqAo9mtkg7ZboOrWpmq18U4BQg-7SNZ0nTcjk/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/ZHk4Vm1KVXNORVBw/bEdyYTFqWTF3SGFF/byZwaWQ9QXBp',
    name: 'EMMANUEL MACRON',
    title: 'President of France',
    description:
      "Her Majesty Queen Elizabeth II embodied the British nation's continuity and unity for over 70 years. I remember her as a friend of France, a kind-hearted queen who has left a lasting impression on her country and her century.",
  },
];

const HomeTribute = () => {
  return (
    <Box height='60vh' color='#fff'>
      <Stack ml={8} mt={4}>
        <Typography fontSize='2.5em'>TRIBUTES</Typography>
        <Typography color='lightslategrey'>World leaders pay tribute to Queen Elizabeth II</Typography>
      </Stack>
      <Stack direction='row' justifyContent='space-between' pl={8} pr={8} mt={4}>
        {tributeInfo.map((info) => (
          <HomeTributeCard
            img={info.img}
            name={info.name}
            title={info.title}
            description={info.description}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default HomeTribute;
