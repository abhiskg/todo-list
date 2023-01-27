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
      className={`mb-2 flex w-full justify-between rounded ${
        todo.completed ? "bg-green-500" : "bg-purple-500"
      } p-3 shadow`}
    >
      <p>{todo.data}</p>
      <div>
        <span onClick={() => handleComplete(todo.id)}>Complete</span>
        <button
          className="mr-1 mb-1 rounded-full bg-red-500 p-2 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
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
