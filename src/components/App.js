import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable for toggling dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Determine the app's CSS class based on the dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  // Function to handle dark mode toggle
  function handleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

