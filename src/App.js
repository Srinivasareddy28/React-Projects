
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-item-store";
// npm install gh-pages --save-dev
// git init
// git add .


function App() {
  return (
    <TodoItemsContextProvider>
      <div className="todo-container">
        <center>
          <Heading />
          <Addtodo />
          <WelcomeMessage />
          <TodoItems />
        </center>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
