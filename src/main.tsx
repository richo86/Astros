import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { LocationProvider } from './contexts/LocationContext.tsx';
import { theme } from './theme/theme';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <LocationProvider>
          <App />
        </LocationProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
