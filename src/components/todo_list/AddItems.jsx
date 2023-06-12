import { useState } from "react";
import Styling from "./AddItems.module.css";
function AddItems(props) {
  const [isDone, setIsDone] = useState(false);
  const handleClick = () => {
    setIsDone((check) => !check);
  };
  const handleDelete = () => {
    props.delete(props.id);
  };

  return (
    <div className="container d-flex justify-content-center my-2 ps-5">
      <li
        className="ps-2 py-2"
        style={{
          textDecoration: isDone ? "line-through" : "none",
          color: isDone ? "brown" : "black",
        }}
      >
        {props.text}
      </li>
      <div
        className={`${Styling.icon} d-flex justify-content-center align-items-center py-2`}
        style={{ backgroundColor: "#fff" }}
      >
        <i
          className="fa-regular fa-square-check btn-icon px-3 "
          onClick={handleClick}
        ></i>
        <i
          className="fa-regular fa-trash-can lastbtn btn-icon px-3"
          onClick={handleDelete}
        ></i>
      </div>
    </div>
  );
}

export default AddItems;
