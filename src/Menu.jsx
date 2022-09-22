import React from "react";

function Menu({ img, title, price, desc }) {
  return (
    <section className="col menuCol">
      <div className="card cardMenu">
        <div className="card-img-top h-50">
          <img src={img} alt={title} className="h-100 w-100" />
        </div>
        <div className="card-body h-50">
          <div className="card-title d-flex justify-content-between">
            <h5>{title}</h5>
            <h5>{price}</h5>
          </div>
          <div className="text-start">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
