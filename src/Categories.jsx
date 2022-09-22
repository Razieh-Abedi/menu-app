import React from "react";

function Categories({ categories, filterMenuItems }) {
  return (
    <div className="text-center container my-3">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="btn btn-sm btn-warning me-3"
            key={index}
            onClick={() => filterMenuItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
