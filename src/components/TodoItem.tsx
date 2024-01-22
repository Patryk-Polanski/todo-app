import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdClose, MdDone } from 'react-icons/md';

import { TodoProps, TodoActionProps } from '../model';

import './styles.css';

interface TodoItemProps {
  index: number;
  todo: TodoProps;
  todosDispatch: React.Dispatch<TodoActionProps>;
}

const TodoItem = ({ index, todo, todosDispatch }: TodoItemProps) => {
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

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <li
          className={`todos__list-item ${snapshot.isDragging ? 'drag' : ''}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <form
            className='todos__single'
            onSubmit={(e) => handleUpdate(e, todo.id)}
          >
            {isEditing ? (
              <input
                type='text'
                value={editedText}
                className='todos__single-input'
                onChange={(e) => setEditedText(e.target.value)}
                autoFocus={true}
              />
            ) : (
              <span className='todos__single-text'>{todo.todo}</span>
            )}
            {!isEditing && (
              <div>
                <span className='icon' onClick={handleEditMode}>
                  <AiFillEdit />
                </span>
                <span className='icon' onClick={() => handleDelete(todo.id)}>
                  <AiFillDelete />
                </span>
                <span className='icon' onClick={() => handleComplete(todo.id)}>
                  {!todo.isDone ? <MdDone /> : <MdClose />}
                </span>
              </div>
            )}
          </form>
        </li>
      )}
    </Draggable>
  );
};

export default TodoItem;
