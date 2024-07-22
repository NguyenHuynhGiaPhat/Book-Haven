import axios from "axios";
import React, { Component } from "react";

class Signup extends Component {
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
    return (
      <div className="signup-container">
        <h2 className="text-center">SIGN-UP</h2>
        <form>
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
              value="SIGN-UP"
              className="btn btn-primary"
              onClick={(e) => this.btnSignupClick(e)}
            />
          </div>
        </form>
      </div>
    );
  }

  // event-handlers
  btnSignupClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const account = {
        username: username,
        password: password,
        name: name,
        phone: phone,
        email: email,
      };
      this.apiSignup(account);
    } else {
      alert("Please input username, password, name, phone, and email");
    }
  }

  // apis
  apiSignup(account) {
    axios.post("/api/customer/signup", account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
}

export default Signup;
