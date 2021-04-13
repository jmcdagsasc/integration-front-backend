import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input type="text" onChange={props.onChangeInput} />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
