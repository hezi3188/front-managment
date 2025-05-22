import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import useStyles from './customTextFieldStyle';

type Props = TextFieldProps;

const CustomTextField = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { classes } = useStyles();
  return <TextField className={classes.input} variant="outlined" inputRef={ref} {...props} />;
});

export default CustomTextField;
