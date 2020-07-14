import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actionTypes';

const AddTodo = () => {
  const dispatch = useDispatch();

  let input;
  return (
    <div className="grid-x align-center">
      <form
        className="cell small-10 medium-8 large-6"
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
          <input className="input-group-field expanded" placeholder="I want to do..." ref={(node) => { input = node; }} />
          <div className="input-group-button">
            <button className="button" type="submit">Add Todo</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
