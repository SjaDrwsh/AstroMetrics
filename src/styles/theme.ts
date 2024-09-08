import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b0b0b0',
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
        standardError: {
            backgroundColor: '#d32f2f',
            icon: { color: '#ff6b6b' }
          },
          standardWarning: {
            backgroundColor: '#f57c00',
            icon: { color: '#ffa726' }
          },
          standardInfo: {
            backgroundColor: '#0288d1',
            icon: { color: '#29b6f6' }
          },
          standardSuccess: {
            backgroundColor: '#388e3c',
            icon: { color: '#66bb6a' }
          },
          icon: {
            color: '#ffffff'
          },
      }
    }
  }
});

export default darkTheme;
