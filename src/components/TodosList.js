import TodoItem from './TodoItem';

const TodoList = (props) => (
  <div>
    <ul>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} checked={todo} handleChangeProps={props.handleChange} deleteTodoProps={props.deleteTodoProps} setUpdate={props.setUpdate} title={todo.title} />
      ))}
    </ul>
  </div>
);

export default TodoList;
