import {Box, Typography} from '@mui/material';

export default function Footer() {
  return (
    <Box display="flex" p={2} alignItems="center" justifyContent="center">
      <Typography variant="body2">
        Made with ❤️ by Chris Cerne © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
