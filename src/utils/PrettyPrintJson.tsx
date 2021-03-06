import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

interface PrintJsonProps {
  title?: string;
  data: any;
}

const PrettyPrintJson = ({ title, data }: PrintJsonProps): React.ReactElement => (
  <div
    css={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '10px',
    }}
  >
    {title}
    <pre
      css={{
        background: 'black',
        color: 'white',
        padding: '10px',
      }}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  </div>
);

export default PrettyPrintJson;
