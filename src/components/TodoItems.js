import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-item-store";

const TodoItems = () => {

const {todoItems} = useContext(TodoItemsContext);

  return (
    // <div className='container'>
    <div className="kg-container">
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.date}
        />
      ))}
    </div>
    // </div>
  );
};

export default TodoItems;
