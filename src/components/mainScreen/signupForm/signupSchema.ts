import * as yup from 'yup';

const REQUIRED_FIELD = 'שדה חובה';
const EMAIL_INVALID = 'אימייל לא תקין';
const PASSWORDS_MUST_MATCH = 'הסיסמאות לא תואמות';

export const SIGNUP_SCHEMA = yup
  .object({
    fullName: yup.string().required(REQUIRED_FIELD),
    email: yup.string().required(REQUIRED_FIELD).email(EMAIL_INVALID),
    password: yup.string().required(REQUIRED_FIELD),
    confirmPassword: yup
      .string()
      .required(REQUIRED_FIELD)
      .oneOf([yup.ref('password')], PASSWORDS_MUST_MATCH),
  })
  .required();
