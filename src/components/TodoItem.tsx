import { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

import { TodoProps, TodoActionProps } from '../model';

import './styles.css';

interface TodoItemProps {
  todo: TodoProps;
  todosDispatch: React.Dispatch<TodoActionProps>;
}

const TodoItem = ({ todo, todosDispatch }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(todo.todo);

  const handleComplete = (id: number) => {
    todosDispatch({ type: 'COMPLETE', payload: id });
  };

  const handleDelete = (id: number) => {
    todosDispatch({ type: 'DELETE', payload: id });
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

    todosDispatch({ type: 'UPDATE', payload: { id, editedText } });

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
            <span className='icon' onClick={() => handleComplete(todo.id)}>
              <MdDone />
            </span>
          </div>
        )}
      </form>
    </li>
  );
};

export default TodoItem;
