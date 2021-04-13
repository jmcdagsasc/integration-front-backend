import React from "react";

const Category = (props) => {
  return (
    <div id="categories">
      <h3>Categorías</h3>
      {props.categories.map((category) => {
        return (
          <h5 key={category.id}>
            <abbr title={"ID: " + category.id}> {category.name}</abbr>
          </h5>
        );
      })}
    </div>
  );
};

export default Category;
