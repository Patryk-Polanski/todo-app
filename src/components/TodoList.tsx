import './styles.css';

import { TodoProps, TodoActionProps } from '../model';
import TodoItem from './TodoItem';

interface TodosListProps {
  todos: TodoProps[];
  todosDispatch: React.Dispatch<TodoActionProps>;
}

const TodoList = ({ todos, todosDispatch }: TodosListProps) => {
  return (
    <div className='container'>
      <div className='todos'>
        <h2 className='todos__heading'>Active Tasks</h2>
        {todos.length > 0 && (
          <ul className='todos__list'>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                todosDispatch={todosDispatch}
              />
            ))}
          </ul>
        )}
      </div>
      <div className='todos remove'>
        <h2 className='todos__heading'>Completed Tasks</h2>
        {todos.length > 0 && (
          <ul className='todos__list'>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                todosDispatch={todosDispatch}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
