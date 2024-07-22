import axios from "axios";
import React, { Component } from "react";

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: "",
      txtToken: "",
    };
  }
  render() {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <h2 className="profile-title">ACTIVE ACCOUNT</h2>
          <form>
            <div className="form-container">
              <div className="form-group">
                <label>ID</label>
                <input
                  type="text"
                  value={this.state.txtID}
                  onChange={(e) => {
                    this.setState({ txtID: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Token</label>
                <input
                  type="text"
                  value={this.state.txtToken}
                  onChange={(e) => {
                    this.setState({ txtToken: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="ACTIVE"
                  onClick={(e) => this.btnActiveClick(e)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  // event-handlers
  btnActiveClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const token = this.state.txtToken;
    if (id && token) {
      this.apiActive(id, token);
    } else {
      alert("Please input id and token");
    }
  }
  // apis
  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post("/api/customer/active", body).then((res) => {
      const result = res.data;
      if (result) {
        alert("You have done it successfully!");
      } else {
        alert("Please try again!");
      }
    });
  }
}
export default Active;
