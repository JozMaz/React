import { useState } from "react";
import data from "../data/data";

export default function Deleting() {
  const [items, setItems] = useState(data);

  function deleteHandler(idecko) {
    const filteredItems = items.filter((polozka) => polozka.id !== idecko);
    setItems(filteredItems);
  }
  function clearAll() {
    setItems([]);
  }
  function addAll() {
    setItems(data);
  }

  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <p>
            ID: {item.id} | Name: {item.name}
          </p>
          <button onClick={() => deleteHandler(item.id)}>Delete</button>
        </div>
      ))}
      <button onClick={clearAll}>CLEAR</button>
      <button onClick={addAll}>Add ALL</button>
    </>
  );
}
