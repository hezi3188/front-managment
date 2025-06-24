import React from 'react';
import useStyles from './dashboardAnalizeStyle';

const ANALYZE_TEXT = 'dashboardAnalize';

const DashboardAnalize: React.FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.text}>{ANALYZE_TEXT}</span>
    </div>
  );
};

export default DashboardAnalize;
