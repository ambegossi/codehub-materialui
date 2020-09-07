export default (theme) => ({
  root: {
    display: 'flex',
    flex: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    backgroundColor: 'transparent',
    height: '70px',
    ...theme.mixins.toolbar,
  },
  main: {
    flexGrow: 1,
  },
  content: {
    position: 'absolute',
    top: '0',
    paddingLeft: '10%',
    paddingRight: '10%',
    zIndex: '12',
    color: '#FFFFFF',
    width: '80%',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
