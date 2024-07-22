import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import { Link } from "react-router-dom";

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state

  // event-handlers
  lnkLogoutClick() {
    this.context.setToken("");
    this.context.setUsername("");
  }

  render() {
    return (
      <header className="header">
        <nav className="menu">
          <ul>
            <li>
              <Link to="/admin/home">Home</Link>
            </li>
            <li>
              <Link to="/admin/category">Category</Link>
            </li>
            <li>
              <Link to="/admin/product">Product</Link>
            </li>
            <li>
              <Link to="/admin/order">Order</Link>
            </li>
            <li>
              <Link to="/admin/customer">Customer</Link>
            </li>
          </ul>
          <div className="user-info">
            <b>
              Hello <b>{this.context.username} |</b>
              <Link to="/admin/home" onClick={() => this.lnkLogoutClick()}>
                Logout
              </Link>
            </b>
          </div>
        </nav>
      </header>
    );
  }
}

export default Menu;
