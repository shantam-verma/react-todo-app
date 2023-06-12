import { useState } from "react";

const InputArea = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="container d-flex justify-content-center ps-5">
      <input
        className="ps-2"
        type="text"
        placeholder="Write a new task.."
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </div>
  );
};

export default InputArea;
