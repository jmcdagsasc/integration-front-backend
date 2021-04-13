import axios from "axios";
import React, { Component } from "react";
import Category from "./category.component";
import Form from "./form.component";
import Navbar from "./navbar.component";

class Manager extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      business_id: 0,
      url: "https://hardcore-poitras-19aebd.netlify.app/.netlify/functions/",
      categories: [],
      business_name: "Elige una tienda",
      business_address: "Dirección",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const params = {
      business_id: this.state.business_id,
    };

    const CATEGORIES_URL = this.state.url + "getcategories";
    const BUSINESS_URL = this.state.url + "getbusiness";

    axios
      .post(CATEGORIES_URL, JSON.stringify(params))
      .then((res) => {
        this.setState({ categories: res.data.categories });
      })
      .catch((err) => {
        console.log("Error -> " + err);
        this.setState({ categories: [] });
      });

    axios
      .post(BUSINESS_URL, JSON.stringify(params))
      .then((res) => {
        this.setState({
          business_name: res.data.business.name,
          business_address: res.data.business.address,
        });
      })
      .catch((err) => {
        console.log("Error -> " + err);
        this.setState({
          business_name: "No existe esa tienda",
          business_address: "Intenta de nuevo",
        });
      });
  }

  handleChangeInput(e) {
    this.setState({
      business_id: parseInt(e.target.value),
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar
          store={{
            id: this.state.business_id,
            name: this.state.business_name,
            address: this.state.business_address,
          }}
        />
        <Form
          onChangeInput={this.handleChangeInput}
          onSubmit={this.handleSubmit}
        />
        <Category categories={this.state.categories} />
      </div>
    );
  }
}

export default Manager;
