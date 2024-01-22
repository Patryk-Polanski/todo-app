import './styles.css';

import { Todo } from '../model';
import TodoItem from './TodoItem';

interface TodosListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodosListProps) => {
  console.log('ajskdhajsdhsa', todos);
  return (
    todos.length > 0 && (
      <ul className='todos'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    )
  );
};

export default TodoList;
