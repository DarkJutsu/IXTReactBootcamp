import { useContext, useState } from "react";
import { TaskContext } from "./Context";
import { TaskForm } from "./TaskForm";
import { ViewTasks } from "./ViewTasks";

export const Filter = () => {
  const { state } = useContext(TaskContext);

  const [filt, setFilt] = useState("ALL");

  const filteredTasks =
    filt === "ALL"
      ? state
      : filt === "COMPLETED"
      ? state.filter((task) => task.completed)
      : state.filter((task) => !task.completed);

  return (
    <div>
      <TaskForm />
      <div style={{ margin: "10px 0px" }}>
        <button onClick={() => setFilt("ALL")}>ALL</button>
        <button
          style={{ margin: "0px 10px" }}
          onClick={() => setFilt("COMPLETED")}
        >
          COMPLETED
        </button>
        <button onClick={() => setFilt("ACTIVE")}>ACTIVE</button>
      </div>
      <ViewTasks tasks={filteredTasks} />
    </div>
  );
};
