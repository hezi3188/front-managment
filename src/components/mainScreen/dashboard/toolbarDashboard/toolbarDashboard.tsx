import React from 'react';
import useStyles from './toolbarDashboardStyle';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import axios from 'axios';
import { getUserFieldFromToken } from '../../../../utils/tokenUtils';

const HELLO_TEXT = ' שלום';
const LOGOUT_BUTTON_TEXT = 'יציאה';

const ToolbarDashboard: React.FC = () => {
  const { classes } = useStyles();
  const userName = getUserFieldFromToken('name') || getUserFieldFromToken('fullName') || getUserFieldFromToken('email');

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
    <div className={classes.toolbar}>
      <div className={classes.right}>
        <span className={classes.helloText}>
          {HELLO_TEXT} {userName}
        </span>
      </div>
      <div className={classes.left}>
        <Button className={clsx(classes.logoutButton)} variant="outlined" color="secondary" onClick={handleLogout}>
          {LOGOUT_BUTTON_TEXT}
        </Button>
      </div>
    </div>
  );
};

export default ToolbarDashboard;
