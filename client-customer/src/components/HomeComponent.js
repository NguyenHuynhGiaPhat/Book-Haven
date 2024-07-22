import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: [],
    };
  }

  render() {
    const newprods = this.state.newprods.map((item) => {
      return (
        <div key={item._id} className="product-item">
          <figure>
            <Link to={"/product/" + item._id}>
              <img
                src={"data:image/jpg;base64," + item.image}
                alt={item.name}
              />
            </Link>
            <figcaption>
              {item.name}
              <br />
              Price: {item.price}
            </figcaption>
          </figure>
        </div>
      );
    });

    const hotprods = this.state.hotprods.map((item) => {
      return (
        <div key={item._id} className="product-item">
          <figure>
            <Link to={"/product/" + item._id}>
              <img
                src={"data:image/jpg;base64," + item.image}
                alt={item.name}
              />
            </Link>
            <figcaption>
              {item.name}
              <br />
              Price: {item.price}
            </figcaption>
          </figure>
        </div>
      );
    });

    return (
      <div className="home-page">
        <div className="section">
          <h2 className="section-title">NEW PRODUCTS</h2>
          <div className="product-grid">{newprods}</div>
        </div>
        {this.state.hotprods.length > 0 && (
          <div className="section">
            <h2 className="section-title">HOT PRODUCTS</h2>
            <div className="product-grid">{hotprods}</div>
          </div>
        )}
        <div className="footer"></div>
      </div>
    );
  }

  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }

  // apis
  apiGetNewProducts() {
    axios.get("/api/customer/products/new").then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }

  apiGetHotProducts() {
    axios.get("/api/customer/products/hot").then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}

export default Home;
