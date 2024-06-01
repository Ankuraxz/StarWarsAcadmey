// src/App.js
import React from 'react';
import { MantineProvider } from '@mantine/core';
import StarWarsAcademy from './components/StarWarsAcademy';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <StarWarsAcademy />
    </MantineProvider>
  );
}

export default App;
