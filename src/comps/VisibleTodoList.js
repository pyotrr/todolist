import {connect} from 'react-redux';
import {toggleTodo} from '../actionTypes';
import {TodoList} from './TodoList';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed)
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed)
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
