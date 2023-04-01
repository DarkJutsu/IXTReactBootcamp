export const Task = ({ onClick, completed, text, id, onDel }) => {
  return (
    <div>
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? "line-through" : "none",
          textDecorationColor: completed ? "green" : "none",
          color: completed ? "green" : "white",
          listStyle: "none",
          fontSize: "1.8em",
          padding: "10px 0px",
        }}
      >
        {id} - {text}{" "}
        <button
          style={{ fontSize: "0.6em", marginLeft: "10px" }}
          onClick={onDel}
        >
          Delete
        </button>
      </li>
    </div>
  );
};
