import { createContext, useReducer } from "react";

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";

const initialState = [];
export const TaskContext = createContext(initialState);

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    case TOGGLE_TASK:
      return state.map((task, i) => {
        if (task.id === action.payload.id) {
          return Object.assign({}, task, {
            completed: !task.completed,
          });
        }
        return task;
      });
    default:
      return state;
  }
};

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
