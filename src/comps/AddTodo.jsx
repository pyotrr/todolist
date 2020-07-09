import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actionTypes';

const AddTodo = () => {
  const dispatch = useDispatch();

  let input;
  return (
    <div className="grid-container">
      <form
        // className="grid-x large-centered"
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <div className="input-group">
          <input className="input-group-field" placeholder="I want to do..." ref={(node) => { input = node; }} />
          <div className="input-group-button">
            <button className="button" type="submit">Add Todo</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
