import React from 'react';

const PrettyPrintJson = (data: any): React.ReactElement => (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

export default PrettyPrintJson;
