import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './assets/styles/theme';

function App() {
  return <ThemeProvider theme={theme} />;
}

export default App;
