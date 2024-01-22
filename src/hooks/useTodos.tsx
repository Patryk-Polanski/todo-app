import { useReducer } from 'react';

import { Todo, ActionProps } from '../model';

function useTodos() {
  const todoReducer = (todos: Todo[], action: ActionProps) => {
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

      default:
        return todos;
    }
  };

  const [todos, todosDispatch] = useReducer(todoReducer, []);
  return { todos, todosDispatch };
}

export { useTodos };
