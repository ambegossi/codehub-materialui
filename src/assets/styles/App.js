const containerFluid = {
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
};

const container = {
  ...containerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
};

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
};

const defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s',
};

const cardTitle = {
  margin: '0.5rem',
  fontSize: '1.3rem',
  '@media (min-width: 992px)': {
    fontSize: '1.5rem',
  },
  '@media (min-width: 1200px)': {
    fontSize: '2rem',
  },
};

const link = {
  color: '#2980B9',
  textDecoration: 'none',
  fontWeight: 'bold',
  '@media (max-width: 768px)': {
    fontSize: '0.8rem',
  },
  '@media (min-width: 992px)': {
    fontSize: '0.9rem',
  },
};

export {
  container,
  containerFluid,
  boxShadow,
  defaultBoxShadow,
  cardTitle,
  link,
};
