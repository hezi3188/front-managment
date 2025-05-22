import React, { useEffect, useRef } from 'react';
import { Button, Typography } from '@mui/material';
import useStyles from './authenticatedViewStyle';
import axios from 'axios';

const AUTHENTICATED_TEXT = 'You are in!';
const LOGOUT_BUTTON_TEXT = 'Logout';

const AuthenticatedView: React.FC = () => {
  const { classes } = useStyles();

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_MANAGEMENT_BACK_KEY}/auth/logout`, {}, { withCredentials: true });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      localStorage.removeItem('accessToken');
      window.location.reload();
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{AUTHENTICATED_TEXT}</Typography>
      <Button className={classes.button} variant="contained" color="secondary" onClick={handleLogout}>
        {LOGOUT_BUTTON_TEXT}
      </Button>
    </div>
  );
};

export default AuthenticatedView;
