import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '99vw',
    height: '97vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 4),
    fontSize: '16px',
  },
}));

export default useStyles;
