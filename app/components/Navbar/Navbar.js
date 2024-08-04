'use client';
import Link from 'next/link';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <AppBar position="relative" sx={{ borderBottom: '2px solid #4e4e6b', justifyContent: 'center', backgroundColor: '#1a1a2e' }}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1280px', mx: 'auto', px: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/' passHref>
            <Typography
              variant="h6"
              component="a"
              color="primary"
              sx={{
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                mx: 2,
                '&:hover': {
                  color: '#1e3a8a', // Darker blue on hover
                },
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href='/pantry' passHref>
            <Typography
              variant="h6"
              component="a"
              color="primary"
              sx={{
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                mx: 2,
                '&:hover': {
                  color: '#1e3a8a', // Darker blue on hover
                },
              }}
            >
              Inventory
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}



