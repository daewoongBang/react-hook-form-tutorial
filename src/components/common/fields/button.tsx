import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

interface ButtonProps {
  theme?: 'RED' | 'ORANGE' | 'YELLOW' | 'GREEN' | 'BLUE' | 'NAVY' | 'PURPLE' | 'BALCK' | 'WHITE';
  [x: string]: any;
}

export default function Button({ theme, ...rest }: ButtonProps): React.ReactElement {
  return (
    <div
      css={{
        margin: '10px 0px',
      }}
    >
      <button
        css={{
          width: '100%',
          fontSize: '1.2em',
          fontWeight: 600,
          background: '#2767b7',
          borderRadius: '3px',
          padding: '20px',
          color: 'white',
        }}
        {...rest}
      />
    </div>
  );
}
