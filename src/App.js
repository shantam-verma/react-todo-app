import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import AddItems from "./components/AddItems";

function App() {
  const [items, setItems] = useState([]);

  const handleItems = (value) => {
    if (value.trim() !== "") {
      setItems((prevItems) => [...prevItems, value]);
    }
  };

  const handleDelete = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const handleEdit = (id, newText) => {
    if (newText.trim() !== "") {
      setItems((prevItems) => {
        return prevItems.map((item, index) => {
          if (index === id) {
            return newText;
          }
          return item;
        });
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="app">
        <Header />
        <InputArea onAddItem={handleItems} />
        {items.map((todoItems, index) => (
          <AddItems
            key={index}
            id={index}
            text={todoItems}
            delete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
}

export default App;
