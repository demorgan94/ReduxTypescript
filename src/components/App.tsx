import React, { Fragment } from 'react';
import Header from './Header';
import Todos from './Todos';

const App: React.FC = () => {
  return (
    <Fragment>
      <Header title="ToDoList" />
      <Todos />
    </Fragment>
  );
}

export default App;
