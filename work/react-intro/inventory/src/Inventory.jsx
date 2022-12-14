import "./Inventory.css";
import Reorder from "./Reorder";

function Inventory({ inventoryCount, onSubtract, onAdd, onReorder }) {
  return (
    <section className="inventory">
      <h1 className="inventory__title">Inventory</h1>
      <button
        className="inventory__button inventory__subtract"
        disabled={!inventoryCount}
        onClick={onSubtract}
      >
        -
      </button>
      <span className="inventory__count">{inventoryCount}</span>
      <button className="inventory__button inventory__add" onClick={onAdd}>
        +
      </button>
      {!inventoryCount && <Reorder onReorder={onReorder} />}
    </section>
  );
}

export default Inventory;
