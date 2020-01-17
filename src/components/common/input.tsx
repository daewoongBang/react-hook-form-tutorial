import React from 'react';

interface InputProps {
  name: any;
  label?: string;
  register?: any;
  errors?: any;
}

export default function Input({ name, label, register, errors, ...rest }: InputProps): React.ReactElement {
  const errorMsg = errors && errors[name] ? errors[name].message : '';
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}

      <input className={errorMsg ? 'error' : ''} name={name} ref={register} {...rest} />
      <div>{errorMsg}</div>
    </div>
  );
}
