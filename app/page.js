'use client';
import React from 'react';
import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Lottie from 'lottie-react';

import inventoryAnimation from '../public/animation-invent.json'; 
import { DarkMode } from '@mui/icons-material';

export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 4, backgroundColor: theme.palette.primary.dark }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Trace
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Welcome to your inventory tracker
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Lottie
          animationData={inventoryAnimation}
          loop={true}
          style={{ height: '300px', width: '300px' }}
        />
      </Box>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Link href="/pantry" passHref>
          <Button variant="contained" color='secondary' sx={{ px: 4, py: 1.5}}
          >
            Go to Inventory
          </Button>
        </Link>
      </Box>
    </Box>
  );
}



/*'use client'
import React from 'react';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/pantry">Go to Post 1</Link>
        </li>
      </ul>
    </div>
  )
}
*/
