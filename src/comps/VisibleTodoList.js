import { connect, useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../actionTypes';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => !todo.completed);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => {
    dispatch(toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
