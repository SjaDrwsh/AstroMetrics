import React from 'react';
import { AstroMetricsDashboard } from './components/astroMetricsDashboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import ErrorBoundary from './components/errorBoundary';
import darkTheme from './styles/theme';


export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ErrorBoundary>
        <Container>
          <AstroMetricsDashboard />
        </Container>
      </ErrorBoundary>
    </ThemeProvider>
  );
};