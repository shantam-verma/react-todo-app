import { useState } from "react";
import { v4 as uuid } from "uuid";
import NavBar from "./components/NavBar";
import Header from "./components/header/Header";
import InputArea from "./components/InputArea";
import AddItems from "./components/todo_list/AddItems";

function App() {
  const [items, setItems] = useState([]);

  const handleItems = (value) => {
    if (value.trim() !== "") {
      const newItems = {
        id: uuid(),
        text: value,
      };
      setItems((prevItems) => [...prevItems, newItems]);
    }
  };

  const handleDelete = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <>
      <NavBar />
      <div className="app">
        <Header />
        <InputArea onAddItem={handleItems} />
        {items.map((todoItems) => (
          <AddItems
            key={todoItems.id}
            id={todoItems.id}
            text={todoItems.text}
            delete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default App;
