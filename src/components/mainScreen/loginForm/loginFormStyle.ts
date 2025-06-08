import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  centerFields: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    width: '100%',
  },
});

export default useStyles;
