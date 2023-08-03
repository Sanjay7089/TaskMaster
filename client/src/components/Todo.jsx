import { useState } from "react";

import { toggleTodo, updateTodo } from "../store/actions";
import { deleteTodo } from "../store/actions";

import { useDispatch } from "react-redux";

//icons
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo?.data);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing((prevState) => !prevState);

    dispatch(updateTodo(todo._id, text));
  };

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo?.done ? "line-through" : "",
        color: todo?.done ? "#bdc3c7" : "#34495e",
      }}
      data-testid="todo-test"
    >
      <span style={{ display: editing ? "none" : "" }}>{todo?.data}</span>

      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <DeleteOutlineOutlinedIcon />
      </span>
      <span
        className="icon"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <EditNoteOutlinedIcon />
      </span>
    </li>
  );
};

export default Todo;
