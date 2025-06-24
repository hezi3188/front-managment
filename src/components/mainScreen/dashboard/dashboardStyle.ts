import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#f7fafd',
    overflow: 'auto',
  },
  toolbarWrapper: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    marginTop: '10px',
    background: '#f7fafd',
  },
  root: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    gap: 24,
    padding: 24,
    boxSizing: 'border-box',
  },
}));

export default useStyles;
