import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GenericForm from '../../generic/genericForm/genericForm';
import CustomTextField from '../../generic/customTextField/customTextField';
import { LOGIN_SCHEMA } from './loginSchema';

const USERNAME_LABEL = 'אימייל';
const PASSWORD_LABEL = 'סיסמה';
const LOGIN_BUTTON_TEXT = 'כניסה';
const CLICK_HERE_TEXT = 'לחץ כאן';
const NO_ACCOUNT_ROW_TEXT = 'אם אין לך חשבון להרשמה';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  onSignupClick?: () => void;
}

const LoginForm: React.FC<Props> = ({ setIsAuthenticated, onSignupClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(LOGIN_SCHEMA),
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

  const fields = [
    {
      key: 'email',
      label: USERNAME_LABEL,
      inputProps: { ...register('email'), Component: CustomTextField },
      error: !!errors.email,
      helperText: errors.email?.message,
      required: true,
    },
    {
      key: 'password',
      label: PASSWORD_LABEL,
      type: 'password',
      inputProps: { ...register('password'), Component: CustomTextField },
      error: !!errors.password,
      helperText: errors.password?.message,
      required: true,
    },
  ];

  return (
    <GenericForm
      title={LOGIN_BUTTON_TEXT}
      fields={fields}
      buttonText={LOGIN_BUTTON_TEXT}
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      onClose={onSignupClick}
      switchAuth={{
        text: NO_ACCOUNT_ROW_TEXT,
        linkText: CLICK_HERE_TEXT,
        onClick: onSignupClick || (() => {}),
      }}
    />
  );
};

export default LoginForm;
