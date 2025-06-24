import React, { useState, useEffect, useRef } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import useStyles from './mainScreenStyles';
import LoginForm from './loginForm/loginForm';
import Dashboard from './dashboard/dashboard';
import SignupForm from './signupForm/signupForm';

const TITLE_TEXT = 'מערכת לניהול הוצאות';
const LOAD_TEXT = 'טוען...';

const REFRESH_INTERVAL_MS = 1 * 15 * 60 * 1000;

const MainScreen: React.FC = () => {
  const { classes } = useStyles();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const refreshToken = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_MANAGEMENT_BACK_KEY}/auth/refresh`,
        {},
        { withCredentials: true }
      );
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      setIsAuthenticated(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Failed to refresh token:', error.response?.data?.message || error.message);
      } else {
        console.error('Error refreshing token:', error);
      }
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshToken();

    intervalRef.current = setInterval(() => {
      refreshToken();
    }, REFRESH_INTERVAL_MS);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (loading) {
    return (
      <div className={classes.root}>
        <CircularProgress />
        <Typography>{LOAD_TEXT}</Typography>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <>
          <Typography className={classes.title}>{TITLE_TEXT}</Typography>
          {showSignup ? (
            <SignupForm setIsAuthenticated={setIsAuthenticated} onClose={() => setShowSignup(false)} />
          ) : (
            <LoginForm setIsAuthenticated={setIsAuthenticated} onSignupClick={() => setShowSignup(true)} />
          )}
        </>
      )}
    </div>
  );
};

export default MainScreen;
