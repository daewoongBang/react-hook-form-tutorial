import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

interface MessageProps {
  status: string;
  message: string;
  [x: string]: any;
}

export default function Message({ status, message, ...rest }: MessageProps): React.ReactElement {
  return (
    <div
      {...rest}
      css={{
        fontSize: '0.8em',
        color: 'red',
        margin: '5px 0px',
      }}
    >
      {message}
    </div>
  );
}
