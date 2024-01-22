import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { useTodos } from './hooks/useTodos';

import InputField from './components/InputField';

import './App.css';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const { todos, todosDispatch } = useTodos();
  const [todoText, setTodoText] = useState<string>('');

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todoText) return;
    todosDispatch({ type: 'ADD', payload: todoText });
    setTodoText('');
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className='App'>
        <h1 className='heading'>Taskify</h1>
        <InputField
          todo={todoText}
          setTodoText={setTodoText}
          handleAdd={handleAdd}
        />
        <p className='info'>
          When in editing mode, press "Enter" to save changes. Empty input field
          cancels changes on "Enter".
        </p>
        <TodoList todos={todos} todosDispatch={todosDispatch} />
      </div>
    </DragDropContext>
  );
};

export default App;
