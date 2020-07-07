import React from 'react'
import {Footer} from './footer'
import AddTodo from './AddTodo'
import {VisibleTodoList} from './VisibleTodoList'

export const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)
