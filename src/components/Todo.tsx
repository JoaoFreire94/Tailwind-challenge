import { ITodos } from "../App";

interface ITodo {
  todo: ITodos;
  index: number;
  finishTodo: (index: number) => void;
  removeTodo: (index: number) => void;
  revertTodo: (index: number) => void;
}

export function Todo({
  todo,
  index,
  finishTodo,
  removeTodo,
  revertTodo,
}: ITodo) {
  return (
    <div className="flex mb-4 px-4 justify-between sm:flex-wrap">
      <text
        className={`self-center ${todo.isDone ? "line-through" : ""} sm:w-full`}
      >
        <b>{todo.text}</b>
      </text>
      <div>
        {todo.isDone ? (
          <button
            className="p-2 mr-2 border-2 rounded  border-grey hover:bg-dark hover:text-white "
            onClick={() => revertTodo(index)}
          >
            Not Done
          </button>
        ) : (
          <button
            className="p-2 mr-2 border-2 border-darkLime rounded hover:bg-darkLime hover:text-mediumGrey  "
            onClick={() => finishTodo(index)}
          >
            Done
          </button>
        )}{" "}
        <button
          className="p-2 border-2 border-darkRed rounded hover:bg-darkRed hover:text-white "
          onClick={() => removeTodo(index)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
