import React, { useState } from "react";

function TodoForm() {
  const [inputText, setInputText] = useState("");

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();

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
