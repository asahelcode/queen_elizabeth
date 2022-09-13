import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import YoungQueen from '../assets/youngElizabeth.webp';
import YoungEliza2 from '../assets/YQ.webp';
import ElizaWedding from '../assets/220px-Elizabeth_and_Philip_1953.webp';
import OldEliza from '../assets/vexEliza.webp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeBiography = () => {
  return (
    <Box height='110vh' backgroundColor='lightgray' pt={2}>
      <Typography
        sx={{ ml: { lg: '8em', xs: '1em' }, textAlign: { xs: 'center' } }}
        mb={2}
      >
        <Typography
          fontWeight='bold'
          sx={{ fontSize: { lg: '1.8em', xs: '1.2em' } }}
        >
          BIOGRAPHY
        </Typography>
        A short account of Queen Elizabeth's Life
      </Typography>
      <Stack>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='flex-start'
          gap='18px'
          sx={{ display: { lg: 'flex', xs: 'none' } }}
        >
          <Box>
            <img
              src={YoungQueen}
              alt=''
              style={{ width: '15em', height: '15em' }}
            />
          </Box>
          <Box>
            <img
              src={YoungEliza2}
              alt=''
              style={{ width: '25em', height: '15em', objectFit: 'cover' }}
            />
          </Box>
          <Typography fontSize='0.8em' fontFamily='Fira Mono' lineHeight='27px'>
            Elizabeth Alexandra Mary Windsor was born in
            <br />
            Mayfair, London, as the first child of the Duke &<br /> Duchess of
            York (later King Georgee VI and Queen
            <br />
            Elizabeth). Her father accended to the throne in 1936
            <br />
            upon the abdication of his brother. King Edward VIII,
            <br /> making Elizabeth the heir presumptive. She was
            <br />
            educated privately at home and began to undertake
            <br />
            public duties during the Second World War,serving
            <br />
            in the Auxillary Territorial Service.
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='flex-start'
          gap='13px'
          ml={4}
          mt={2}
          sx={{ flexDirection: { xs: 'column', lg: 'row' } }}
        >
          <Box sx={{ width: { xs: '100%', lg: 'inherit' } }}>
            <img
              src={ElizaWedding}
              alt=''
              style={{
                width: '15em',
                height: '23em',
                marginRight: '20px',
                objectFit: 'cover',
              }}
              className='res-image'
            />
          </Box>
          <Typography fontSize='0.8em' fontFamily='Fira Mono' lineHeight='27px'>
            In November 1947, she married Philip Mountbatten, a
            <br />
            former prince of Greece and Denmark, and their
            <br /> marriage lasted 73 years until his death in April 2021.
            <br />
            They had four children; Charles III; Anne, Princess <br />
            Royal;Prince Andrew, Duke of York;and Prince
            <br /> Edward, Earl of Wessex, Elizabeth II was Queen of
            <br />
            the United Kingdom from 6 February 1952 until her
            <br />
            death in 2022. Her reign of 70 years and 214 days
            <br />
            was the longest of any British monarch and the
            <br />
            second-longest recorded of any monarch of a
            <br />
            sovereign country. At the time of her death,
            <br />
            Elizabeth was also the Queen of 14 other Commonwealth
            <br />
            realms in addition to the United Kingdom.
            <br />
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='flex-start'
              fontWeight='bold'
              mt={1}
            >
              Read more <ArrowForwardIcon />
            </Stack>
          </Typography>
          <Box>
            <img
              src={OldEliza}
              alt=''
              style={{ width: '25.8em', height: '23em', objectFit: 'cover' }}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeBiography;
