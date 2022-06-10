import PropTypes from 'prop-types';
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');
  const { addTodoProps } = props;
  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoProps(title);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={handleChange}
      />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.string.isRequired,
};

export default InputTodo;
