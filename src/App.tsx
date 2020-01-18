import React from 'react';
import Join from './components/Join';
import { Global, css } from '@emotion/core';

const App: React.FC = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #fafafa;
          }
        `}
      />
      <Join />
    </>
  );
};

export default App;
