import axios from "axios";
import React, { Component } from "react";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        "https://hardcore-poitras-19aebd.netlify.app/.netlify/functions/getcategories",

      business: JSON.parse(localStorage.getItem("business")),
      categories: [],
    };
  }

  componentDidMount() {
    const params = {
      business_id: this.state.business.id,
    };
    axios.post(this.state.url, JSON.stringify(params)).then((res) => {
      this.setState({
        categories: res.data.categories,
      });
    });
  }

  render() {
    return (
      <div id="categories">
        {this.state.categories.map((category) => {
          return <h5 key={category.id}>{category.name}</h5>;
        })}
      </div>
    );
  }
}

export default Category;
