import { useCallback, useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";
import { TodoAdder } from "./components/TodoAdder";

export interface ITodos {
  text: string;
  isDone: boolean;
}
function App() {
  const [todos, setTodos] = useState<Array<ITodos>>([
    {
      text: "To-Do Example",
      isDone: false,
    },
  ]);

  const addTodo = (text: string) => {
    const newTodos: Array<ITodos> = [...todos, { isDone: false, text: text }];
    setTodos(newTodos);
  };

  const finishTodo = useCallback((index: number) => {
    setTodos((s) =>
      s.map((todo, idx) => {
        if (idx === index) {
          return { ...todo, isDone: true };
        }
        return todo;
      })
    );
  }, []);
  const revertTodo = (index: number) => {
    setTodos((s) =>
      s.map((todo, idx) => {
        if (idx === index) {
          return { ...todo, isDone: false };
        }
        return todo;
      })
    );
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black">
      <div className="w-full bg-white border-4 border-b-0 rounded-lg p-6">
        <h1 className="text-left ml-4 text-6xl">
          <b>To-Do List</b>
        </h1>
      </div>
      <div className="flex flex-row w-full h-full ">
        <TodoAdder addTodo={addTodo} />
        <div className="bg-white border-4 rounded-lg p-6 pt-10 border-l-2 w-1/2">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              finishTodo={finishTodo}
              removeTodo={removeTodo}
              revertTodo={revertTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
