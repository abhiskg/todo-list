import { FormEvent } from "react";
import { v4 as uuid } from "uuid";
import { TodoDataType } from "../../types/TodoDataType";

interface TodoFormProps {
  todoText: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  todos: [] | TodoDataType[];
  setTodos: React.Dispatch<React.SetStateAction<[] | TodoDataType[]>>;
}

const TodoForm = ({
  todoText,
  setTodoText,
  todos,
  setTodos,
}: TodoFormProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (todos.length > 0) {
      setTodos([...todos, { id: uuid(), data: todoText, completed: false }]);
    } else {
      setTodos([{ id: uuid(), data: todoText, completed: false }]);
    }
    setTodoText("");
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <input
        className="rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        type="text"
        value={todoText}
        name="todof"
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />

      <button
        className=" rounded-md bg-violet-600 px-8 py-3 font-semibold text-white transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-violet-700 active:scale-95  disabled:cursor-not-allowed disabled:bg-red-400 dark:text-gray-900"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
