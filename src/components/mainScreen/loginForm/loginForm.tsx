import React from 'react';
import axios from 'axios';
import useStyles from './loginFormStyle';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomButton from '../../generic/customButton/customButton';
import CustomTextField from '../../generic/customTextField/customTextField';

const USERNAME_LABEL = 'שם משתמש';
const PASSWORD_LABEL = 'סיסמה';
const LOGIN_BUTTON_TEXT = 'כניסה';
const EMAIL_REQUIRED = 'שדה חובה';
const EMAIL_INVALID = 'אימייל לא תקין';
const PASSWORD_REQUIRED = 'שדה חובה';

const schema = yup
  .object({
    email: yup.string().required(EMAIL_REQUIRED).email(EMAIL_INVALID),
    password: yup.string().required(PASSWORD_REQUIRED),
  })
  .required();

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const LoginForm: React.FC<Props> = ({ setIsAuthenticated }) => {
  const { classes } = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_MANAGEMENT_BACK_KEY}/auth/login`, data, {
        withCredentials: true,
      });
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
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <CustomTextField
        label={USERNAME_LABEL}
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <CustomTextField
        label={PASSWORD_LABEL}
        type="password"
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <CustomButton className={classes.button} type="submit" disabled={isSubmitting}>
        {LOGIN_BUTTON_TEXT}
      </CustomButton>
    </form>
  );
};

export default LoginForm;
