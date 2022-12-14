import "./Inventory.css";

function Reorder({ onReorder }) {
  return (
    <button
      className="inventory__button inventory__reorder"
      onClick={onReorder}
    >
      Reorder
    </button>
  );
}

export default Reorder;
