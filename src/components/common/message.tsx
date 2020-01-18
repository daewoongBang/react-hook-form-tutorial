import React from 'react';

interface MessageProps {
  status: string;
  message: string;
  [x: string]: any;
}

export default function Message({ status, message, ...rest }: MessageProps): React.ReactElement {
  return <div {...rest}>{message}</div>;
}
