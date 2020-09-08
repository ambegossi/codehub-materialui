import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#936cf6',
      main: '#7848F4',
      dark: '#5432aa',
    },
    secondary: {
      light: '#e1e4e8',
      main: '#dadee3',
      dark: '#989b9e',
    },
    white: {
      main: '#FFF',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '3.5rem',
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: '#FFF',
      },
      containedSecondary: {
        color: '#7848F4',
      },
    },
  },
});

export default theme;
