import React, { useState } from "react";

function Form({ addTask }) {
  const [newTodoName, setNewTodoName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodoName !== "") {
      addTask(newTodoName);
      setNewTodoName("");
    }
  }

  return (
    <form className="section__padding section__select" onSubmit={handleSubmit}>
      <div className="section__select-div">
        <div className="select__button-border">
          <button
            className="select__button"
            style={{ outline: "none", pointerEvents: "none" }}
          ></button>
        </div>
        <input
          className="app__form-input"
          type="text"
          value={newTodoName || ""}
          placeholder="Create a new todo..."
          onChange={(e) => setNewTodoName(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Form;
