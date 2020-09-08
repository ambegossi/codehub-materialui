import bgHomeImage from '../../assets/images/bg-home.jpg';

const styles = (theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
  mainContainer: {
    height: '80vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: `url(${bgHomeImage}) no-repeat center`,
    backgroundSize: 'cover',
    borderRadius: '10px',
    paddingTop: '100px',
    paddingLeft: '8%',
  },
  title: {
    maxWidth: '400px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '3px',
    color: theme.palette.white.main,
  },
  subtitle: {
    marginTop: theme.spacing(2),
    color: theme.palette.white.main,
  },
  eventImage: {
    width: '100%',
    borderRadius: '10px 10px 0 0',
  },
  eventContent: {
    backgroundColor: theme.palette.white.main,
    borderRadius: '0 0 10px 10px',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  eventDescription: {
    maxHeight: '92px',
    overflow: 'hidden',
  },
  eventTitle: {
    fontWeight: 'bold',
  },
  eventMonth: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  eventDay: {
    fontWeight: 'bold',
  },
});

export default styles;
