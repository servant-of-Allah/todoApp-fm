import React, { useState } from "react";
import images from "../constants/images";
import { Draggable } from "react-beautiful-dnd";
function Todo({
  name,
  id,
  completed,
  editTask,
  deleteTask,
  toggleTaskCompleted,
  index,
}) {
  const [newTodoName, setNewTodoName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(id) {
    editTask(newTodoName, id);
    setIsEditing(false);
  }

  return (
    <Draggable draggableId={id} key={id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="app__todo section__select"
        >
          <div className="section__select-div">
            <div
              className="select__button-border"
              isactive={completed ? "true" : "false"}
            >
              <button
                className="select__button"
                defaultChecked={completed}
                isactive={completed ? "true" : "false"}
                onClick={() => toggleTaskCompleted(id)}
              >
                {completed ? <img src={images.check} alt="check icon" /> : ""}
              </button>
            </div>

            {isEditing ? (
              <form className="edit__form" onSubmit={() => handleSubmit(id)}>
                <input
                  type="text"
                  className="edit__form-input"
                  placeholder="enter new todo.."
                  onChange={(e) => setNewTodoName(e.target.value)}
                ></input>
                <button
                  className="cancel__edit"
                  type="button"
                  onClick={() => setIsEditing(false)}
                >
                  cancel
                </button>
              </form>
            ) : (
              <p
                className="app__todo-item"
                taskdone={completed ? "true" : "false"}
                onClick={() => setIsEditing(true)}
              >
                {name}
              </p>
            )}
          </div>
          <button className="icon-cross" onClick={() => deleteTask(id)}>
            <img src={images.cross} alt="cross" />
          </button>
        </li>
      )}
    </Draggable>
  );
}

export default Todo;
