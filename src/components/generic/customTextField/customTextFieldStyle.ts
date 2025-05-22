import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  input: {
    width: '300px',
    marginBottom: theme.spacing(2),
    '& input': {
      padding: theme.spacing(1.5),
    },
  },
}));

export default useStyles;
