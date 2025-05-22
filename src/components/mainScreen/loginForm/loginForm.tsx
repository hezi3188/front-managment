import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import useStyles from './loginFormStyle';

const USERNAME_LABEL = 'שם משתמש';
const PASSWORD_LABEL = 'סיסמה';
const LOGIN_BUTTON_TEXT = 'כניסה';

interface Props {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const LoginForm: React.FC<Props> = ({ setIsAuthenticated }) => {
  const { classes } = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_MANAGEMENT_BACK_KEY}/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      setIsAuthenticated(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Login failed:', error.response?.data?.message || error.message);
      } else {
        console.error('Error during login:', error);
      }
    }
  };

  return (
    <>
      <TextField
        className={classes.input}
        label={USERNAME_LABEL}
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className={classes.input}
        label={PASSWORD_LABEL}
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className={classes.button} variant="contained" color="primary" onClick={handleLogin}>
        {LOGIN_BUTTON_TEXT}
      </Button>
    </>
  );
};

export default LoginForm;
