import { useReducer } from 'react';

import { TodoProps, TodoActionProps } from '../model';

function useTodos() {
  const todoReducer = (todos: TodoProps[], action: TodoActionProps) => {
    switch (action.type) {
      case 'ADD':
        return [
          ...todos,
          { id: Date.now(), todo: action.payload, isDone: false },
        ];

      case 'COMPLETE':
        return todos.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, isDone: !todo.isDone }
            : todo;
        });

      case 'DELETE':
        return todos.filter((todo) => todo.id !== action.payload);

      case 'UPDATE':
        return todos.map((todo) => {
          return todo.id === action.payload.id
            ? { ...todo, todo: action.payload.editedText }
            : todo;
        });

      case 'REORDER':
        return [...action.payload.incomplete, ...action.payload.complete];

      default:
        return todos;
    }
  };

  const [todos, todosDispatch] = useReducer(todoReducer, []);
  return { todos, todosDispatch };
}

export { useTodos };
