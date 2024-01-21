import { useState } from 'react';

import { Todo } from './model';

import InputField from './components/InputField';

import './App.css';

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
    </div>
  );
};

export default App;
