export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export type ActionProps =
  | { type: 'ADD'; payload: string }
  | { type: 'COMPLETE'; payload: number }
  | { type: 'DELETE'; payload: number }
  | { type: 'UPDATE'; payload: { id: number; editedText: string } };
