import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import ScreenRouter from './screens/ScreenRouter';
import theme from './assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScreenRouter />
    </ThemeProvider>
  );
}

export default App;
