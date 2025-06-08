import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  errorMessage: {
    color: '#d32f2f',
    marginTop: 8,
    textAlign: 'center',
    width: '100%',
  },
}));

export default useStyles;
