import { DropResult } from 'react-beautiful-dnd';

import { TodoActionProps, TodoProps } from '../model';

type handleDragEndProps = {
  result: DropResult;
  uncompletedTodos: TodoProps[];
  completedTodos: TodoProps[];
  todosDispatch: React.Dispatch<TodoActionProps>;
};

export const handleDragEnd = ({
  result,
  uncompletedTodos,
  completedTodos,
  todosDispatch,
}: handleDragEndProps) => {
  const { source, destination } = result;

  if (!destination) return;
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  )
    return;

  let add;
  const incomplete = uncompletedTodos;
  const complete = completedTodos;

  // remove from source
  if (source.droppableId === 'todosIncomplete') {
    add = incomplete[source.index];
    incomplete.splice(source.index, 1);
  } else if (source.droppableId === 'todosComplete') {
    add = complete[source.index];
    complete.splice(source.index, 1);
  }

  if (!add) return;

  // add to destination
  if (destination.droppableId === 'todosIncomplete') {
    incomplete.splice(destination.index, 0, { ...add, isDone: false });
  } else if (destination.droppableId === 'todosComplete') {
    complete.splice(destination.index, 0, { ...add, isDone: true });
  }

  todosDispatch({
    type: 'REORDER',
    payload: { incomplete: incomplete, complete: complete },
  });
};
