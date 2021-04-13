import React from "react";

const Navbar = (props) => {
  return (
    <nav>
      <h1>{props.store.name}</h1>
      <h2>{props.store.address}</h2>
    </nav>
  );
};

export default Navbar;
