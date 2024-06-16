import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) =>
      items.filter((item) => {
        return item.id !== id;
      })
    );
  }
  return (
    <>
      <Logo />
      <Form onHandleAdd={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItems} />
      <Stats />
    </>
  );
}

export default App;
