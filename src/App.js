import React from 'react';
import { ThemeProvider } from 'styled-components';

import './App.css';
import Home from './pages';

function App() {
  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
