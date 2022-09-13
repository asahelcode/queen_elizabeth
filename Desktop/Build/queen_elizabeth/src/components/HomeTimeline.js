import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HomeTimelineCard from './HomeTimelineCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import YoungQueen from '../assets/youngElizabeth.webp';
import YoungMarg from '../assets/YoungMarg.webp';
import YoungElizaBroadcast from '../assets/nationBroadcast.webp';

const timelineInfo = [
  {
    img: 'https://imgs.search.brave.com/3M4z2_glIkXM4aoO_dZh2Orn1midhRiH5t6L5sfAaR4/rs:fit:618:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/YzJvRjBJNTl3WGww/c0J2Nkt0czZRSGFG/ciZwaWQ9QXBp',
    year: '1926',
    description:
      "On the 21st of April, 1926. Princess Elizabeth Alexandra Mary Windsor is born at 2:40am at 17 Bruton Street. London, her maternal grandparents' house.It was home to her parents. Elizabeth and Albert, Duke of York, the second son of King George V and Queen Mary.She was the third in line to the throne behind her father and Edward, Prince of Wales.",
  },
  {
    img: 'https://imgs.search.brave.com/4ZqbmHhQMOTSNNdSt5xSmC9nv8pm16oAtiFse4taA3U/rs:fit:599:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/S2E2MnN0a0tJRWZs/OHNLSzVIRjRBQUFB/QSZwaWQ9QXBp',
    year: '1930s',
    description:
      "In August 1930, Elizabeth's sister Princess Margaret Rose, is born. On the 20th of January 1936, George V dies, Edward VII becomes King. On the 10th of December 1936, Edward VII abdicates so that he can marry the American divorcee Walls Simpson. In 1937, Elizabeth becomes a Girl Guide at the age of 11.",
  },
  {
    img: 'https://imgs.search.brave.com/XDOJELBTizk6Xs6ykRoMpXQfd0lhGHI_YIjoOVvtCAo/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/dGVwd0F0LXBlOWRT/R0sxWkVYS2JBSGFE/NCZwaWQ9QXBp',
    year: '1940s',
    description:
      'On the 13th of October, 1940. Elizabeth makes her first broadcast to the nation. On the 21st of April 1942, on her 16th birthday, Elizabeth carries out her first public engagement when she inspects the Grenadier Guards, of which she had been appointed colonel-in-chief. In 1944, she receives her first corgi. Susan, as an 18th birthday present.',
  },
];

const HomeTimeline = () => {
  return (
    <Box height='100vh' backgroundColor='lightgray'>
      <Stack
        direction='row'
        justifyContent='space-between'
        pr={12}
        pl={13}
        pt={3}
      >
        <Typography variant='h4' fontWeight='bold'>
          TIMELINE
        </Typography>
        <Stack direction='row' alignItems='center'>
          See more <ArrowForwardIcon />
        </Stack>
      </Stack>

      <Typography pl={13} mb={2}>
        Key dates in the life of the Queen, from her birth in April 1926 to her
        death in September 2022.
      </Typography>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        gap='20px'
        sx={{ flexDirection: { lg: 'row', xs: 'column' } }}
      >
        {window.innerWidth <= '720px' ? timelineInfo.slice(0, 1).map((info) => (
          <HomeTimelineCard
            img={info.img}
            description={info.description}
            year={info.year}
          />
        )) : timelineInfo.map((info) => (
          <HomeTimelineCard
            img={info.img}
            description={info.description}
            year={info.year}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default HomeTimeline;
