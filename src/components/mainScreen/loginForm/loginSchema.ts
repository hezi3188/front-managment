import * as yup from 'yup';

export const LOGIN_SCHEMA = yup
  .object({
    email: yup.string().required('שדה חובה').email('אימייל לא תקין'),
    password: yup.string().required('שדה חובה'),
  })
  .required();
