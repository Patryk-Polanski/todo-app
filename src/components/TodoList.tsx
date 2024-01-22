import './styles.css';

import { Todo, ActionProps } from '../model';
import TodoItem from './TodoItem';

interface TodosListProps {
  todos: Todo[];
  todosDispatch: React.Dispatch<ActionProps>;
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
