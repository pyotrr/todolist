import { combineReducers } from 'redux';
import { VisibilityFilters } from './actionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map((todo) => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    case 'ADD_TODO':
      return [...state, { text: action.text, completed: false, id: action.id }];
    default:
      return state;
  }
};

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({ todos, visibilityFilter });

export default todoApp;
