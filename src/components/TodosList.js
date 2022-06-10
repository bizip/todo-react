/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => (
  <div>
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          checked={todo}
          handleChangeProps={props.handleChange}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
          title={todo.title}
        />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  deleteTodoProps: PropTypes.func.isRequired,
  handleChange: PropTypes.string.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoList;
