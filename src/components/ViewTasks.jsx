import { useContext } from "react";
import { TaskContext } from "./Context";
import { Task } from "./Task";

const DELETE_TASK = "DELETE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";

export const ViewTasks = ({ tasks }) => {
  const { dispatch } = useContext(TaskContext);

  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: {
        id: id,
      },
    });
  };

  const onTaskClick = (id) => {
    dispatch({
      type: TOGGLE_TASK,
      payload: {
        id,
      },
    });
  };

  return (
    <div>
      <ul>
        {tasks.map((task, i) => (
          <div key={i}>
            <Task
              key={i}
              onClick={() => onTaskClick(task?.id)}
              completed={task?.completed}
              text={task?.text}
              id={task?.id}
              onDel={() => deleteTask(task?.id)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
