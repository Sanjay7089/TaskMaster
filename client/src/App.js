import "./App.css";
// components
import Header from "./components/Header";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

;
function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
