import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import MyContext from "../contexts/MyContext";

class Myprofile extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      txtName: "",
      txtPhone: "",
      txtEmail: "",
    };
  }
  render() {
    if (this.context.token === "") return <Navigate replace to="/login" />;
    return (
      <div className="profile-page">
        <div className="profile-container">
          <h2 className="profile-title">MY PROFILE</h2>
          <form>
            <div className="form-container">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  value={this.state.txtUsername}
                  onChange={(e) => {
                    this.setState({ txtUsername: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={this.state.txtPassword}
                  onChange={(e) => {
                    this.setState({ txtPassword: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={this.state.txtName}
                  onChange={(e) => {
                    this.setState({ txtName: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={this.state.txtPhone}
                  onChange={(e) => {
                    this.setState({ txtPhone: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={this.state.txtEmail}
                  onChange={(e) => {
                    this.setState({ txtEmail: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="UPDATE"
                  onClick={(e) => this.btnUpdateClick(e)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  componentDidMount() {
    if (this.context.customer) {
      this.setState({
        txtUsername: this.context.customer.username,
        txtPassword: this.context.customer.password,
        txtName: this.context.customer.name,
        txtPhone: this.context.customer.phone,
        txtEmail: this.context.customer.email,
      });
    }
  }
  // event-handlers
  btnUpdateClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const customer = {
        username: username,
        password: password,
        name: name,
        phone: phone,
        email: email,
      };
      this.apiPutCustomer(this.context.customer._id, customer);
    } else {
      alert("Please input username and password and name and phone and email");
    }
  }
  // apis
  apiPutCustomer(id, customer) {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.put("/api/customer/customers/" + id, customer, config).then((res) => {
      const result = res.data;
      if (result) {
        alert("You have done it successfully!");
        this.context.setCustomer(result);
      } else {
        alert("Please try again!");
      }
    });
  }
}
export default Myprofile;
