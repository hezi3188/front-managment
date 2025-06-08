import React from 'react';
import useStyles from './genericFormStyle';
import CustomButton from '../customButton/customButton';

interface FieldProps {
  key: string;
  label: string;
  type?: string;
  inputProps: any;
  error?: boolean;
  helperText?: string;
  required?: boolean;
}

interface SwitchAuthProps {
  text: string;
  linkText: string;
  onClick: () => void;
}

interface Props {
  title: string;
  fields: FieldProps[];
  buttonText: string;
  onSubmit: (e?: React.BaseSyntheticEvent) => void;
  isSubmitting?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  switchAuth?: SwitchAuthProps;
}

const GenericForm: React.FC<Props> = ({ title, fields, buttonText, onSubmit, isSubmitting, children, switchAuth }) => {
  const { classes } = useStyles();

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <div className={classes.headerRow}>
        <span className={classes.title}>{title}</span>
      </div>
      <div className={classes.centerFields}>
        {fields.map((field) => (
          <field.inputProps.Component
            key={field.key}
            label={
              field.required ? (
                <span>
                  {field.label}
                  <span className={classes.requiredStar}>*</span>
                </span>
              ) : (
                field.label
              )
            }
            type={field.type}
            {...field.inputProps}
            error={field.error}
            helperText={field.helperText}
          />
        ))}
      </div>
      {switchAuth && (
        <div className={classes.switchAuthRow}>
          <span>{switchAuth.text}</span>
          <span className={classes.switchAuthLink} tabIndex={0} role="button" onClick={switchAuth.onClick}>
            {switchAuth.linkText}
          </span>
        </div>
      )}
      <CustomButton className={classes.button} type="submit" disabled={isSubmitting}>
        {buttonText}
      </CustomButton>
      {children}
    </form>
  );
};

export default GenericForm;
