//import React from "react";
import {combineReducers} from 'redux';
import {ADD_TODO, TOGGLE_TODO, VISIBILITY_FILTERS} from "./actionTypes";


const todos = (state = [], action) => {
    switch(action.type) {
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if(index === action.index) {
                    return Object.assign({}, todo, {completed: !todo.completed});
                }
                return todo;
            })
        case ADD_TODO:
            return [state, {text: action.text, completed: false}];
        default:
            return state;
    }
};

const {SHOW_ALL} = VISIBILITY_FILTERS;

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch(action.type) {
        case VISIBILITY_FILTERS:
            return action.filter;
        default:
            return state;
    }
};

export const todoApp = combineReducers({todos, visibilityFilter})
