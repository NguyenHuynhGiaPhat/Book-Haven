import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyContext from "../contexts/MyContext";

class Inform extends Component {
  static contextType = MyContext; // sử dụng this.context để truy cập trạng thái toàn cục

  render() {
    return (
      <div className="inform-container">
        <div className="inform-left">
          <div className="info-item">
            <Link to="/myprofile">My profile</Link>
          </div>
          <div className="info-item">
            <Link to="/myorders">My orders</Link>
          </div>
          <div className="info-item">
            <Link to="/mycart">My cart</Link>
            <b> have {this.context.mycart.length}items</b>
          </div>
        </div>
        <div className="auth-container">
          {this.context.token === "" ? (
            <div className="auth-links">
              <Link to="/login">Login</Link> | <Link to="/signup">Sign-up</Link>{" "}
              | <Link to="/active">Active</Link>
            </div>
          ) : (
            <div className="user-info">
              <b>Hello {this.context.customer.name}</b> |{" "}
              <Link to="/home" onClick={() => this.lnkLogoutClick()}>
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  // event-handlers
  lnkLogoutClick() {
    this.context.setToken("");
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;
