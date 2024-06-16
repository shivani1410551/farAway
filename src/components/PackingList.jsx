import Items from "./Items";
import PackingItem from "./PackingItem";
const PackingList = ({ items, onDeleteItem }) => {
  const list = Items.map((item, i) => {
    return <PackingItem key={i} data={item} onDeleteItem={onDeleteItem} />;
  });
  return <ul className="List">{list}</ul>;
};

export default PackingList;
