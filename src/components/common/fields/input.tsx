import React from 'react';
import Message from './message';
/** @jsx jsx */
import { jsx } from '@emotion/core';

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
    <div
      css={{
        marginBottom: '10px',
      }}
    >
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

      <input
        css={{
          width: '100%',
          boxSizing: 'border-box',
          borderRadius: '3px',
          border: '1px solid #c7c7c7',
          padding: '10px',
          fontSize: '1em',
        }}
        className={errorMsg ? 'error' : ''}
        name={name}
        ref={register}
        {...rest}
      />
      {errorMsg && <Message status="error" message={errorMsg} />}
    </div>
  );
}
