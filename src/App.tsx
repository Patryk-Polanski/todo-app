import { useState } from 'react';

import { Todo } from './model';

import InputField from './components/InputField';

import './App.css';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>('');

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todo) return;
    setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    setTodo('');
  };

  console.log('todos', todos);

  return (
    <div className='App'>
      <h1 className='heading'>Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <p className='info'>
        When in editing mode, press "Enter" to save changes. Empty input field
        cancels changes on "Enter".
      </p>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
