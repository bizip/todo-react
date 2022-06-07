
import TodoItem from './TodoItem';

const TodoList = (props) => (
    <div>
        <ul>
            {props.todos.map((todo) => (
                <TodoItem key={todo.id} checked={todo} handleChangeProps={props.handleChangeProps} title={todo.title} />
            ))}
        </ul>
    </div>
);

export default TodoList;
