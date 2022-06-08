import React, { useState } from 'react';
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {

    const [editing, setEditing] = useState(false);
    const [editedData, setEditingData] = useState('');
    const [id, setId] = useState(0);

    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    const handleEditing = () => {
        setEditing(true);
        setEditingData(props.checked.title);
        setId(props.checked.id);


    }

    const handleUpdatedDone = (e) => {
        if (e.key === "Enter") {
            setEditing(false);
        }
    }

    const handleChange = (e) => {
        setEditingData(e.target.value);
        props.setUpdate(e.target.value, id);

    }
    return < ul >
        <li>
            <div onDoubleClick={handleEditing} style={{ viewMode }}>
                <input type="checkbox" onChange={() => { props.handleChangeProps(props.checked.id); }} />
                {props.title}
                {' '}
                <button onClick={() => props.deleteTodoProps(props.checked.id)}>Delete</button>
            </div>
            <input type="text"
                style={editMode}
                value={editedData}
                className={styles.textInput}
                styles={styles.textInput}
                onChange={handleChange}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    </ul >
};

export default TodoItem;
