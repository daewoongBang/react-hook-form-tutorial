import React from 'react';
import Message from './message';

interface SelectOption {
  label: string;
  value: any;
}

interface SelectProps {
  name: any;
  label?: string;
  options: SelectOption[];
  register?: any;
  errors?: any;
  [x: string]: any;
}

export default function Select({ name, label, options, register, errors, ...rest }: SelectProps): React.ReactElement {
  const errorMsg = errors && errors[name] ? errors[name].message : '';
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <select name={name} {...rest} ref={register}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMsg && <Message status="error" message={errorMsg} />}
    </div>
  );
}
