import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

import { Todo } from '../model';

import './styles.css';

interface TodoItemProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, setTodos }: TodoItemProps) => {
  return (
    <li className='todos__list-item'>
      <form className='todos__single'>
        <span className='todos__single-text'>{todo.todo}</span>
        <div>
          <span className='icon'>
            <AiFillEdit />
          </span>
          <span className='icon'>
            <AiFillDelete />
          </span>
          <span className='icon'>
            <MdDone />
          </span>
        </div>
      </form>
    </li>
  );
};

export default TodoItem;
