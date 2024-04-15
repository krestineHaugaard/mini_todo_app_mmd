import { useState } from "react";
import Form from "./Form";
import List from "./List";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);

  function remove(id) {
    setItems((state) => state.filter((item) => item.id !== id));
  }

  function toggle(id) {
    setItems((state) =>
      state.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  return (
    <>
      <h1>To do liste</h1>
      <Form setItems={setItems} />
      <List remove={remove} toggle={toggle} items={items} />
    </>
  );
}
