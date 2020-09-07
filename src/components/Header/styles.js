import { container } from '../../assets/styles/App';

const styles = (theme) => ({
  appBar: {
    height: '65px',
    display: 'flex',
    border: '0',
    borderRadius: '3px',
    padding: '0.625rem 0',
    marginBottom: '20px',
    color: '#555',
    width: '100%',
    backgroundColor: '#fff',
    boxShadow:
      '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'relative',
    zIndex: 'unset',
  },
  absolute: {
    position: 'absolute',
    zIndex: '1100',
  },
  fixed: {
    position: 'fixed',
    zIndex: '1100',
  },
  container: {
    ...container,
    maxHeigth: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  flex: {
    flex: 1,
  },
  brand: {
    padding: 5,
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  appResponsive: {
    margin: '20px 10px',
  },
  primary: {
    background: `linear-gradient(-47deg, ${theme.palette.primary.light} 10%, ${theme.palette.primary.main} 100%)`,
    color: '#FFFFFF',
  },
  transparent: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    paddingTop: '25px',
    color: '#FFFFFF',
  },
});

export default styles;
