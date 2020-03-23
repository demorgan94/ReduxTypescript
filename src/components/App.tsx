import React, { Fragment } from 'react';
import Header from './Header';
import User from 'pages/Users';

const App: React.FC = () => {
  return (
    <Fragment>
      <Header title="React/Redux + Typescript" />
      <User />
    </Fragment>
  );
}

export default App;
