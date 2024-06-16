import PackingItem from "./PackingItem";
const PackingList = ({ addItems, onDeleteItems, onToggleItems }) => {
  const PackingItems = addItems.map((item, i) => {
    return (
      <PackingItem
        key={item.id}
        item={item}
        onDeleteItems={onDeleteItems}
        onToggleItems={onToggleItems}
      />
    );
  });
  return <ul className="List">{PackingItems}</ul>;
};

export default PackingList;
