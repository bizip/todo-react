/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const [editedData, setEditingData] = useState('');
  const [id, setId] = useState(0);

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    const { title, id } = props.checked;
    setEditing(true);
    setEditingData(title);
    setId(id);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  const handleChange = (e) => {
    setEditingData(e.target.value);
    props.setUpdate(e.target.value, id);
  };
  return (
    <ul>
      <li>
        <div onDoubleClick={handleEditing} style={{ viewMode }}>
          <input type="checkbox" onChange={() => { props.handleChangeProps(props.checked.id); }} />
          {props.title}
          {' '}
          <button type="button" onClick={() => props.deleteTodoProps(props.checked.id)}>Delete</button>
        </div>
        <input
          type="text"
          style={editMode}
          value={editedData}
          className={styles.textInput}
          styles={styles.textInput}
          onChange={handleChange}
          onKeyDown={handleUpdatedDone}
        />
      </li>
    </ul>
  );
};

TodoItem.propTypes = {
  checked: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  deleteTodoProps: PropTypes.func,
  handleChangeProps: PropTypes.func,
  setUpdate: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default TodoItem;
