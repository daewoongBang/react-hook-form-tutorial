import React from 'react';
import Message from './message';
/** @jsx jsx */
import { jsx } from '@emotion/core';

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
      {label && (
        <label
          css={{
            display: 'block',
            margin: '5px 0px',
          }}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <select
        css={{
          border: '1px solid #c7c7c7',
          background: 'white',
          borderRadius: '0px',
          fontSize: '1em',
        }}
        name={name}
        {...rest}
        ref={register}
      >
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
