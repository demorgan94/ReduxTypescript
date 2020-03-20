import React, { Fragment } from 'react';
import { Header } from './Header';
import { ToDoForm } from './ToDoForm';

const App: React.FC = () => {
  return (
    <Fragment>
      <Header title="ToDoList" />
      <ToDoForm />
    </Fragment>
  );
}

export default App;
