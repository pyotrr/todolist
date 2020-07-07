import React from "react";
import {Todo} from "./Todo";

export const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={todo.id} completed={todo.completed} onClick={() => onTodoClick(todo.id)} />
        ))}
    </ul>
);