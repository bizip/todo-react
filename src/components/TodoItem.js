import React, { useState } from 'react';

const TodoItem = (props) => (
    <ul>
        <li>
            <input type="checkbox" onChange={() => { props.handleChangeProps(props.checked.id); }} />
            {props.title} <button onClick={() => props.deleteTodoProps(props.checked.id)}>Delete</button>
        </li>
    </ul>
);

export default TodoItem;
