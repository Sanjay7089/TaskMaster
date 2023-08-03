import "./App.css";
// components
import Header from "./components/Header";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
