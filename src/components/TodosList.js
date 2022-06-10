/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    handleChange, deleteTodoProps, setUpdate, todos,
  } = props;
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            checked={todo}
            handleChangeProps={handleChange}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
            title={todo.title}
          />
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  deleteTodoProps: PropTypes.func.isRequired,
  handleChange: PropTypes.string.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoList;
