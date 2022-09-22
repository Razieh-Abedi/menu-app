import React from "react";
import "./App.css";
import menuData from "./menuData";
import Categories from "./Categories";
import Menu from "./Menu";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>Our Menu</header>
      <hr />
      <main>
        <div>
          <Categories />
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2 g-md-4">
          {menuData.map((item) => {
            return <Menu id={item.id} {...item} />;
          })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
