export type TodoProps = {
  id: number;
  todo: string;
  isDone: boolean;
};

export type TodoActionProps =
  | { type: 'ADD'; payload: string }
  | { type: 'COMPLETE'; payload: number }
  | { type: 'DELETE'; payload: number }
  | { type: 'UPDATE'; payload: { id: number; editedText: string } };
