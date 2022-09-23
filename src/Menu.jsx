import React from "react";

function Menu({ items }) {
  return (
    <section className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
      
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem;
          return (
            <div className=" col menuCol">
            <div key={id} className="card cardMenu">
              <div className="card-img-top h-50 w-100">
                <img src={img} alt={title} className="h-100 w-100" />
              </div>
              <div className="card-body h-50">
                <div className="card-title d-flex justify-content-between">
                  <h5>{title}</h5>
                  <h5>${price}</h5>
                </div>
                <div className="text-start">
                  <p>{desc} </p>
                </div>
              </div>
            </div>
            </div>
          );
        })}
   
    </section>
  );
}

export default Menu;
