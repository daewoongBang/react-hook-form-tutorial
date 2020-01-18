import React from 'react';
import Message from './message';

interface InputProps {
  name: any;
  label?: string;
  register?: any;
  errors?: any;
  [x: string]: any;
}

export default function Input({ name, label, register, errors, ...rest }: InputProps): React.ReactElement {
  const errorMsg = errors && errors[name] ? errors[name].message : '';
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}

      <input className={errorMsg ? 'error' : ''} name={name} ref={register} {...rest} />
      {errorMsg && <Message status="error" message={errorMsg} />}
    </div>
  );
}
