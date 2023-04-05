import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { name: "Complete online javascript course", completed: true, id: "todo-0" },
  { name: "Jog around the park 3x", completed: false, id: "todo-1" },
  { name: "10 minutes meditation", completed: false, id: "todo-2" },
  { name: "Read for 1 hour", completed: false, id: "todo-3" },
  { name: "Pick up groceries", completed: false, id: "todo-4" },
  {
    name: "Complete Todo App on Frontend Mentor",
    completed: false,
    id: "todo-5",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App allTasks={DATA} />);
