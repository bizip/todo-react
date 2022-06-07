import React, { useState } from 'react';


const InputTodo = (props) => {
    const [title, setTitle] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodoProps(title);
        setTitle('');
    }
    return <form onSubmit={handleSubmit} className="form-container">
        <input
            type="text"
            className="input-text"
            placeholder="Add todo..."
            value={title}
            name="title"
            onChange={handleChange}
        />
        <button className="input-submit">Submit</button>
    </form>
};

export default InputTodo;