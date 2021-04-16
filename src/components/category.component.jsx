import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <div id="categories">
      <h3>Categorías</h3>
      {props.categories.map((category) => {
        return (
          <Link
            to={"/category/" + category.id}
            onClick={() => props.onShowProductsList(category.id)}
            key={category.id}
          >
            <h5 key={category.id}>
              <img
                key={category.id}
                src={category.image}
                alt="category"
                width="64"
                height="64"
              />
              <abbr title={"ID: " + category.id}> {category.name}</abbr>
            </h5>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;
