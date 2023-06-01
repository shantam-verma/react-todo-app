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
    <>
      <input
        type="text"
        placeholder="Write a new task.."
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </>
  );
};

export default InputArea;
