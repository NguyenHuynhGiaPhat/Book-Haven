import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import withRouter from "../utils/withRouter";

class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "lunoc1",
      txtPassword: "123",
    };
  }
  render() {
    return (
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">CUSTOMER LOGIN</h2>
          <form className="login-form">
            <div>
              <label>Username</label>
              <input
                type="text"
                value={this.state.txtUsername}
                onChange={(e) => {
                  this.setState({ txtUsername: e.target.value });
                }}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={this.state.txtPassword}
                onChange={(e) => {
                  this.setState({ txtPassword: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="submit"
                value="LOGIN"
                onClick={(e) => this.btnLoginClick(e)}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      alert("Please input username and password");
    }
  }
  // apis
  apiLogin(account) {
    axios.post("/api/customer/login", account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        this.props.navigate("/home");
      } else {
        alert(result.message);
      }
    });
  }
}
export default withRouter(Login);
