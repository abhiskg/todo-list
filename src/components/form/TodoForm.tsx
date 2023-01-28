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
    <form
      className="mt-5 mb-7 flex w-full justify-center"
      onSubmit={handleSubmit}
    >
      <input
        className=" w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        type="text"
        value={todoText}
        name="todo"
        required
        placeholder="Type Something"
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />

      <button
        className="whitespace-nowrap rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-3 font-semibold text-white transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-violet-700 active:scale-95  disabled:cursor-not-allowed disabled:bg-red-400 dark:text-gray-900"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
