import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
const App = () => {
  const [addItems, setAddItems] = useState([]);
  function handleAddItems(item) {
    setAddItems((prev) => {
      return [...prev, item];
    });
  }
  function handleReset() {
    const isConfirmed = window.confirm("Are you sure you want to reset");
    if (isConfirmed) {
      setAddItems([]);
    }
  }
  function handleDeleteItems(id) {
    setAddItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setAddItems((items) => {
      return items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      );
    });
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        addItems={addItems}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onreset={handleReset}
      />
      <Stats addItems={addItems} />
    </div>
  );
};

export default App;
