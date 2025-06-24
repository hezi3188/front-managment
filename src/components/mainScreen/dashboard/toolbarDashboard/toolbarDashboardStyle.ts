import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  toolbar: {
    width: '95%',
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
    borderRadius: 12,
    padding: '0 24px',
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
    marginBottom: 24,
  },
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  helloText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: 0.5,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  logoutButton: {
    color: '#fff',
    borderColor: '#fff',
    fontWeight: 600,
    fontSize: 16,
    '&:hover': {
      background: 'rgba(255,255,255,0.08)',
      borderColor: '#fff',
    },
  },
});

export default useStyles;
