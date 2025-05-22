import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  button: {
    width: '100%',
    fontWeight: 700,
    fontSize: 16,
    borderRadius: 8,
    marginTop: 8,
    boxShadow: '0 2px 8px 0 rgba(60,72,88,0.10)',
  },
}));

export default useStyles;
