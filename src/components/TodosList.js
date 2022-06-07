import TodoItem from './TodoItem';

const TodoList = (props) => (
  <div>
    <ul>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} checked={todo} deleteTodoProps={props.deleteTodoProps} handleChangeProps={props.handleChangeProps} title={todo.title} />
      ))}
    </ul>
  </div>
);

export default TodoList;
