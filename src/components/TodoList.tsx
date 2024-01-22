import './styles.css';

import { TodoProps, TodoActionProps } from '../model';
import TodoItem from './TodoItem';

interface TodosListProps {
  todos: TodoProps[];
  todosDispatch: React.Dispatch<TodoActionProps>;
}

const TodoList = ({ todos, todosDispatch }: TodosListProps) => {
  return (
    todos.length > 0 && (
      <ul className='todos'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} todosDispatch={todosDispatch} />
        ))}
      </ul>
    )
  );
};

export default TodoList;
