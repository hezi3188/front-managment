import { prefixer } from 'stylis';
import { StrictMode } from 'react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { createRoot } from 'react-dom/client';

import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App.tsx';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = () =>
  createTheme({
    direction: 'rtl',
  });

createRoot(document.getElementById('root')!).render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </CacheProvider>
);
