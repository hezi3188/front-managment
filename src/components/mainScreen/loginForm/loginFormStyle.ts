import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '99vw',
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
  input: {
    width: '300px',
    marginBottom: theme.spacing(2),
    '& input': {
      padding: theme.spacing(1.5),
    },
  },
  link: {
    marginTop: theme.spacing(1),
    fontSize: '14px',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  button: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 4),
    fontSize: '16px',
  },
}));

export default useStyles;
