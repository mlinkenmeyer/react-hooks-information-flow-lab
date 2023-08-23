import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header setIsDarkMode={() => setIsDarkMode((prevMode) => !prevMode)} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
