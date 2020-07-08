import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actionTypes';

const AddTodo = () => {
//  const dispatch = useDispatch();
//  const costam = useSelector((state) => state.costam)
  const dispatch = useDispatch();

  let input;
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}
      >
        <input ref={(node) => { input = node; }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
