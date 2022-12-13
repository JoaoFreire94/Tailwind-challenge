import { useState } from "react";
interface ITodoAdder {
  addTodo: (text: string) => void;
}
export function TodoAdder({ addTodo }: ITodoAdder) {
  const [value, setValue] = useState("");

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="flex flex-col w-1/2 bg-white border-4 border-r-2 rounded-lg p-6 ">
      <text className="text-3xl">Add Todo</text>
      <div className="mt-10 flex-wrap">
        <input
          type="text"
          className="border-black border-2 rounded-lg block w-full px-3 py-1.5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
        <button
          onClick={handleClick}
          className={`w-1/4  rounded-lg py-3 flex items-center justify-center mt-3 lg:w-1/3 md:w-1/2 sm:w-full ${
            !value ? "bg-dark" : "bg-lime"
          }`}
          disabled={!value}
        >
          <b>Add task</b>
        </button>
      </div>
    </div>
  );
}
