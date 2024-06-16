const Stats = ({ addItems }) => {
  if (!addItems) {
    return <em>Start Adding some items to your packing list.</em>;
  }

  const numItems = addItems.length;
  const numPacked = addItems.filter((item) => item.isPacked).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="Stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go"
          : `You have ${numItems} items on your list, and you already packed{" "}
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
