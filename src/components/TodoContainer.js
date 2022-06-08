import React, { useState } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodosList';
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: 'Setup development environment',
            completed: true,
        },
        {
            id: uuidv4(),
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id: uuidv4(),
            title: 'Deploy to live server',
            completed: false,
        },
    ]);
    const handleChange = (id) => {
        todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
    };

    const delTodo = (id) => {
        const filteredTodo = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodo);
    };
    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    const setUpdate = (updatedTitle, id) => {
        todos.map(todo => {
            if (todo.id === id) {
                todo.title = updatedTitle;
                setTodos([...todos]);
            }
            return todo;
        })


    }

    return (
        <div className="container">
            <div className="inner">
                <Header />
                <InputTodo addTodoProps={addTodoItem} />
                <TodoList deleteTodoProps={delTodo} todos={todos} handleChangeProps={handleChange} setUpdate={setUpdate} />
            </div>
        </div>

    );
};

export default TodoContainer;
