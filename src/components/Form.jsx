import React from "react";
import { useState } from "react";
const Form = ({ onHandleAdd }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      isPacked: false,
      id: Date.now(),
    };
    console.log(newItem);
    onHandleAdd(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h2>What do you need for your trip?</h2>
      <select
        value={quantity}
        onSubmit={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num, id) => {
          return (
            <option value={num} key={id}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
