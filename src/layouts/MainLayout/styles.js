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
    paddingTop: '1%',
    paddingLeft: '10%',
    paddingRight: '10%',
    zIndex: '12',
    width: '100%',
    color: '#131315',
    backgroundColor: '#f8f8fa',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
