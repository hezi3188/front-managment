import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    flex: '1 1 70%',
    border: '2px solid #222',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    background: '#fff',
  },
  text: {
    fontSize: 22,
    fontWeight: 600,
  },
}));

export default useStyles;
