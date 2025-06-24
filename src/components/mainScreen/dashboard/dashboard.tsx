import React from 'react';
import useStyles from './dashboardStyle';
import ToolbarDashboard from './toolbarDashboard/toolbarDashboard';
import DashboardAnalize from './dashboardAnalize/dashboardAnalize';
import DashboardCards from './dashboardCards/dashboardCards';

const Dashboard: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.toolbarWrapper}>
        <ToolbarDashboard />
      </div>
      <div className={classes.root}>
        <DashboardAnalize />
        <DashboardCards />
      </div>
    </div>
  );
};

export default Dashboard;
