import React, { useState } from 'react';
import Header from './Header';
import TodoList from './TodosList';

const TodoContainer = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Setup development environment',
            completed: true,
        },
        {
            id: 2,
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id: 3,
            title: 'Deploy to live server',
            completed: false,
        },
    ]);
    const handleChange = (id) => {
        todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                console.log(todo)
            }
            return todo;
        })

    };
    return (
        <div>
            <Header />
            <TodoList todos={todos} handleChangeProps={handleChange} />
        </div>
    );
};

export default TodoContainer;
