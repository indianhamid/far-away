function Stats({ items }) {
  const numItems = items.length;

  if (items.length === 0)
    return (
      <div className="stats">
        <p>Start adding some items to your packing list 🚀</p>
      </div>
    );

  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Number(((numPacked / numItems) * 100).toFixed(2));
  return (
    <footer className="stats">
      <em>
        💼 You have {numItems} items on your list, and you already have packed{" "}
        {numPacked} ({percentagePacked}%)
      </em>
    </footer>
  );
}

export default Stats;
