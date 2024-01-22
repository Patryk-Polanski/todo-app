import { useRef } from 'react';

import './styles.css';

interface InputFieldProps {
  todo: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField = ({ todo, setTodoText, handleAdd }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type='text'
        placeholder='Enter a task'
        className='input__box'
        value={todo}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className='input__submit' type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
