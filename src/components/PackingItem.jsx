const PackingItem = ({ item, onDeleteItems, onToggleItems }) => {
  return (
    <>
      <li style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          value={item.isPacked}
          onChange={() => onToggleItems(item.id)}
        />
        <span>{item.quantity}</span>
        {item.description}
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    </>
  );
};

export default PackingItem;
