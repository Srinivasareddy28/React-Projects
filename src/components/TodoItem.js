// import styles from './App.css'

import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const TodoItem = ({ todoName, todoDate}) => {

  const {deleteItem} = useContext(TodoItemsContext);
  const handleDeleteBtn = () => {
    deleteItem(todoName);
  };

  return (
    <div className="row item-container">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={handleDeleteBtn}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
