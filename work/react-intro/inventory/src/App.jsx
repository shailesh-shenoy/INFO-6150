import "./App.css";
import Inventory from "./Inventory";
import { useState } from "react";

function App() {
  const [inventoryCount, setInventoryCount] = useState(5);

  const onSubtract = () => {
    if (inventoryCount > 0) {
      setInventoryCount(inventoryCount - 1);
    }
  };

  const onAdd = () => setInventoryCount(inventoryCount + 1);

  const onReorder = () => setInventoryCount(5);

  return (
    <main className="app">
      <Inventory
        inventoryCount={inventoryCount}
        onAdd={onAdd}
        onSubtract={onSubtract}
        onReorder={onReorder}
      />
    </main>
  );
}

export default App;
