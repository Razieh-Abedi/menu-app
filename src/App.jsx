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
    <div className="container my-3">
      <header>
        <h1 className="text-center display-5">Our Menu</h1>
        <hr className="d-block mx-auto w-50 mb-3" />
      </header>
      <main>
        <div>
          <Categories
            categories={categories}
            filterMenuItems={filterMenuItems}
          />
        </div>
        <div className="container my-4">
          <Menu items={menuItems} />
        </div>
      </main>
      <footer className="text-center">
        <a
          href="https://raziwebdeveloper.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-decoration-none text-black"
        >
          Developed with ❤ by raziwebdeveloper.com
        </a>
      </footer>
    </div>
  );
}

export default App;
