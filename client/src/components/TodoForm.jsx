import React, { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { addNewTodo } from "../store/actions";

function TodoForm() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    setInputText(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(inputText));
    setInputText("");
  };
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        type="search"
        onChange={onInputChange}
        placeholder="Lets Start working...."
        value={inputText}
      />
    </form>
  );
}

export default TodoForm;
