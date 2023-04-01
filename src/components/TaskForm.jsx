import { useContext, useRef } from "react";
import { TaskContext } from "./Context";
let nextId = 1;
export const TaskForm = () => {
  const newtxt = useRef();
  const ADD_TASK = "ADD_TASK";

  const style = {
    height: "30px",
    marginRight: "1em",
    fontSize: "20px",
  };

  const { dispatch } = useContext(TaskContext);

  const addTask = (text) => {
    dispatch({
      type: ADD_TASK,
      payload: {
        id: nextId++,
        text: text,
        completed: false,
      },
    });
  };

  return (
    <div>
      <h1>Create your Task</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(newtxt.current.value);
          newtxt.current.value = "";
        }}
      >
        <input type="text" ref={newtxt} style={style} />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};
