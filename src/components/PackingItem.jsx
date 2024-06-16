const PackingItem = ({ item, onDeleteItems, onToggleItems }) => {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.isPacked}
          onChange={() => onToggleItems(item.id)}
        />
        <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
          {item.quantity}
        </span>
        {item.description}
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    </div>
  );
};

export default PackingItem;
