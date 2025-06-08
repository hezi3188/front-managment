import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GenericForm from '../../generic/genericForm/genericForm';
import CustomTextField from '../../generic/customTextField/customTextField';
import { SIGNUP_SCHEMA } from './signupSchema';
import axios from 'axios';
import useStyles from './signupFormStyle';

const SIGNUP_TITLE = 'הרשמה';
const EMAIL_LABEL = 'אימייל';
const PASSWORD_LABEL = 'סיסמה';
const CONFIRM_PASSWORD_LABEL = 'אימות סיסמה';
const SIGNUP_BUTTON_TEXT = 'הרשמה';
const HAVE_ACCOUNT_TEXT = 'יש לך חשבון?';
const CLICK_HERE_TEXT = 'לחץ כאן';
const FULLNAME_LABEL = 'שם מלא';
const GENERIC_ERROR_TEXT = 'אירעה שגיאה, נסה שוב';

interface FormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  onClose: () => void;
}

const SignupForm: React.FC<Props> = ({ setIsAuthenticated, onClose }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { classes } = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(SIGNUP_SCHEMA),
  });

  const onSubmit = async (data: FormValues) => {
    setErrorMessage(null);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_MANAGEMENT_BACK_KEY}/auth/signup`,
        {
          name: data.fullName,
          email: data.email,
          password: data.password,
        },
        { withCredentials: true }
      );
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      setIsAuthenticated(true);
      onClose();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message || GENERIC_ERROR_TEXT);
      } else {
        setErrorMessage(GENERIC_ERROR_TEXT);
      }
    }
  };

  const fields = [
    {
      key: 'fullName',
      label: FULLNAME_LABEL,
      inputProps: { ...register('fullName'), Component: CustomTextField },
      error: !!errors.fullName,
      helperText: errors.fullName?.message,
      required: true,
    },
    {
      key: 'email',
      label: EMAIL_LABEL,
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
    {
      key: 'confirmPassword',
      label: CONFIRM_PASSWORD_LABEL,
      type: 'password',
      inputProps: { ...register('confirmPassword'), Component: CustomTextField },
      error: !!errors.confirmPassword,
      helperText: errors.confirmPassword?.message,
      required: true,
    },
  ];

  return (
    <GenericForm
      title={SIGNUP_TITLE}
      fields={fields}
      buttonText={SIGNUP_BUTTON_TEXT}
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      onClose={onClose}
      switchAuth={{
        text: HAVE_ACCOUNT_TEXT,
        linkText: CLICK_HERE_TEXT,
        onClick: onClose,
      }}
    >
      {errorMessage && <div className={classes.errorMessage}>{errorMessage}</div>}
    </GenericForm>
  );
};

export default SignupForm;
