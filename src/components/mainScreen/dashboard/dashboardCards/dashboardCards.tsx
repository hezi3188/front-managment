import React from 'react';
import useStyles from './dashboardCardsStyle';

const CARDS_TEXT = 'dashboardCards';

const DashboardCards: React.FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.text}>{CARDS_TEXT}</span>
    </div>
  );
};

export default DashboardCards;
