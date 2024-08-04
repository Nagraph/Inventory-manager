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



//working

/*'use client'
import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Toolbar, Box, IconButton, Typography } from '@mui/material';
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
    <AppBar position="static" sx={{ border: '2px solid #3b82f6' }}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1280px', mx: 'auto', px: 4, py: 2 }}>
        <Link href='/' passHref>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
              Home
            </Typography>
        </Link>
        <Box>
          <Link href='/pantry' passHref>
            <Typography variant="h6" component="a" color="inherit">
              Pantry
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
*/

//Older
/*'use client'
import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Toolbar, Box, IconButton, Typography } from '@mui/material';
import { useState, useEffect } from 'react'
 

  
export default function Navbar() {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
      }, [])
    return (
        <AppBar position="static" sx={{ border: '2px solid #3b82f6' }}>
            <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1280px', mx: 'auto', px: 4, py: 2 }}>
                <Link href='/' passHref>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Image src="/next.svg" alt="pantry" width={74} height={29} />
                    </IconButton>
                </Link>
                <Box>
                    <Link href='/pantry' passHref>
                        <Typography variant="h6" component="a" color="inherit">
                            Pantry
                        </Typography>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}


/*import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="border-2 border-blue-500 flexBetween max-container padding-container relative z-30 py-5">
            <Link href='/'>
            <Image src="/next.svg" alt="pantry" width={74} height={29} />
            </Link>
            <Link href='/pantry'>Pantry</Link>
        </nav>
    )
}
*/