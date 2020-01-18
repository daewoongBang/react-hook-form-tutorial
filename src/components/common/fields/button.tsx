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
      <button {...rest} />
    </div>
  );
}
