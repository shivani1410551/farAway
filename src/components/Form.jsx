import { useState } from "react";
const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !quantity) return;
    const newItem = {
      description: description,
      quantity: quantity,
      id: Date.now(),
      isPacked: false,
    };
    onAddItems(newItem);
    console.log(newItem);
    setQuantity(1);
    setDescription("");
  }
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h2>What do you need for your trip?</h2>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
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
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
export default Form;
