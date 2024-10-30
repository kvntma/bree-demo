import { Box, Typography, Link } from '@mui/material';

const HelpPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 2
      }}
    >
      <Typography variant="h4" gutterBottom>
        Help & Support
      </Typography>
      <Typography variant="inter400" gutterBottom>
        If you have any questions or need further assistance, feel free to reach
        out to me through the following channels:
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="inter500">Contact Information</Typography>
        <Link
          href="https://github.com/kvntma"
          target="_blank"
          rel="noopener"
          sx={{ display: 'block', marginTop: 1 }}
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/kvntma"
          target="_blank"
          rel="noopener"
          sx={{ display: 'block', marginTop: 1 }}
        >
          LinkedIn
        </Link>
        <Link
          href="https://kevin-ma.vercel.app/"
          target="_blank"
          rel="noopener"
          sx={{ display: 'block', marginTop: 1 }}
        >
          Personal Website: Kevin Ma
        </Link>
        <Link
          href="mailto:kvntma@gmail.com"
          sx={{ display: 'block', marginTop: 1 }}
        >
          Email: kvntma@gmail.com
        </Link>
      </Box>
    </Box>
  );
};

export default HelpPage;
