import React, { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Todo from "./components/Todo";
import BottomFilter from "./components/BottomFilter";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({ allTasks }) {
  const [tasks, setTasks] = useState(allTasks);
  const [filter, setFilter] = useState("All");

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  function editTask(name, id) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: name };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function clearCompleted() {
    const incompleteTasks = tasks.filter((task) => !task.completed);
    setTasks(incompleteTasks);
  }

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const tasksCopy = Array.from(tasks);
    const [reorderedTask] = tasksCopy.splice(result.source.index, 1);
    tasksCopy.splice(result.destination.index, 0, reorderedTask);

    setTasks(tasksCopy);
  };

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task, index) => (
      <Todo
        id={task.id}
        name={task.name}
        key={task.id}
        index={index}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        addTask={addTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    ));

  const taskCount = tasks.length;
  return (
    <div className="App-main">
      <Header addTask={addTask} />

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              role="list"
              className="app__todo-list section__padding"
            >
              {/* taskList */}
              {taskList}

              {/* BottomFilter */}
              <BottomFilter
                taskCount={taskCount}
                setFilter={setFilter}
                filterNames={FILTER_NAMES}
                filter={filter}
                clearCompleted={clearCompleted}
              />

              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <div>
        <p className="drag__drop" style={{ textAlign: "center" }}>
          Drag and drop to reorder list
        </p>
      </div>

      <footer>
        <p>
          Challenge by&nbsp;
          <a href="https://frontendmentor.io/">Frontend Mentor.&nbsp;</a>
          Coded by&nbsp;
          <a href="https://github.com/servant-of-Allah">
            a humble servant of ALLAH
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
