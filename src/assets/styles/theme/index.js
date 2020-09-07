import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7848F4',
      main: '#431ba8',
      dark: '#26115c',
    },
    secondary: {
      light: '#d9d9d9',
      main: '#131315',
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
      fontSize: '1.5rem',
      '@media (min-width: 992px)': {
        fontSize: '2rem',
      },
      '@media (min-width: 1200px)': {
        fontSize: '2.5rem',
      },
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#d9d9d9',
        color: '#7848F4',
      },
      containedSecondary: {
        backgroundColor: '#7848F4',
        color: '#FFF',
      },
    },
  },
});

export default theme;
