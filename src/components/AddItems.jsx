import { useState } from "react";
import "../App.css";

function AddItems(props) {
  const [isDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.text);

  const handleClick = () => {
    setIsDone((check) => !check);
  };

  const handleDelete = () => {
    props.delete(props.id);
    setIsDone(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.onEdit(props.id, editedText);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <div className="items">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          style={{ marginLeft: `${isEditing ? "0" : "40px"}` }}
        />
      ) : (
        <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {props.text}
        </li>
      )}
      {!isEditing && (
        <>
          <i
            className="fa-regular fa-pen-to-square btn-icon"
            onClick={handleEdit}
          ></i>
          <i
            className="fa-regular fa-square-check btn-icon"
            onClick={handleClick}
          ></i>
          <i
            className="fa-regular fa-trash-can lastbtn btn-icon"
            onClick={handleDelete}
          ></i>
        </>
      )}
      {isEditing && (
        <button onClick={handleSave} className="lastbtn">
          Save
        </button>
      )}
    </div>
  );
}

export default AddItems;
