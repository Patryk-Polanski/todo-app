import { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

import { Todo } from '../model';

import './styles.css';

interface TodoItemProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, todos, setTodos }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditMode = () => {
    setIsEditing(true);
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();

    if (!editedText) {
      setEditedText(todo.todo);
      setIsEditing(false);
      return;
    }

    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, todo: editedText } : todo;
    });
    setTodos(updatedTodos);
    setIsEditing(false);
  };

  const formContent = isEditing ? (
    <input
      type='text'
      value={editedText}
      className='todos__single-input'
      onChange={(e) => setEditedText(e.target.value)}
      autoFocus={true}
    />
  ) : !todo.isDone ? (
    <span className='todos__single-text'>{todo.todo}</span>
  ) : (
    <s className='todos__single-text'>{todo.todo}</s>
  );

  return (
    <li className='todos__list-item'>
      <form
        className='todos__single'
        onSubmit={(e) => handleUpdate(e, todo.id)}
      >
        {formContent}
        {!isEditing && (
          <div>
            <span className='icon' onClick={handleEditMode}>
              <AiFillEdit />
            </span>
            <span className='icon' onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className='icon' onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        )}
      </form>
    </li>
  );
};

export default TodoItem;
