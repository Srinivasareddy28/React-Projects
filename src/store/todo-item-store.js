import { createContext ,useReducer} from "react";


export const TodoItemsContext = createContext(

    {
        todoItems : [],
        addNewItem : () => {},
        deleteItem : () => {}
    }
);


const todoItemsReducer = (currentTodoItems,action) => {

    let newTodoItems = [];
    if (action.type === "NEW_ITEM"){
      newTodoItems = [
        ...currentTodoItems,{
          name :action.payload.todoName,
          dueDate:action.payload.todoDate
        }
      ]
  
    }else if(action.type === "DELETE_ITEM"){
  
      newTodoItems = currentTodoItems.filter((item) => item.name !== action.payload.todoName);
    }
    return newTodoItems;
  
  }
  
const TodoItemsContextProvider = ({children}) => {
    const [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[]);


    const addNewItem = (todoName, todoDate) => {
      const newItemAction = {
        type : "NEW_ITEM",
        payload : {
          todoName,
          todoDate
        }
      }
      dispatchTodoItems(newItemAction);
    };
  
    const deleteItem = (todoName) => {
      const deleteItemAction = {
        type : "DELETE_ITEM",
        payload : {
          todoName
        }
      }
      dispatchTodoItems(deleteItemAction);
      
    };

    return <TodoItemsContext.Provider value={
      {
        todoItems,
        addNewItem,
        deleteItem
      }
    }>
        {children}

    </TodoItemsContext.Provider>  

}

export default TodoItemsContextProvider;