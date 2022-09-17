import { useEffect, useState } from "react";
import Todolist from "../components/Todolist";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import Navbar from "../components/Navbar";

export default function lab_07() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  //
  useEffect(() => {
    const todoStr = localStorage.getItem("react-todos-1");
    if (!todoStr) setTodos([]);
    else setTodos(JSON.parse(todoStr));
  }, []);
  //
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodos();
  }, [todos]);

  const onKeyUpHandler = (event) => {
    if (event.key !== "Enter") return;
    if (event.target.value == "") {
      alert("Todo cannot be empty");
    } else {
      const newTodos = [{ title: todoInput, completed: false }, ...todos];
      setTodos(newTodos);
      setTodoInput("");
      saveTodos();
    }
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const temp = todos[idx];
    todos[idx] = todos[idx - 1];
    todos[idx - 1] = temp;
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) return;
    const temp = todos[idx];
    todos[idx] = todos[idx + 1];
    todos[idx + 1] = temp;
    setTodos([...todos]);
  };

  //save
  const saveTodos = () => {
    const todoStr = JSON.stringify(todos);
    localStorage.setItem("react-todos-1", todoStr);
  };

  return (
    <div>
      <Navbar
        home="btn btn-outline-light"
        exp="btn btn-outline-light"
        contact="btn btn-outline-light"
        lap7="btn btn-outline-secondary"
      />
      ;{/* Entire App container (required for centering) */}
      <div style={{ maxWidth: "700px" }} className="mx-auto">
        {/* App header */}
        <p className="display-4 text-center fst-italic m-4">
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>
        {/* Input */}
        <input
          onKeyUp={onKeyUpHandler}
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
          className="form-control mb-1 fs-4"
          placeholder="insert todo here..."
        />
        {/* Todos */}
        {/* Example 1 */}
        <div>
          {todos.map((todo, i) => (
            <Todolist
              title={todo.title}
              completed={todo.completed}
              key={i}
              onDelete={() => deleteTodo(i)}
              onMark={() => markTodo(i)}
              onUp={() => moveUp(i)}
              onDown={() => moveDown(i)}
            />
          ))}
        </div>

        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">All ({todos.length})</span>
          <span className="text-warning">
            Pending ({todos.filter((x) => x.completed === false).length}){" "}
          </span>
          <span className="text-success">
            Completed ({todos.filter((x) => x.completed === true).length})
          </span>
        </p>

        {/* Made by section */}
        <p className="text-center mt-3 text-muted fst-italic">
          made by Worapitcha Muangyot 640610666
        </p>
      </div>
    </div>
  );
}
