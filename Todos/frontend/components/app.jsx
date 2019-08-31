import React from 'react';
import TLC from "./todos/todo_list_container";
import TFC from "./todos/todo_form_container";

const App = (props) => {
  return (
    <div>
      <TLC />
      <TFC />
    </div>
  );
};

export default App