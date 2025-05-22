import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import useStyles from './customButtonStyle';

interface Props extends ButtonProps {}

const CustomButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { classes } = useStyles();
  return <Button ref={ref} className={classes.button} variant="contained" color="primary" {...props} />;
});

export default CustomButton;
