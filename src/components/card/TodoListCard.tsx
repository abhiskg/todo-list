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
    <div className="flex">
      <p>{todo.data}</p>
      <span onClick={() => handleComplete(todo.id)}>Complete</span>
      <span onClick={() => handleDelete(todo.id)}>Delete</span>
    </div>
  );
};

export default TodoListCard;
