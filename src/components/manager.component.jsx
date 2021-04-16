import axios from "axios";
import React, { Component } from "react";
import Category from "./category.component";
import Form from "./form.component";
import ProductsList from "./products.component";
import Navbar from "./navbar.component";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class Manager extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.resetRedirection = this.resetRedirection.bind(this);
    this.handleShowProductsList = this.handleShowProductsList.bind(this);
    this.state = {
      business_id: 0,
      url: "https://hardcore-poitras-19aebd.netlify.app/.netlify/functions/",
      categories: [],
      business_name: "Elige una tienda",
      business_address: "Dirección",
      redirect: false,
      productsList: [],
      productsLength: 0,
      productsLimit: 0,
      productsEndedAt: 0,
    };
  }

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/categories" />;
    }
  }

  resetRedirection() {
    this.setState({
      redirect: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const params = JSON.stringify({
      business_id: this.state.business_id,
    });

    const CATEGORIES_URL = this.state.url + "getcategories";
    const BUSINESS_URL = this.state.url + "getbusiness";

    axios
      .post(CATEGORIES_URL, params)
      .then((res) => {
        this.setState({ categories: res.data.categories });
      })
      .catch((err) => {
        console.log("Error -> " + err);
        this.setState({ categories: [] });
      });

    axios
      .post(BUSINESS_URL, params)
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
    this.setState({
      redirect: true,
    });
  }

  handleChangeInput(e) {
    this.setState({
      business_id: parseInt(e.target.value),
    });
  }

  handleShowProductsList(id) {
    const PRODUCTS_URL = this.state.url + "getproducts";
    let productsLimit = 3;

    const params = JSON.stringify({
      business_id: this.state.business_id,
      category: id,
      limit: productsLimit,
      start_at: 0,
    });

    axios
      .post(PRODUCTS_URL, params)
      .then((res) => {
        this.setState({
          productsList: res.data.products,
          productsLength: res.data.productsLength,
          productsLimit,
          productsEndedAt: 2,
        });
      })
      .catch((err) => {
        console.log("Error -> " + err);
        this.setState({
          productsList: [],
          productsLimit,
          productsLength: 0,
        });
      });
  }

  render() {
    return (
      <Router>
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
            onRedirection={this.renderRedirect}
          />

          <Route
            path="/categories"
            component={() => (
              <Category
                categories={this.state.categories}
                onShowProductsList={(id) => this.handleShowProductsList(id)}
              />
            )}
          />
          {/* <Category categories={this.state.categories} /> */}

          <Route
            path="/category/:id"
            render={(props) => (
              <ProductsList
                {...props}
                resetRedirect={this.resetRedirection}
                wasRedirected={this.state.redirect}
                products={{
                  list: this.state.productsList,
                  limit: this.state.productsLimit,
                  length: this.state.productsLength,
                }}
              />
            )}
          />
          <button type="button" onClick={() => (window.location = "/")}>
            Inicio
          </button>
        </div>
      </Router>
    );
  }
}

export default Manager;
