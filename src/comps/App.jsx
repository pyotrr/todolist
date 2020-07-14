import React from 'react';
import Footer from './footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = () => (
  <div className="grid-container">
    <div className="grid-x align-center">
      <div className="cell small-10 medium-8 large-6">
        <div className="top-bar-title align-center">
          <h2>TODO APP</h2>
        </div>
      </div>
    </div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
