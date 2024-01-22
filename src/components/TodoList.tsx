import { Droppable } from 'react-beautiful-dnd';

import { TodoProps, TodoActionProps } from '../model';
import TodoItem from './TodoItem';

import './styles.css';

interface TodosListProps {
  todos: TodoProps[];
  todosDispatch: React.Dispatch<TodoActionProps>;
}

const TodoList = ({ todos, todosDispatch }: TodosListProps) => {
  const uncompletedTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className='container'>
      <div className='todos'>
        <h2 className='todos__heading'>Active Tasks</h2>
        <Droppable droppableId='todosIncomplete'>
          {(provided) => (
            <ul
              className='todos__list'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {uncompletedTodos.map((todo, index) => (
                <TodoItem
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todosDispatch={todosDispatch}
                />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
      <div className='todos remove'>
        <h2 className='todos__heading'>Completed Tasks</h2>
        <Droppable droppableId='todosComplete'>
          {(provided) => (
            <ul
              className='todos__list'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {completedTodos.map((todo, index) => (
                <TodoItem
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todosDispatch={todosDispatch}
                />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default TodoList;
