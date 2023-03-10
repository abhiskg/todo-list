import { useState } from "react";
import TodoListCard from "../components/card/TodoListCard";
import TodoForm from "../components/form/TodoForm";
import { TodoDataType } from "../types/TodoDataType";

const TodoApp = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<TodoDataType[] | []>([]);

  return (
    <div className=" custom-width mx-auto flex flex-col items-center justify-center rounded ">
      <h1 className="mt-10 mb-5 text-4xl font-bold text-[#D3ABFF]">Todo App</h1>
      <TodoForm
        todoText={todoText}
        setTodoText={setTodoText}
        todos={todos}
        setTodos={setTodos}
      />

      {todos &&
        todos.length > 0 &&
        todos
          .sort((x, y) => Number(x.completed) - Number(y.completed))
          .map((todo) => (
            <TodoListCard
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
    </div>
  );
};

export default TodoApp;
