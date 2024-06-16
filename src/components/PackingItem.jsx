import React from "react";

const PackingItem = ({ data, items, onDeleteItem }) => {
  return (
    <div>
      <li style={data.isPacked ? { textDecoration: "line-through" } : {}}>
        <span>{data.quantity}</span>
        {data.description}
        <button onClick={() => onDeleteItem(data.id)}>❌</button>
      </li>
    </div>
  );
};

export default PackingItem;
