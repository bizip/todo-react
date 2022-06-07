import React, { useState } from 'react';

const TodoItem = (props) => (
    <ul>
        <li>
            <input type="checkbox" onChange={() => { props.handleChangeProps(props.checked.id) }} />
            {props.title}
        </li>
    </ul>
);

export default TodoItem;
