import { Box, Container, Typography, Link, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      sx={{
        position: 'relative',
        borderTop: '2px solid #4e4e6b',
        backgroundColor: '#1a1a2e',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Divider
          sx={{
            position: 'absolute',
            top: 0,
            left: '25%',
            right: '25%',
            height: '2px',
            background: 'linear-gradient(to right, transparent, #3b82f6, transparent)',
          }}
        />
        <Typography variant="body1" sx={{ mb: 2 }}>
          © 2024 Raphael A Frimpong. All rights reserved.
        </Typography>
        <Link
          href="https://www.linkedin.com/in/raphael-a-frimpong"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}
        >
          <LinkedInIcon sx={{ mr: 1 }} />
          <Typography variant="body2">Connect with me on LinkedIn</Typography>
        </Link>
      </Container>
    </Box>
  );
}

export default Footer;


