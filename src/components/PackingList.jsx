import { useState } from "react";
import PackingItem from "./PackingItem";
const PackingList = ({ addItems, onDeleteItems, onToggleItems, onreset }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = addItems;
  }
  if (sortBy === "description") {
    sortedItems.slice().sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
  }

  if (sortBy === "packed") {
    sortedItems.slice().sort((a, b) => {
      return Number(a.isPacked) - Number(b.isPacked);
    });
  }
  const PackingItems = sortedItems.map((item) => {
    return (
      <PackingItem
        key={item.id}
        item={item}
        onDeleteItems={onDeleteItems}
        onToggleItems={onToggleItems}
      />
    );
  });
  return (
    <>
      <ul className="List">{PackingItems}</ul>
      <div className="actions ">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="reset" onClick={onreset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default PackingList;
