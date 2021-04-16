import React from "react";

const ProductsList = (props) => {
  const renderProducts = (products) => {
    if (products.length != 0) {
      return (
        <ul>
          {products.list.map((product) => (
            <li key={product.id}>{`${product.name} - $${product.price}`}</li>
          ))}
        </ul>
      );
    }
    return "";
  };

  return (
    <div>
      <h2>Productos de la Categoría {props.match.params.id}</h2>
      {props.wasRedirected
        ? props.resetRedirect()
        : renderProducts(props.products)}
      <br />
      <button type="button" onClick={() => props.history.goBack()}>
        Regresar a categorías
      </button>
    </div>
  );
};

export default ProductsList;
