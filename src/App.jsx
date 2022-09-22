import React, { useState } from "react";
import "./App.css";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";
import "bootstrap/dist/css/bootstrap.min.css";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterMenuItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };
  return (
    <div className="container my-5">
      <header className="text-center display-5">Our Menu</header>
      <hr className="d-block mx-auto w-50 mb-3" />
      <main>
        <div>
          <Categories
            categories={categories}
            filterMenuItems={filterMenuItems}
          />
        </div>
        <div className="container">
          <Menu items={menuItems} />
        </div>
      </main>
    </div>
  );
}

export default App;
