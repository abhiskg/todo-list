import { TodoDataType } from "../../types/TodoDataType";

interface TodoListCardProps {
  todos: [] | TodoDataType[];
  setTodos: React.Dispatch<React.SetStateAction<[] | TodoDataType[]>>;
  todo: TodoDataType;
}

const TodoListCard = ({ todo, todos, setTodos }: TodoListCardProps) => {
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div
      className={`mb-3 flex w-full items-center justify-between rounded ${
        todo.completed
          ? "bg-gradient-to-r from-green-500  via-blue-500 to-green-500"
          : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
      } p-3 shadow`}
    >
      <p className="font-medium text-white ">{todo.data}</p>
      <div className="flex gap-1">
        {!todo.completed && (
          <button
            className="mr-1 mb-1 rounded-full bg-gradient-to-b from-green-600 to-blue-600 p-2 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
            onClick={() => handleComplete(todo.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
        )}
        <button
          className="mr-1 mb-1 rounded-full bg-gradient-to-b from-pink-600 to-red-600 p-2 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
          onClick={() => handleDelete(todo.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoListCard;
