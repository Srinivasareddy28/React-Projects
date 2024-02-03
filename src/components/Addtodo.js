import { useContext, useRef} from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const Addtodo = () => {
  // const [todoName,setTodoName] = useState();
  // const [todoDate,setTodoDate] = useState();
  // const noOfUpdates = useRef(0);

  const {addNewItem} = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleTodoName = (event) => {
  //   const newTodoName = event.target.value;
  //   // noOfUpdates.current += 1;
  //   // console.log(noOfUpdates.current);
  //   setTodoName(newTodoName);
  // }

  // const handleTodoDate = (event) => {
  //   const newTodoDate = event.target.value;
  //   setTodoDate(newTodoDate);
  // }

  const handleButton = () => {
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate);
  };
  return (
    <>
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo" ref={todoNameElement} />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary kg-button"
            onClick={handleButton}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Addtodo;
