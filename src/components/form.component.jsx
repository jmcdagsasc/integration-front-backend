import React, { Component } from "react";
import axios from "axios";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      business_id: 0,
      url:
        "https://hardcore-poitras-19aebd.netlify.app/.netlify/functions/getbusiness",
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const params = {
      business_id: this.state.business_id,
    };

    console.log("business_id : " + params.business_id);
    console.log(this.state.url);

    axios
      .post(this.state.url, JSON.stringify(params))
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("business", JSON.stringify(res.data.business));
      })
      .catch((err) => console.log("Error -> " + err));

    //window.location = "/";
  }

  onChangeInput(e) {
    console.log("Valor " + parseInt(e.target.value));
    console.log("Tipo " + typeof parseInt(e.target.value));
    this.setState({
      business_id: parseInt(e.target.value),
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChangeInput} />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default Formulario;
