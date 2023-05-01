import itemData from "../data/items";
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  const [appMode, setAppMode] = useState(false);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = appMode ? "App dark" : "App light";
  const modeText = appMode ? "Dark Mode" : "Light Mode";

  function toggleAppMode() {
    setAppMode((prevState) => !prevState);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleAppMode}>{modeText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
